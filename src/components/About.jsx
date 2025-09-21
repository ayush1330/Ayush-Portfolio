import React from "react";
import { styles } from "../styles";
import { secondTestimonial } from "../assets";
import { SectionWrapper } from "../hoc";
import ScrollAnimation from "./ScrollAnimation";
import OptimizedImage from "./OptimizedImage";

const About = () => {
  return (
    <>
      <ScrollAnimation>
        <div className="mb-3">
          <p className={styles.heading2}>Introduction</p>
        </div>
      </ScrollAnimation>

      {/* Professional Photo and Introduction */}
      <ScrollAnimation delay={200}>
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start mb-16">
        {/* Professional Photo */}
        <div className="flex-shrink-0 w-full lg:w-auto">
          <div className="w-64 h-64 lg:w-80 lg:h-80 mx-auto lg:mx-0 rounded-lg overflow-hidden border-2 border-accent/10 shadow-sm">
            <OptimizedImage
              src={secondTestimonial}
              alt="Ayush Singh - Professional Headshot"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Main Introduction Text */}
        <div className="flex-1 space-y-6">
          <div className={`${styles.lead} leading-relaxed space-y-4`}>
            <p>
              Machine Learning Engineer with 4+ years of experience, building generative AI and agentic systems that don't just respond — they act with purpose. I design and deploy LLM-powered agents that solve complex problems through clean, scalable architecture — always grounded in product vision and user insight.
            </p>
            
            <p>
              I care deeply about intuitive systems, long-term thinking, and AI that blends seamlessly into how people actually work. For me, it's not just about functionality — it's about building tech that feels right and lasts.
            </p>
            
            <p>
              Beyond code, I'm usually chasing music, hikes, or the mysteries of consciousness and the quantum world.
            </p>
          </div>
        </div>
        </div>
      </ScrollAnimation>
    </>
  );
};

export default SectionWrapper(About, "about");
