import React from 'react';
import { Particles } from "@/components/magicui/particles";
import synctaskImg from "@/assets/synctask.png";
import ProjectCards from './ProjectCards';
import vehicleDocs360Img from "@/assets/vehicleDocs360.png";
import sideLineFootballImg from "@/assets/sidelineImg.jpeg";
import { TextAnimate } from "@/components/magicui/text-animate";
import { motion } from "motion/react";

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
        projectImg: synctaskImg,
        title: "SyncTask",
        timeframe: "Jan 25 - Apr 25",
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
    {
        projectImg: sideLineFootballImg,
        title: "Sideline Football",
        timeframe: "Aug 2024 - Sep 2024",
        desc: "In this website any one can see football league or cup details around the world. User can see match fixtures, football clubs standings in their respective league and top scorers of that league.",
        techStack: ["React Js", "Javascript", "Tailwind CSS", "Shadcn Ui", "Rapid API"],
        link: "https://sidelinefootball.netlify.app/",
        githublink: "https://github.com/souravsaha5703/football-league-data-react"
    }
]

const ProjectSection: React.FC = () => {
    return (
        <>
            <div className='relative w-full h-full flex flex-col items-center justify-center gap-4'>
                <Particles
                    className="absolute inset-0 z-0"
                    quantity={100}
                    ease={80}
                    color={"#000000"}
                    refresh
                />
                <TextAnimate animation="blurInUp" by="character" className='font-literata font-bold text-blue-500 text-[3vw] tracking-tight leading-tight'>Featured Projects</TextAnimate>
                <motion.p
                    initial={{ opacity: 0, filter: "blur(10px)", y: 20 }}
                    whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    transition={{ ease: "easeIn", delay: 0.2 }}
                    className='max-w-2xl font-montserrat font-medium text-center text-2xl text-slate-400 break-keep'>
                    I've worked on a variety of projects, from simple websites to complex web applications. Here are a few of my favorites.
                </motion.p>
                <div className='max-w-[800px] flex p-5 flex-wrap gap-4 items-center justify-center'>
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
        </>
    )
}

export default ProjectSection;