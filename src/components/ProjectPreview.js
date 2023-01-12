import { Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import React from "react";

export default function ProjectPreview({ projectInfo }) {
  const { date, subtitle, title, slug, thumb } = projectInfo;
  const thumbnail = getImage(thumb);
  return (
    <Link to={`/projects/${slug}`} className="hover:opacity-70">
      <div className="border border-slate-200 rounded-xl overflow-hidden">
        <GatsbyImage image={thumbnail} alt="thumbnail" />
        <h2 className="text-purple-800 font-extrabold text-xl">{title}</h2>
        <p className="text-slate-700 font-bold text-xs">{date}</p>
        <p className="p-2 line-clamp-1">{subtitle}</p>
      </div>
    </Link>
  );
}
