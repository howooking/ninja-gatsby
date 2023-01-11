import { Link } from "gatsby";
import React from "react";

const routes = [
  {
    to: "/",
    title: "Home",
  },
  {
    to: "/about",
    title: "About",
  },
  {
    to: "/projects",
    title: "Projects",
  },
];

export default function Navbar() {
  return (
    <nav className="flex items-center my-8">
      <h1 className="text-2xl font-bold flex-1">Howooking Portfolio</h1>
      <div className="flex gap-4">
        {routes.map((route) => (
          <Link className="hover:underline" to={route.to} key={route.to}>
            {route.title}
          </Link>
        ))}
      </div>
    </nav>
  );
}
