import { Link, graphql, useStaticQuery } from "gatsby";
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
  const data = useStaticQuery(graphql`
    query SiteInfo {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  const { title } = data.site.siteMetadata;

  return (
    <nav className="flex items-center my-8">
      <h1 className="text-2xl font-bold flex-1">{title}</h1>
      <div className="flex gap-4">
        {routes.map((route) => (
          <Link
            className="hover:underline hover:scale- 105 "
            to={route.to}
            key={route.to}
          >
            {route.title}
          </Link>
        ))}
      </div>
    </nav>
  );
}
