"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { FaArrowLeft } from "react-icons/fa6";

interface OverviewPageProps {
  params: {
    id: number;
  };
}

interface MovieInfo {
  adult: boolean;
  original_title: string;
  overview: string;
  poster_path: string;
  popularity: number;
}
interface Video {
  type: string;
  site: string;
  key: string;
}

const Overview = ({ params }: OverviewPageProps) => {
  const router = useRouter();
  const [movieData, setMovieData] = React.useState<MovieInfo | null>(null);
  const [trailer, setTrailer] = useState<Video>();

  const fetchMovies = async () => {
    const apiKey = process.env.NEXT_PUBLIC_TMDB_API_KEY;
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${params.id}`,
        {
          method: "GET",
          headers: {
            accept: "application/json",
            Authorization: `${apiKey}`,
          },
          cache: "force-cache",
        }
      );

      if (!response.ok) {
        return <div>Failed to load movie details</div>;
      }

      const movie = await response.json();
      setMovieData(movie);
      console.log(movie);
    } catch (error) {
      console.log("Error fetching movie details:", error);
    }
  };

  const fetchTrail = async () => {
    const apiKey = process.env.NEXT_PUBLIC_TMDB_API_KEY;
    try {
      const videoRes = await fetch(
        `https://api.themoviedb.org/3/movie/${params.id}/videos`,
        {
          method: "GET",
          headers: {
            accept: "application/json",
            Authorization: `${apiKey}`,
          },
          cache: "force-cache",
        }
      );
      const videoData = await videoRes.json();

      // Find the official trailer (usually from YouTube)
      // Find the official trailer (usually from YouTube)

      const trailer = videoData.results.find(
        (vid: Video) => vid.type === "Trailer" && vid.site === "YouTube"
      );
      setTrailer(trailer);
    } catch (error) {
      console.log("Error at: ", error);
    }
  };

  useEffect(() => {
    fetchMovies();
    fetchTrail();
  }, []);

  return (
    <div className="flex items-start flex-col max-w-6xl mx-auto mt-4">
      <button
        className="mt-4 px-4 py-2 bg-slate-800 text-white rounded mb-4 flex items-center gap-2"
        onClick={() => router.back()}
      >
        {" "}
        <FaArrowLeft />
        back{" "}
      </button>
      <div className="flex gap-4 h-full py-4">
        <img
          className="w-1/3 object-fit"
          loading="lazy"
          src={`https://image.tmdb.org/t/p/w500${movieData?.poster_path}`}
          alt={movieData?.original_title}
        />
        <div className="w-2/3">
          <h2 className="text-3xl font-medium">{movieData?.original_title}</h2>
          <p className="text-[15px] text-slate-700">{movieData?.overview}</p>
          <p className="text-[15px] text-slate-700">
            <span className="font-bold">Popularity: </span>{" "}
            {movieData?.popularity}
          </p>
          <p className="text-[15px] text-slate-700">
            <span className="font-bold">Adult: </span>
            {movieData?.adult ? "Yes" : "No"}
          </p>
          {trailer ? (
            <iframe
              width="100%"
              height="500"
              src={`https://www.youtube.com/embed/${trailer.key}`}
              title="YouTube trailer"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="rounded-lg shadow-md"
            />
          ) : (
            <p>No trailer available.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Overview;
