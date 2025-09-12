import React from 'react';
import { Particles } from "@/components/magicui/particles";
import synctaskImg from "@/assets/synctask.png";
import ProjectCards from './ProjectCards';
import vehicleDocs360Img from "@/assets/vehicleDocs360pic.png";
import hearmediImg from "@/assets/hearmedi.png";
import { TextAnimate } from "@/components/magicui/text-animate";
import { motion } from "motion/react";
import { useTheme } from "@/components/theme-provider";

interface ProjectsInterface {
    projectImg: string;
    title: string;
    timeframe: string;
    desc: string;
    techStack: string[];
    link: string;
    githublink: string;
}

const projects: ProjectsInterface[] = [
    {
        projectImg: hearmediImg,
        title: "HearMedi",
        timeframe: "Jun 25 - Jun 25",
        desc: "It is a smart GenAI-powered web application that helps users understand their medicines by simply uploading a picture of a medicine packet. It will extract and filter medicine info and generate user friendly explanations.",
        techStack: ["React Js", "Typescript", "Tailwind CSS", "Shadcn Ui", "OCR", "OpenAI", "Murf AI", "Framer Motion"],
        link: "https://hearmedi.vercel.app/",
        githublink: "https://github.com/souravsaha5703/hear-medicine"
    },
    {
        projectImg: synctaskImg,
        title: "SyncTask",
        timeframe: "Jan 2025 - Apr 2025",
        desc: "SyncTasks is a web-based to-do application designed for efficient task management, smart analytics, and seamless team collaboration. It helps users stay organized, track progress, and work together to get things done.",
        techStack: ["React Js", "Typescript", "Tailwind CSS", "Appwrite", "Shadcn Ui", "Framer Motion", "React Redux", "Recharts", "Magic Ui"],
        link: "https://collaborative-todo-mauve.vercel.app/",
        githublink: "https://github.com/souravsaha5703/collaborative-todo"
    },
    {
        projectImg: vehicleDocs360Img,
        title: "Vehicle Docs 360",
        timeframe: "Apr 2024 - May 2024",
        desc: "It is a web application designed to revolutionize vehicle entry management at factories. It eliminates the need of manual record keeping by gate personnel, replacing it with a swift and efficient QR Code base system.",
        techStack: ["React Js", "Javascript", "Tailwind CSS", "Node.js", "Express Js", "Shadcn Ui", "MailTrap", "qrcode", "@yudiel/react-qr-scanner"],
        link: "https://vehicledocs360web.vercel.app/",
        githublink: "https://github.com/souravsaha5703/vehicle_docs_qr"
    },
]

const ProjectSection: React.FC = () => {
    const { theme } = useTheme();
    return (
        <>
            <div className="relative flex bg-neutral-100/20 overflow-hidden min-h-[80vh] w-full flex-col items-center justify-center rounded-lg dark:bg-neutral-950" id='projects'>
                <Particles
                    className="absolute inset-0 z-0"
                    quantity={100}
                    ease={80}
                    color={theme === "dark" ? "#ffffff" : "#000000"}
                    refresh
                />
                <div className='max-w-[800px] p-4 flex flex-col items-start justify-start space-y-4'>
                    <TextAnimate animation="blurInUp" by="character" className='font-literata font-bold text-neutral-900 dark:text-neutral-100 text-4xl tracking-tight leading-tight'>Featured Projects</TextAnimate>
                    <motion.p
                        initial={{ opacity: 0, filter: "blur(10px)", y: 20 }}
                        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                        transition={{ ease: "easeIn", delay: 0.1, duration: 0.3 }}
                        className='font-montserrat font-medium dark:font-normal text-start text-lg text-neutral-500 dark:text-neutral-400 break-keep max-[768px]:px-5 max-[768px]:text-base'>
                        I've worked on a variety of projects, from simple websites to complex web applications. Here are a few of my favorites.
                    </motion.p>
                    <div className='w-full flex py-5 flex-wrap gap-4 items-start justify-start'>
                        {projects.map((project, index) => {
                            return (
                                <ProjectCards
                                    key={index}
                                    projectImg={project.projectImg}
                                    title={project.title}
                                    timeFrame={project.timeframe}
                                    desc={project.desc}
                                    techStack={project.techStack}
                                    link={project.link}
                                    githubLink={project.githublink}
                                />
                            )
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProjectSection;