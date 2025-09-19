import React, { Suspense, lazy } from 'react';

// Lazy load components
const About = lazy(() => import('./About'));
const Contact = lazy(() => import('./Contact'));
const Experience = lazy(() => import('./Experience'));
const Skills = lazy(() => import('./Skills'));
const Tech = lazy(() => import('./Tech'));
const Works = lazy(() => import('./Works'));
const Footer = lazy(() => import('./Footer'));

// Loading component
const ComponentLoader = () => (
  <div className="flex items-center justify-center py-20">
    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
  </div>
);

// Lazy wrapper component
const LazyWrapper = ({ children }) => (
  <Suspense fallback={<ComponentLoader />}>
    {children}
  </Suspense>
);

// Export lazy components
export const LazyAbout = () => (
  <LazyWrapper>
    <About />
  </LazyWrapper>
);

export const LazyContact = () => (
  <LazyWrapper>
    <Contact />
  </LazyWrapper>
);

export const LazyExperience = () => (
  <LazyWrapper>
    <Experience />
  </LazyWrapper>
);

export const LazyTech = () => (
  <LazyWrapper>
    <Tech />
  </LazyWrapper>
);

export const LazyWorks = () => (
  <LazyWrapper>
    <Works />
  </LazyWrapper>
);

export const LazySkills = () => (
  <LazyWrapper>
    <Skills />
  </LazyWrapper>
);

export const LazyFooter = () => (
  <LazyWrapper>
    <Footer />
  </LazyWrapper>
);
