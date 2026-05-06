import { useEffect } from 'react';
import { sections } from '../constants/sections'
import { scrollToSection } from '../utils/scrollToSection';

const sectionsId = sections.map(section => section.id);


export const useKeyboardNavigation = () => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Only handle if not typing in an input
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) {
        return;
      }

      const currentSection = sectionsId.find(section => {
        const element = document.getElementById(section);
        if (!element) return false;
        const rect = element.getBoundingClientRect();
        return rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2;
      });

      const currentIndex = currentSection ? sectionsId.indexOf(currentSection) : -1;

      switch (e.key) {
        case 'ArrowDown':
        case 'PageDown':
          e.preventDefault();
          if (currentIndex < sectionsId.length - 1) {
            scrollToSection(sectionsId[currentIndex + 1]);
          }
          break;
        case 'ArrowUp':
        case 'PageUp':
          e.preventDefault();
          if (currentIndex > 0) {
            scrollToSection(sectionsId[currentIndex - 1]);
          }
          break;
        case 'Home':
          e.preventDefault();
          scrollToSection(sectionsId[0]);
          break;
        case 'End':
          e.preventDefault();
          scrollToSection(sectionsId[sectionsId.length - 1]);
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);
};
