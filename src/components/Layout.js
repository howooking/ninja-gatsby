import React from "react";
import Navbar from "./Navbar";
import "../styles/global.css";

export default function Layout({ children }) {
  return (
    <div className="mx-auto max-w-4xl border border-blue-500 px-3">
      <Navbar />
      <div>{children}</div>
      <footer className="border-t border-slate-100 text-center mt-6 py-6">
        <p>copyright 2023 Howooking</p>
      </footer>
    </div>
  );
}
