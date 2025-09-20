import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import ScrollAnimation from "./ScrollAnimation";

const ExperienceCard = ({ experience, index }) => {
  return (
    <VerticalTimelineElement
      position={experience.position || "left"}
      contentStyle={{
        background: "#333333",
        color: "#ffffff",
        border: "none",
        boxShadow: "none",
      }}
      contentArrowStyle={{ display: "none" }}
      iconStyle={{ display: "none" }}
    >
      <div className="flex justify-between items-start">
        <div className="flex flex-col">
          <h3 className='text-secondary text-[16px] font-bold mb-2' style={{ margin: 0 }}>
            {experience.title}
          </h3>
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4 text-secondary" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z" clipRule="evenodd" />
            </svg>
            <p className='text-secondary text-[16px] font-medium' style={{ margin: 0 }}>
              {experience.company_name}
            </p>
          </div>
        </div>
        <div className="flex flex-col items-end">
          <p className='text-secondary text-[14px] font-medium mb-2' style={{ margin: 0 }}>
            {experience.date}
          </p>
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4 text-secondary" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
            </svg>
            <p className='text-secondary text-[16px] font-medium' style={{ margin: 0 }}>
              {experience.location || "Remote"}
            </p>
          </div>
        </div>
      </div>

    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <>
      <ScrollAnimation>
        <div className="mb-3">
          <p className={`${styles.heading2} text-center`}>
            What I have done so far
          </p>
        </div>
      </ScrollAnimation>

      <ScrollAnimation delay={100}>
        <div className="flex justify-center gap-20 mb-8">
          <button className="px-6 py-3 bg-white/5 text-body text-sm font-medium hover:bg-white/10 transition-all duration-300 rounded-lg">
            EXPERIENCE
          </button>
          <button className="px-6 py-3 bg-white/5 text-body text-sm font-medium hover:bg-white/10 transition-all duration-300 rounded-lg">
            EDUCATION
          </button>
        </div>
      </ScrollAnimation>

      <ScrollAnimation delay={200}>
        <div className='mt-20 flex flex-col'>
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
              index={index}
            />
          ))}
        </VerticalTimeline>
        </div>
      </ScrollAnimation>
    </>
  );
};

export default SectionWrapper(Experience, "work");
