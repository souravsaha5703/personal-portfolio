import React from 'react';
import { motion } from "motion/react";
import { SpinningText } from "@/components/magicui/spinning-text";
import { Particles } from "@/components/magicui/particles";
import profileImg from "@/assets/dp.jpeg";
import Navbar from './Navbar';
import { IoLogoLinkedin, IoLogoGithub } from 'react-icons/io';
import { FaSquareXTwitter } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import { useTheme } from "@/components/theme-provider";

const HeroSection: React.FC = () => {
    const { theme } = useTheme();
    return (
        <>
            <Navbar />
            <div className="relative flex bg-neutral-100/20 overflow-hidden h-screen w-full flex-col items-center justify-center rounded-lg dark:bg-neutral-950" id='home'>
                <Particles
                    className="absolute inset-0 z-0"
                    quantity={100}
                    ease={80}
                    color={theme === "dark" ? "#ffffff" : "#000000"}
                    refresh
                />
                <div className='max-w-[800px] p-4 flex flex-col items-start justify-start'>
                    <motion.div
                        initial={{ opacity: 0, x: 40, filter: "blur(8px)" }}
                        animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                        transition={{ duration: 0.4, ease: "easeIn" }}
                        className='flex gap-4 items-center justify-center'>
                        <img src={profileImg} alt="Profile Image" className='size-32 object-cover object-top rounded-full max-[425px]:size-20' />
                        <div className='flex flex-col gap-0.5'>
                            <motion.h4
                                initial={{ opacity: 0, filter: "blur(8px)" }}
                                animate={{ opacity: 1, filter: "blur(0px)" }}
                                transition={{ duration: 0.5, ease: "easeIn" }}
                                className='font-montserrat font-semibold dark:font-medium text-neutral-600 text-xl dark:text-neutral-50 max-[425px]:text-base'>
                                Sourav Saha
                            </motion.h4>
                            <motion.h4
                                initial={{ opacity: 0, filter: "blur(8px)" }}
                                animate={{ opacity: 1, filter: "blur(0px)" }}
                                transition={{ duration: 0.6, ease: "easeIn" }}
                                className='font-montserrat font-medium text-neutral-500 text-xl max-[425px]:text-base'>
                                Frontend Developer
                            </motion.h4>
                            <div className='flex gap-4 justify-start items-center'>
                                <Link to={'https://www.linkedin.com/in/sourav-saha-973984286/'} className='rounded-full size-8 flex items-center justify-center drop-shadow-md bg-slate-50 cursor-pointer'>
                                    <IoLogoLinkedin className='text-xl text-blue-600' />
                                </Link>
                                <Link to={'https://x.com/exoticSourav03'} className='rounded-full size-8 flex items-center justify-center drop-shadow-md bg-slate-50 cursor-pointer'>
                                    <FaSquareXTwitter className='text-xl dark:text-black' />
                                </Link>
                                <Link to={'https://github.com/souravsaha5703'} className='rounded-full size-8 flex items-center justify-center drop-shadow-md bg-slate-50 cursor-pointer'>
                                    <IoLogoGithub className='text-xl dark:text-black' />
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                    
                    <SpinningText className='absolute bottom-20 right-32 max-[500px]:right-16 max-[500px]:bottom-16' radius={5}>learn more • build more • grow more •</SpinningText>
                    <motion.div
                        className='flex flex-col gap-4 mt-6 items-center justify-center'>
                        <motion.p
                            initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
                            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                            transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
                            className='font-literata text-xl text-start font-medium dark:font-normal text-neutral-500 dark:text-neutral-100 max-[800px]:text-base'>
                            Hi! I'm Sourav Saha an 22-year-old student, developer, and a curious builder who loves dreaming up cool ideas and making them come true.
                        </motion.p>
                        <motion.p
                            initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
                            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                            transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
                            className='font-literata text-xl text-start font-medium dark:font-normal text-neutral-500 dark:text-neutral-100 max-[800px]:text-base'>
                            Whether it's building from scratch, trying new tools, or keeping up with the latest tech trends, I'm always eager to learn and experiment.
                        </motion.p>
                        <motion.p
                            initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
                            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                            transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
                            className='font-literata text-xl text-start font-medium dark:font-normal text-neutral-500 dark:text-neutral-100 max-[800px]:text-base'>
                            Right now, I'm focused on learning GenAI and building cool GenAI powered applications, and connecting with others who share the same excitement for tech.
                        </motion.p>
                    </motion.div>

                </div>
            </div>
        </>
    )
}

export default HeroSection;