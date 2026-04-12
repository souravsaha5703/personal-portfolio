import React from 'react';
import synctaskImg from "@/assets/synctask.png";
import ProjectCards from './ProjectCards';
import vehicleDocs360Img from "@/assets/vehicleDocs360pic.png";
import hearmediImg from "@/assets/hearmedi.png";
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
    return (
        <section className="w-full bg-zinc-50 dark:bg-zinc-950 transition-colors duration-300 font-sans py-20" id='projects'>
            <div className="max-w-6xl mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ ease: "easeOut", duration: 0.5 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="mb-12"
                >
                    <h2 className='font-literata font-bold text-zinc-900 dark:text-zinc-100 text-4xl tracking-tight'>Featured Projects</h2>
                    <p className='font-montserrat mt-3 text-lg text-zinc-500 dark:text-zinc-400 max-w-2xl'>
                        I've worked on a variety of projects, from simple websites to complex web applications. Here are a few of my favorites.
                    </p>
                </motion.div>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                    {projects.map((project, index) => (
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
                    ))}
                </div>
            </div>
        </section>
    )
}

export default ProjectSection;