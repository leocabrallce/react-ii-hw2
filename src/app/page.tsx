import { Metadata } from "next";
import Image from "next/image";
import homeImage from "/public/images/home.avif";

export const metadata: Metadata = {
  title: "Home",
  description: "Home page",
};

export default function Home() {
  return (
    <>
      <h1>Home page</h1>

      <div className="mt-2">
        <Image
          src={homeImage}
          alt="random image"
          className="rounded max-h-[50vh] w-full object-cover"
        />
      </div>
    </>
  );
}
