import { useState } from "react";

import Image from "./Image";
import { Link } from "react-router-dom";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full h-16 md:h-20 flex justify-between items-center ">
      <Link to={"/"} className="flex items-center gap-4 text-2xl font-bold">
        <Image src="logo.png" w={32} h={32} alt="logo" />
        <span>Lame log</span>
      </Link>

      {/* MOBILE MENU */}

      <div className="md:hidden ">
        <div
          className="cursor-pointer text-4xl "
          onClick={() => setOpen((prev) => !prev)}
        >
          {open ? "x" : "☰"}
        </div>

        {/* Mobile LINKs List */}

        <div
          className={`w-full h-screen flex flex-col justify-center items-center absolute top-16  ${
            open ? "-right-0" : "-right-[100%]"
          } transition-all ease-in-out gap-8 font-medium text-lg `}
        >
          menu
          <Link to={"/"}>Home</Link>
          <Link to={"/"}>Trending</Link>
          <Link to={"/"}>Most Popular</Link>
          <Link to={"/"}>About</Link>
          <Link to={"/login"}>
            <button className="py-2 px-4 rounded-3xl bg-blue-800 text-white">
              Login 👋
            </button>
          </Link>
        </div>
      </div>

      {/* DESKTOP MENU */}

      <div className="hidden md:flex items-center gap-8 xl:gap-12 font-medium">
        <Link to={"/"}>Home</Link>
        <Link to={"/"}>Trending</Link>
        <Link to={"/"}>Most Popular</Link>
        <Link to={"/"}>About</Link>
        <Link to={"/login"}>
          <SignedOut>
            <button className="py-2 px-4 rounded-3xl bg-blue-800 text-white">
              Login 👋
            </button>
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
