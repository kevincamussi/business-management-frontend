"use client";
import Link from "next/link";

const Home = () => {
  return (
    <div className="flex justify-center items-center mt-10 w-full text-center text-white font-bold text-xl">
      <div className=" flex flex-col bg-gray-400 p-10 rounded-3xl">
        <p>Dashboard coming soon</p>
        <p>For now access our Holidays Calendar here: </p>
        <Link
          href={"/calendar"}
          className="bg-blue-500 hover:bg-blue-300 p-4 w-fit  mx-auto mt-6  rounded-3xl"
        >
          Calendar
        </Link>
      </div>
    </div>
  );
};

export default Home;
