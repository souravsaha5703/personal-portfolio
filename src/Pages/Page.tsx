import React from 'react';
import HeroSection from '@/components/HeroSection';
import AboutMeSection from '@/components/AboutMeSection';
import InfiniteLanguageCards from '@/components/InfiniteLanguageCards';
import ProjectSection from '@/components/ProjectSection';

const Page: React.FC = () => {
  return (
    <div>
      <HeroSection />
      <AboutMeSection />
      <div className="flex flex-col gap-8 w-full my-10">
        <InfiniteLanguageCards direction="left" speed="normal" />
      </div>
      <ProjectSection />
    </div>
  )
}

export default Page;