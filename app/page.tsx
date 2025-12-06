"use client";
import Link from "next/link";

const Home = () => {
  return (
    <div>
      <p>Dashboard coming soon</p>
      <p>For now access our Holidays Calendar here: </p>
      <Link href={"/calendar"}>Calendar</Link>
    </div>
  );
};

export default Home;
