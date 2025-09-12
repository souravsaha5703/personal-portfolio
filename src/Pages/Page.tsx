import React from 'react';
import HeroSection from '@/components/HeroSection';
import InfiniteLanguageCards from '@/components/InfiniteLanguageCards';
import ProjectSection from '@/components/ProjectSection';
import FooterSection from '@/components/FooterSection';
import ContactSection from '@/components/ContactSection';
import SkillsSection from '@/components/SkillsSection';

const Page: React.FC = () => {
  return (
    <div>
      <HeroSection />
      <SkillsSection />
      <ProjectSection />
      <div className="flex flex-col gap-8 w-full py-10 bg-neutral-100/20 dark:bg-neutral-950">
        <InfiniteLanguageCards direction="left" speed="normal" />
      </div>
      <ContactSection/>
      <FooterSection />
    </div>
  )
}

export default Page;