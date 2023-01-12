import React from "react";
import Layout from "../components/layout";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Markdown from "markdown-to-jsx";

export default function ProjectDetails({ data }) {
  const { frontmatter, html } = data.markdownRemark;
  const { date, subtitle, title, featuredImg } = frontmatter;
  const feature = getImage(featuredImg);

  return (
    <Layout>
      <GatsbyImage image={feature} alt="feature" />
      <h2>{title}</h2>
      <h3>{subtitle}</h3>
      <h4>{date}</h4>
      <article className="prose md:prose-lg lg:prose-xl">
        <Markdown>{html}</Markdown>
      </article>
    </Layout>
  );
}
export const QueryVariables = graphql`
  query MyQuery($slug: String) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        slug
        date
        subtitle
        title
        featuredImg {
          childImageSharp {
            gatsbyImageData(width: 900, placeholder: BLURRED, formats: AUTO)
          }
        }
      }
    }
  }
`;
