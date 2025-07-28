"use client";
import React, { useState } from "react";
import { MovieData } from "./movies/page";

interface Movie extends MovieData {
  adult: boolean;
}

export default function Home() {
  const [movie, setMovie] = useState<Movie>();
  const [query, setQuery] = useState<string>("");
  const api = process.env.NEXT_PUBLIC_TMDB_API_KEY;

  const handleClick = async (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    try {
      const res = await fetch(
        `https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(
          query
        )}&language=en-US&page=1`,
        {
          headers: {
            accept: "application/json",
            Authorization: `Bearer ${api}`,
          },
          cache: "force-cache",
        }
      );
      const data = await res.json();
      setMovie(data.results);
      console.log(data);
    } catch (error) {
      console.log("Error at fetching data: ", error);
    }
  };
  return (
    <div className="flex flex-col items-center justify-center bg-linear-to-r from-[#000b58] to-purple-700">
      <div className="min-h-[70vh] flex items-center justify-center">
        <div className="max-w-[90%] mx-auto flex flex-col items-center justify-center">
          <div className="mb-9 w-full space-y-3">
            <h1 className="text-4xl md:text-3xl text-white lg:text-6xl font-bold text-left md:text-center  ">
              Welcome Next Movie App
            </h1>
            <p className="text-[18px] text-gray-200 md:max-w-2/3 mx-auto text-left md:text-center">
              Here you can find the last movies, old movies, Entertainment
              movies, Romantic Movies, Cartoons, and Action movies{" "}
            </p>
          </div>

          <form className="w-full md:w-3/4">
            <div className="flex flex-col md:flex-row gap-4">
              <input
                type="text"
                placeholder="Enter The name of the movie"
                id="searchFilm"
                className="px-3 py-3 rounded-md bg-gray-200 flex-3/4"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyUp={handleClick}
              />
              <button
                // onClick={handleClick}
                className="px-6 py-3 rounded-lg bg-gray-200 text-black font-medium flex-1/4 hover:bg-gray-300"
              >
                Search
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className="max-w-[90%] mx-auto mt-9 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
        {movie ? (
          <>
            {movie.map((mov) => (
              <div key={mov.id} className="bg-gray-100 shadow-lg">
                <img
                  src={`https://image.tmdb.org/t/p/w500${mov?.poster_path}`}
                  alt=""
                  className=""
                  loading="lazy"
                />
                <div className="p-4">
                  <h2 className="text-[15px] font-medium text-[#000b58]">
                    {mov?.title}
                  </h2>
                  <p className="text-[15px] text-[#000b58]">
                    <span className="font-bold">Popularity:</span>{" "}
                    {mov?.vote_average}
                  </p>
                  <p className="text-[15px] text-[#000b58]">
                    <span className="font-bold">release_date:</span>{" "}
                    {mov.release_date}
                  </p>
                </div>
              </div>
            ))}
          </>
        ) : (
          <div className="min-h-[10vh] p-4"></div>
        )}
      </div>
    </div>
  );
}
