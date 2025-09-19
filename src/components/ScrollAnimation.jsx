import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const ScrollAnimation = ({ 
  children, 
  className = '', 
  delay = 0, 
  direction = 'up',
  threshold = 0.1 
}) => {
  const [ref, isVisible] = useScrollAnimation(threshold);

  const getTransform = () => {
    switch (direction) {
      case 'up':
        return isVisible ? 'translateY(0)' : 'translateY(20px)';
      case 'down':
        return isVisible ? 'translateY(0)' : 'translateY(-20px)';
      case 'left':
        return isVisible ? 'translateX(0)' : 'translateX(-20px)';
      case 'right':
        return isVisible ? 'translateX(0)' : 'translateX(20px)';
      default:
        return isVisible ? 'translateY(0)' : 'translateY(20px)';
    }
  };

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: getTransform(),
        transition: `opacity 0.6s ease-out ${delay}ms, transform 0.6s ease-out ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
};

export default ScrollAnimation;
