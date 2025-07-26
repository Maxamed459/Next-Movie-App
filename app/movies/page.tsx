"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

interface MovieData {
  id: number;
  title: string;
  overview: string;
  poster_path: string;
  vote_average: number;
}

const MoviesPage = () => {
  const router = useRouter();
  const [data, setData] = useState<MovieData[]>([]);
  const fetchMovies = async () => {
    const apiKey = process.env.NEXT_PUBLIC_TMDB_API_KEY;

    try {
      const response = await fetch(
        "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=true&language=en-US&page=1-2&sort_by=popularity.desc",
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
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      setData(data.results);
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };
  useEffect(() => {}, [fetchMovies()]);

  return (
    <div className="max-w-6xl mx-auto mt-4">
      <h1 className="text-3xl font-bold">Popular Movies</h1>
      <p className="text-[15px] text-gray-600 mb-4">
        Here you can find a list of popular movies.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {data.map((movie) => (
          <div
            className="bg-white rounded shadow overflow-hidden cursor-pointer hover:shadow-lg transition-shadow duration-300"
            key={movie.title}
            onClick={() => router.push(`/movies/${movie.id}`)}
          >
            <img
              className="w-full object-cover"
              loading="lazy"
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
            />
            <div className="p-4">
              <h2 className="text-xl font-medium">{movie.title}</h2>
              <p>⭐{movie.vote_average}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MoviesPage;
