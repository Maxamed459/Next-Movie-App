import React from "react";

const page = () => {
  return (
    <div className="min-h-[90vh] bg-linear-to-r from-[#000b58] to-purple-700">
      <div className="container mt-9">
        <div className="max-w-xl mx-auto pt-20">
          <h1 className="text-3xl lg:text-4xl text-white font-bold">
            Welcome to the Movie App
          </h1>
          <p className="text-[16px] text-gray-200 leading-6 mt-4 ">
            This Movie App allows you to explore a wide range of movies, view
            detailed information, and discover new favorites. If you have any
            questions, feedback, or need support, please feel free to contact
            us. We are committed to providing you with the best movie browsing
            experience.
          </p>
          <p className="text-[16px] text-gray-200 leading-6 mt-2">
            You can reach out to us via email at{" "}
            <a
              href="mailto:support@movieapp.com"
              className="text-purple-300 underline"
            >
              support@movieapp.com
            </a>{" "}
            or use the contact form below. We value your input and strive to
            respond as quickly as possible.
          </p>
          <p className="text-[16px] text-gray-200 leading-6 mt-2">
            Thank you for choosing Movie App. Enjoy discovering and sharing your
            favorite films!
          </p>
        </div>
      </div>
    </div>
  );
};

export default page;
