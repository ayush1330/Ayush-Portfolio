import React from "react";
import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import ScrollAnimation from "./ScrollAnimation";

const ProjectCard = ({
  name,
  description,
  tags,
  source_code_link,
  live_demo_link,
  impact,
  buttonType,
}) => {
  return (
    <div className="rounded-lg shadow-sm border border-accent/10 hover:shadow-lg hover:border-accent/30 transition-all duration-300 overflow-hidden group">
      <div className="p-6">
        <div className="flex gap-2 mb-4">
          <button
            onClick={() => window.open(source_code_link, "_blank")}
            className="bg-primary text-secondary px-4 py-2 rounded-lg hover:bg-gray-800 hover:scale-105 transition-all duration-200 flex items-center gap-2 text-sm font-medium shadow-sm hover:shadow-md cursor-pointer"
          >
            <img src={github} alt="GitHub" className="w-4 h-4" />
            Code
          </button>
          {false && live_demo_link && (
            <button
              onClick={() => window.open(live_demo_link, "_blank")}
              className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 hover:scale-105 transition-all duration-200 text-sm font-medium shadow-sm hover:shadow-md cursor-pointer flex items-center gap-2"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
              {buttonType || "Live Demo"}
            </button>
          )}
        </div>

        <h3 className="typography-h4 text-body mb-3">{name}</h3>
        <p className="typography-body text-accent mb-4 leading-relaxed">{description}</p>
        
        {impact && (
          <div className="mb-4 p-3 bg-accent-subtle rounded-md border-l-4 border-primary">
            <p className="typography-caption text-accent-dark font-medium">Impact: {impact}</p>
          </div>
        )}

        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={`${name}-${tag.name}`}
              className="px-2 py-1 bg-accent-subtle text-accent-dark rounded-md typography-caption text-xs"
            >
              {tag.name}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

const Works = () => {
  return (
    <>
      <ScrollAnimation>
        <div className="mb-3">
          <p className={styles.heading2}>Projects</p>
        </div>
      </ScrollAnimation>

      <ScrollAnimation delay={200}>
        <div className="mb-12">
          <p className="typography-body text-accent max-w-3xl leading-relaxed">
            Following projects showcase my skills and experience through real-world examples of my work. 
            Each project is briefly described with links to code repositories. It reflects 
            my ability to solve complex problems, work with different technologies, and manage projects effectively.
          </p>
        </div>
      </ScrollAnimation>

      <ScrollAnimation delay={400}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} {...project} />
        ))}
        </div>
      </ScrollAnimation>
    </>
  );
};

export default SectionWrapper(Works, "projects");