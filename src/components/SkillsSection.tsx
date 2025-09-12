import React from 'react';
import { Particles } from "@/components/magicui/particles";
import { useTheme } from './theme-provider';
import { TextAnimate } from './magicui/text-animate';
import { motion } from 'motion/react';
import { Badge } from './ui/badge';
import htmlIcon from "@/assets/html-5-svgrepo-com.svg";
import cssIcon from "@/assets/css-3-svgrepo-com.svg";
import tailwindCssIcon from "@/assets/tailwind-svgrepo-com.svg";
import reactIcon from "@/assets/react-svgrepo-com.svg";
import typescriptIcon from "@/assets/typescript-official-svgrepo-com.svg";
import javascriptIcon from "@/assets/javascript-svgrepo-com.svg";
import nodeIcon from "@/assets/node-svgrepo-com.svg";
import expressIcon from "@/assets/express-svgrepo-com.svg";
import gitIcon from "@/assets/git-svgrepo-com.svg";
import githubIcon from "@/assets/github-142-svgrepo-com.svg";
import pythonIcon from "@/assets/python-svgrepo-com.svg";
import fastapiIcon from "@/assets/FastAPI.svg";
import motionIcon from "@/assets/framer-svgrepo-com.svg";
import vscodeIcon from "@/assets/Visual Studio Code.svg";
import vercelIcon from "@/assets/Vercel.svg";

interface Skills {
  name: String;
  icon: string | undefined
}

const languages: Skills[] = [
  {
    name: "HTML5",
    icon: htmlIcon,
  },
  {
    name: "CSS",
    icon: cssIcon,
  },
  {
    name: "Python",
    icon: pythonIcon,
  },
  {
    name: "Javascript",
    icon: javascriptIcon,
  },
  {
    name: "Typescript",
    icon: typescriptIcon,
  }
];

const libraries: Skills[] = [
  {
    name: "React",
    icon: reactIcon,
  },
  {
    name: "TailwindCSS",
    icon: tailwindCssIcon,
  },
  {
    name: "Express.js",
    icon: expressIcon,
  },
  {
    name: "FastAPI",
    icon: fastapiIcon,
  },
  {
    name: "Framer Motion",
    icon: motionIcon,
  },
];

const developerTools: Skills[] = [
  {
    name: "Git",
    icon: gitIcon,
  },
  {
    name: "Github",
    icon: githubIcon,
  },
  {
    name: "VS Code",
    icon: vscodeIcon
  },
  {
    name: "Vercel",
    icon: vercelIcon
  }
]

const SkillsSection: React.FC = () => {
  const { theme } = useTheme();
  return (
    <div className="relative flex bg-neutral-100/20 overflow-hidden min-h-[80vh] w-full flex-col items-center justify-center rounded-lg dark:bg-neutral-950" id='skills'>
      <Particles
        className="absolute inset-0 z-0"
        quantity={100}
        ease={80}
        color={theme === "dark" ? "#ffffff" : "#000000"}
        refresh
      />
      <div className='max-w-[800px] p-4 flex flex-col items-start justify-start space-y-4'>
        <TextAnimate animation="blurInUp" by="character" className='font-literata font-bold text-neutral-900 dark:text-neutral-100 text-4xl tracking-tight leading-tight max-[425px]:text-3xl'>Skills</TextAnimate>
        <motion.p
          initial={{ opacity: 0, filter: "blur(10px)", y: 20 }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ ease: "easeIn", delay: 0.1, duration: 0.3 }}
          className='font-montserrat font-medium dark:font-normal text-start text-lg text-neutral-500 dark:text-neutral-400 break-keep max-[425px]:text-base'>
          These are the technologies I've learned and worked with. This list is constantly evolving as I continue to learn and grow as a developer.
        </motion.p>
        <div className='w-full flex flex-col items-start space-y-4'>
          <h3 className='text-xl font-montserrat font-semibold text-neutral-500 dark:text-neutral-400 max-[425px]:text-lg'>Languages</h3>
          <div className='w-full flex gap-2 mt-2 flex-wrap'>
            {languages.map((language, index) => {
              return (
                <Badge key={index} variant={'outline'} className='flex gap-2 text-sm font-montserrat font-medium dark:font-normal text-neutral-950 dark:text-neutral-200 px-2 py-1'>
                  <img src={language.icon} className='size-4 object-contain' alt={String(language.name)} />
                  {language.name}
                </Badge>
              )
            })}
          </div>
          <h3 className='text-xl font-montserrat font-semibold text-neutral-500 dark:text-neutral-400 max-[425px]:text-lg'>Frameworks / Libraries</h3>
          <div className='w-full flex gap-2 mt-2 flex-wrap'>
            {libraries.map((library, index) => {
              return (
                <Badge key={index} variant={'outline'} className='flex gap-2 text-sm font-montserrat font-medium dark:font-normal text-neutral-950 dark:text-neutral-200 px-2 py-1'>
                  <img src={library.icon} className='size-4 object-contain' alt={String(library.name)} />
                  {library.name}
                </Badge>
              )
            })}
          </div>
          <h3 className='text-xl font-montserrat font-semibold text-neutral-500 dark:text-neutral-400 max-[425px]:text-lg'>Backend / Runtime</h3>
          <div className='w-full flex gap-2 mt-2 flex-wrap'>
            <Badge variant={'outline'} className='flex gap-2 text-sm font-montserrat font-medium dark:font-normal text-neutral-950 dark:text-neutral-200 px-2 py-1'>
              <img src={nodeIcon} className='size-4 object-contain' alt="Nodejs" />
              Node.js
            </Badge>
          </div>
          <h3 className='text-xl font-montserrat font-semibold text-neutral-500 dark:text-neutral-400 max-[425px]:text-lg'>Developer Tools</h3>
          <div className='w-full flex gap-2 mt-2 flex-wrap'>
            {developerTools.map((devTool, index) => {
              return (
                <Badge key={index} variant={'outline'} className='flex gap-2 text-sm font-montserrat font-medium dark:font-normal text-neutral-950 dark:text-neutral-200 px-2 py-1'>
                  <img src={devTool.icon} className='size-4 object-contain' alt={String(devTool.name)} />
                  {devTool.name}
                </Badge>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default SkillsSection;