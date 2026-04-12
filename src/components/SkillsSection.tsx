import React from 'react';
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

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15, filter: "blur(4px)" },
    show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.4, ease: "easeOut" } }
  };

  return (
    <section className="w-full bg-zinc-50 dark:bg-zinc-950 transition-colors duration-300 font-sans py-12" id='skills'>
      <div className='max-w-6xl mx-auto px-4 flex flex-col items-start justify-start space-y-2'>
        <div className="space-y-3">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ ease: "easeOut", duration: 0.5 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2 className='font-literata font-bold text-neutral-900 dark:text-neutral-100 text-4xl tracking-tight leading-tight max-[425px]:text-3xl'>Skills</h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, filter: "blur(10px)", y: 20 }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ ease: "easeIn", delay: 0.1, duration: 0.4 }}
            viewport={{ once: true, margin: "-100px" }}
            className='font-montserrat font-medium dark:font-normal text-start text-lg text-neutral-500 dark:text-neutral-400 break-keep max-[425px]:text-base max-w-2xl'>
            These are the technologies I've learned and worked with. This list is constantly evolving as I continue to learn and grow as a developer.
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className='w-full flex flex-col items-start space-y-6 mt-4'
        >
          {/* Languages */}
          <div className="w-full">
            <motion.h3 variants={itemVariants} className='text-xl font-montserrat font-semibold text-neutral-800 dark:text-neutral-200 mb-2 max-[425px]:text-lg'>Languages</motion.h3>
            <div className='w-full flex gap-3 flex-wrap'>
              {languages.map((language, index) => (
                <motion.div variants={itemVariants} key={index}>
                  <Badge variant={'outline'} className='flex items-center gap-2 text-sm font-montserrat font-medium dark:font-normal text-neutral-800 dark:text-neutral-200 px-3 py-1.5 hover:-translate-y-1 hover:shadow-md dark:hover:shadow-zinc-800/50 hover:border-zinc-300 dark:hover:border-zinc-600 transition-all duration-300 cursor-default bg-white dark:bg-zinc-900'>
                    <img src={language.icon} className='size-4 object-contain' alt={String(language.name)} />
                    {language.name}
                  </Badge>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Frameworks */}
          <div className="w-full">
            <motion.h3 variants={itemVariants} className='text-xl font-montserrat font-semibold text-neutral-800 dark:text-neutral-200 mb-2 max-[425px]:text-lg'>Frameworks / Libraries</motion.h3>
            <div className='w-full flex gap-3 flex-wrap'>
              {libraries.map((library, index) => (
                <motion.div variants={itemVariants} key={index}>
                  <Badge variant={'outline'} className='flex items-center gap-2 text-sm font-montserrat font-medium dark:font-normal text-neutral-800 dark:text-neutral-200 px-3 py-1.5 hover:-translate-y-1 hover:shadow-md dark:hover:shadow-zinc-800/50 hover:border-zinc-300 dark:hover:border-zinc-600 transition-all duration-300 cursor-default bg-white dark:bg-zinc-900'>
                    <img src={library.icon} className='size-4 object-contain' alt={String(library.name)} />
                    {library.name}
                  </Badge>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Backend */}
          <div className="w-full">
            <motion.h3 variants={itemVariants} className='text-xl font-montserrat font-semibold text-neutral-800 dark:text-neutral-200 mb-2 max-[425px]:text-lg'>Backend / Runtime</motion.h3>
            <div className='w-full flex gap-3 flex-wrap'>
              <motion.div variants={itemVariants}>
                <Badge variant={'outline'} className='flex items-center gap-2 text-sm font-montserrat font-medium dark:font-normal text-neutral-800 dark:text-neutral-200 px-3 py-1.5 hover:-translate-y-1 hover:shadow-md dark:hover:shadow-zinc-800/50 hover:border-zinc-300 dark:hover:border-zinc-600 transition-all duration-300 cursor-default bg-white dark:bg-zinc-900'>
                  <img src={nodeIcon} className='size-4 object-contain' alt="Nodejs" />
                  Node.js
                </Badge>
              </motion.div>
            </div>
          </div>

          {/* Developer Tools */}
          <div className="w-full">
            <motion.h3 variants={itemVariants} className='text-xl font-montserrat font-semibold text-neutral-800 dark:text-neutral-200 mb-2 max-[425px]:text-lg'>Developer Tools</motion.h3>
            <div className='w-full flex gap-3 flex-wrap'>
              {developerTools.map((devTool, index) => (
                <motion.div variants={itemVariants} key={index}>
                  <Badge variant={'outline'} className='flex items-center gap-2 text-sm font-montserrat font-medium dark:font-normal text-neutral-800 dark:text-neutral-200 px-3 py-1.5 hover:-translate-y-1 hover:shadow-md dark:hover:shadow-zinc-800/50 hover:border-zinc-300 dark:hover:border-zinc-600 transition-all duration-300 cursor-default bg-white dark:bg-zinc-900'>
                    <img src={devTool.icon} className='size-4 object-contain' alt={String(devTool.name)} />
                    {devTool.name}
                  </Badge>
                </motion.div>
              ))}
            </div>
          </div>

        </motion.div>
      </div>
    </section>
  )
}

export default SkillsSection;