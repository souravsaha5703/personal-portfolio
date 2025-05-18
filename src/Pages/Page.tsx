import React from 'react';
import HeroSection from '@/components/HeroSection';
import InfiniteLanguageCards from '@/components/InfiniteLanguageCards';
import ProjectSection from '@/components/ProjectSection';
import AboutMeSection from '@/components/AboutMeSection';
import FooterSection from '@/components/FooterSection';
import ContactSection from '@/components/ContactSection';

const Page: React.FC = () => {
  return (
    <div>
      <HeroSection />
      <AboutMeSection />
      <ProjectSection />
      <div className="flex flex-col gap-8 w-full my-10">
        <InfiniteLanguageCards direction="left" speed="normal" />
      </div>
      <ContactSection/>
      <FooterSection />
    </div>
  )
}

export default Page;