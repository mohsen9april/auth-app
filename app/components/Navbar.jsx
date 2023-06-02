import Link from "next/link";
import React from "react";
import ProfileIcon from "./ProfileIcon";

function Navbar() {
  return (
    <div>
      <nav className="flex items-center justify-between fixed left-0 right-0 px-8 h-14 bg-blue-500 text-white">
        <Link href="/" className="font-bold">
          Logo
        </Link>
        <ProfileIcon />
      </nav>
    </div>
  );
}

export default Navbar;
