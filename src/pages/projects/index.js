import React from "react";
import Layout from "../../components/Layout";
import { graphql } from "gatsby";
import ProjectPreview from "../../components/ProjectPreview";

export default function ProjectsRoot({ data }) {
  const projects = data.projects.nodes;
  const contact = data.contact.siteMetadata.contact;

  return (
    <Layout>
      <div className="text-center">
        <h2 className="text-4xl font-extrabold">Portfolio</h2>
        <h3 className="text-2xl">Projects & Website I've Created</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-7">
          {projects.map((project) => (
            <ProjectPreview
              key={project.id}
              projectInfo={project.frontmatter}
            />
          ))}
        </div>
        <p>If you like what you are seeing? contact me {contact}</p>
      </div>
    </Layout>
  );
}

export const projectsQueries = graphql`
  query ProjectsQuery {
    projects: allMarkdownRemark(sort: { frontmatter: { date: DESC } }) {
      nodes {
        frontmatter {
          subtitle
          title
          slug
          date
          thumb {
            childImageSharp {
              gatsbyImageData(width: 450, placeholder: BLURRED, formats: AUTO)
            }
          }
        }
        id
      }
    }
    contact: site {
      siteMetadata {
        contact
      }
    }
  }
`;
