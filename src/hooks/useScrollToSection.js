import { useRef } from 'react';

function useScrollToSection() {
  const sectionRefs = {
    home: useRef(null),
    about: useRef(null),
    projects: useRef(null),
    skills: useRef(null),
    contact: useRef(null),
  };

  const scrollTo = (section) => {
    sectionRefs[section]?.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return { sectionRefs, scrollTo };
}

export default useScrollToSection;
