import React from 'react';
import HeroSection from '@/components/HeroSection';
import InfiniteLanguageCards from '@/components/InfiniteLanguageCards';
import ProjectSection from '@/components/ProjectSection';
import AboutMeSection from '@/components/AboutMeSection';

const Page: React.FC = () => {
  return (
    <div>
      <HeroSection />
      <AboutMeSection />
      <ProjectSection />
      <div className="flex flex-col gap-8 w-full my-10">
        <InfiniteLanguageCards direction="left" speed="normal" />
      </div>
    </div>
  )
}

export default Page;