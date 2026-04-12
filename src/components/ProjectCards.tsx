import React from 'react';
import { Link } from 'react-router-dom';
import { IoLogoGithub } from "react-icons/io";
import { motion } from "motion/react";
import { FiArrowUpRight } from "react-icons/fi";

interface ProjectCardProps {
    projectImg: string | undefined;
    title: string;
    timeFrame: string;
    desc: string;
    techStack: string[];
    link: string;
    githubLink: string;
}

const ProjectCards: React.FC<ProjectCardProps> = ({ projectImg, title, timeFrame, desc, techStack, link, githubLink }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="group relative flex flex-col bg-white dark:bg-zinc-900 rounded-3xl overflow-hidden border border-zinc-200 dark:border-zinc-800 shadow-sm hover:shadow-md transition-all duration-300 h-full w-full"
        >
            <div className="relative aspect-[16/10] w-full overflow-hidden bg-zinc-100 dark:bg-zinc-800">
                <img
                    src={projectImg}
                    alt={title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Action Buttons on Hover */}
                <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-[-10px] group-hover:translate-y-0">
                    <Link to={githubLink} target="_blank" className="w-10 h-10 rounded-full bg-white/90 dark:bg-black/90 backdrop-blur-sm flex items-center justify-center text-zinc-900 dark:text-zinc-100 hover:scale-110 transition-transform shadow-lg">
                        <IoLogoGithub size={20} />
                    </Link>
                    <Link to={link} target="_blank" className="w-10 h-10 rounded-full bg-white/90 dark:bg-black/90 backdrop-blur-sm flex items-center justify-center text-zinc-900 dark:text-zinc-100 hover:scale-110 transition-transform shadow-lg">
                        <FiArrowUpRight size={22} />
                    </Link>
                </div>
            </div>

            <div className="flex flex-col flex-1 p-6">
                <div className="flex items-start justify-between mb-3 gap-2">
                    <Link to={link} target="_blank" className="hover:opacity-70 transition-opacity">
                        <h3 className="text-xl font-bold font-montserrat text-zinc-900 dark:text-zinc-100 leading-tight transition-colors">
                            {title}
                        </h3>
                    </Link>
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-500 dark:text-zinc-400 font-montserrat shrink-0">
                        {timeFrame}
                    </span>
                </div>

                <p className="text-sm font-montserrat text-zinc-500 dark:text-zinc-400 mb-6 flex-1">
                    {desc}
                </p>

                {techStack && techStack.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-auto">
                        {techStack.map((tech) => (
                            <span
                                key={tech}
                                className="text-[10px] font-semibold uppercase tracking-wider px-2 py-1 rounded-md bg-zinc-50 dark:bg-zinc-800/80 border border-zinc-200 dark:border-zinc-700 text-zinc-600 dark:text-zinc-300"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                )}
            </div>
        </motion.div>
    )
}

export default ProjectCards;