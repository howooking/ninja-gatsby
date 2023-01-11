import React from "react";
import Navbar from "./Navbar";

export default function Layout({ children }) {
  return (
    <div>
      <Navbar />
      <div>{children}</div>
      <footer>
        <p>copyright 2023 Howooking</p>
      </footer>
    </div>
  );
}
