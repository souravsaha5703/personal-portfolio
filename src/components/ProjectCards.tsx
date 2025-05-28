import React from 'react';
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Badge } from './ui/badge';
import { Link } from 'react-router-dom';
import { IoLogoGithub } from "react-icons/io";
import { CiGlobe } from "react-icons/ci";
import { BlurFade } from "@/components/magicui/blur-fade";

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
        <BlurFade delay={0.25} inView>
            <Card className={"w-[350px] flex flex-col overflow-hidden border hover:shadow-lg transition-all duration-300 ease-out h-full dark:bg-slate-900/10 dark:backdrop-blur-md dark:shadow-md"}>
                <Link to={link} ><img src={projectImg} alt={title} width={500} height={300} className="h-40 w-full overflow-hidden object-cover object-top" /></Link>
                <CardHeader className="px-3">
                    <div>
                        <CardTitle className="text-lg font-bold font-montserrat text-blue-600 dark:text-blue-500">{title}</CardTitle>
                        <time className="font-montserrat text-sm font-medium text-slate-500">{timeFrame}</time>
                        <p className="text-base leading-snug font-montserrat text-slate-950 dark:text-slate-300">
                            {desc}
                        </p>
                    </div>
                </CardHeader>
                <CardContent className="flex flex-col px-2">
                    {techStack && techStack.length > 0 && (
                        <div className="mt-2 flex flex-wrap gap-1">
                            {techStack?.map((tech) => (
                                <Badge
                                    className="px-1 py-0 text-sm font-montserrat font-medium"
                                    variant="secondary"
                                    key={tech}
                                >
                                    {tech}
                                </Badge>
                            ))}
                        </div>
                    )}
                </CardContent>
                <CardFooter className="px-2 pb-2 gap-2">
                    <Link to={link} target="_blank">
                        <Badge className="flex gap-2 px-2 py-1 text-sm">
                            <CiGlobe className='text-base text-slate-100 dark:text-black' />
                            Website
                        </Badge>
                    </Link>
                    <Link to={githubLink} target="_blank">
                        <Badge className="flex gap-2 px-2 py-1 text-sm">
                            <IoLogoGithub className='text-base text-slate-100 dark:text-black' />
                            Github
                        </Badge>
                    </Link>
                </CardFooter>
            </Card>
        </BlurFade>

    )
}

export default ProjectCards;