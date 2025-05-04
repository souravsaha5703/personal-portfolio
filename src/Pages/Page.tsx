import React from 'react';
import HeroSection from '@/components/HeroSection';
import AboutMeSection from '@/components/AboutMeSection';
import ProjectSection from '@/components/ProjectSection';

const Page: React.FC = () => {
  return (
    <div>
      <HeroSection />
      <AboutMeSection />
      <ProjectSection />
    </div>
  )
}

export default Page;