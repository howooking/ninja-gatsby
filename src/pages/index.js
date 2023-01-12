import * as React from "react";
import Layout from "../components/Layout";
import Button from "../components/Button";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

export default function Homepage({ data }) {
  console.log(data.file);
  const banner = getImage(data.file);

  return (
    <Layout>
      <div className="flex">
        <section className="w-[50%]">
          <div className="flex flex-col gap-4">
            <h2 className="text-5xl font-extrabold">Design</h2>
            <h3 className="text-4xl">Develope & Deply</h3>
            <p className="text-sm">Web Frontend Developer</p>
          </div>
          <Button text={"My Portfolio Project"} to={"/projects"} />
        </section>
        <section className="w-[50%]">
          <GatsbyImage image={banner} alt="banner" />
        </section>
      </div>
    </Layout>
  );
}

export const BannerQuery = graphql`
  query BannerQuery {
    file(relativePath: { eq: "banner.png" }) {
      childImageSharp {
        gatsbyImageData(width: 400, placeholder: BLURRED, formats: AUTO)
      }
    }
  }
`;
