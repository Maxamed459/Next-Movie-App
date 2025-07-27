export default function Home() {
  return (
    <div className="flex items-center justify-center absolute inset-0 bg-linear-to-r from-[#000b58] to-purple-700">
      <div className="max-w-[90%] mx-auto p-4 flex flex-col items-center justify-center ">
        <div className="mb-4">
          <h1 className="text-2xl md:text-3xl text-white lg:text-6xl font-bold text-center mb-4">
            Welcome Next Movie App
          </h1>
          <p className="text-[18px] text-gray-200 text-center mb-4 max-w-2/3 mx-auto">
            Here you can find the last movies, old movies, Entertainment movies,
            Romantic Movies, Cartoons, and Action movies{" "}
          </p>
        </div>

        <form className="w-3/4">
          <div className="flex fle gap-4">
            <input
              type="text"
              placeholder="Enter The name of the movie"
              id="searchFilm"
              className="px-6 py-3 rounded-md bg-gray-200 flex-3/4"
            />
            <button className="px-6 py-3 rounded-lg bg-gray-200 text-black font-medium flex-1/4 hover:bg-gray-700">
              Search
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
