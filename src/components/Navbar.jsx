import React from "react";
import ModeToggle from "./mode-toggle";

const Navbar = () => {
  return (
    <header>
      <nav className="border border-x-0 border-t-0 py-2 px-6 mb-2 w-full flex flex-row justify-between items-center">
        <div>
          <img
            src="/season_logo512.png"
            width={50}
            height={50}
            className="border p-1 rounded-full"
          />
        </div>
        <div className="font-bold text-xl">Weather Mood</div>
        <div>
          <ModeToggle />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
