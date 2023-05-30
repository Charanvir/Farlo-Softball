import React, { useState } from "react";

import Link from "next/link";
import { FaTimes, FaBars } from "react-icons/fa";

const navLinks: { title: string; link: string }[] = [
  {
    title: "Players",
    link: "/players",
  },
  {
    title: "Seasons",
    link: "/seasons",
  },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const handleMenu = () => {
    setOpen((prev) => !prev);
  };
  return (
    <nav className="sticky top-0 z-50" style={{ backgroundColor: "black" }}>
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-cente">
            <Link
              href={"/"}
              className="sm:text-3xl text-2xl font-mono"
              style={{ color: "rgb(238,232,170)" }}
            >
              Farlo Softball
            </Link>
          </div>
          {/* Nav Links */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navLinks.map((nav) => (
                <Link
                  className="hover:bg-zinc-700 px-3 py-2 rounded-md
                  sm:text-2xl font-mono transition-all duration-500"
                  href={nav.link}
                  key={nav.title}
                  style={{ color: "rgb(238,232,170)" }}
                >
                  {nav.title}
                </Link>
              ))}
            </div>
          </div>
          {/* Mobile Hamburger Button */}
          <div className="-mr-2 flex md:hidden">
            <button
              type="button"
              onClick={handleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md"
              style={{ color: "rgb(238,232,170)" }}
            >
              <span className="sr-only">Open Menu</span>
              {open === true ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      {open ? (
        <div className="md:hidden">
          <div className="pb-3 space-y-1 sm:px-3 text-center">
            {navLinks.map((link) => (
              <Link
                className="hover:bg-zinc-700 px-3 py-2 rounded-md
              text-xl font-mono transition-all duration-500 "
                href={link.link}
                key={link.title}
                style={{ color: "rgb(238,232,170)" }}
              >
                {link.title}
              </Link>
            ))}
          </div>
        </div>
      ) : null}
    </nav>
  );
}
