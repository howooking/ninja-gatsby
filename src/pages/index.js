import * as React from "react";
import Layout from "../components/layout";
import Button from "../components/Button";

export default function Homepage() {
  return (
    <Layout>
      <section>
        <div className="flex flex-col gap-4">
          <h2 className="text-5xl font-extrabold">Design</h2>
          <h3 className="text-4xl">Develope & Deply</h3>
          <p className="text-sm">Web Frontend Developer</p>
        </div>
        <Button text={"My Portfolio Project"} to={"/projects"} />
      </section>
    </Layout>
  );
}
