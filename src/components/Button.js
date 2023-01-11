import { Link } from "gatsby";
import React from "react";

export default function Button({ to, text }) {
  return (
    <Link
      to={to}
      className="bg-purple-600 rounded-md p-2 shadow-lg hover:scale-105 font-bold  cursor-pointer inline-block my-2"
    >
      {text}
    </Link>
  );
}
