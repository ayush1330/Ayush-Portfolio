import React from "react";
import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import ScrollAnimation from "./ScrollAnimation";

const ServiceCard = ({ title }) => {
  return (
    <div className="w-full rounded-lg p-6 min-h-[200px] flex flex-col justify-center items-center text-center bg-white/5 hover:bg-white/10 transition-all duration-300">
      <h3 className="typography-h4 text-body">{title}</h3>
    </div>
  );
};

const Skills = () => {
  return (
    <>
      <ScrollAnimation>
        <div className="mb-3">
          <p className={styles.heading2}>Domains</p>
        </div>
      </ScrollAnimation>

      <ScrollAnimation delay={200}>
        <div className="mb-12">
          <p className="typography-body text-accent max-w-3xl leading-relaxed">
            I specialize in cutting-edge AI and machine learning technologies, delivering end-to-end solutions 
            that transform data into actionable insights and automate complex processes.
          </p>
        </div>
      </ScrollAnimation>

      <ScrollAnimation delay={400}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <ServiceCard key={service.title} title={service.title} />
          ))}
        </div>
      </ScrollAnimation>
    </>
  );
};

export default SectionWrapper(Skills, "skills");