import React from 'react';
import { Meteors } from "@/components/magicui/meteors";
import { RiJavascriptFill, RiReactjsFill } from "react-icons/ri";
import { BiLogoTypescript } from "react-icons/bi";
import { motion } from "motion/react";
import { SpinningText } from "@/components/magicui/spinning-text";
import { TextAnimate } from "@/components/magicui/text-animate";
import profileImg from "@/assets/dp.jpeg";
import Navbar from './Navbar';
import { IoLogoLinkedin, IoLogoGithub } from 'react-icons/io';
import { FaSquareXTwitter } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const HeroSection: React.FC = () => {
    return (
        <>
            <Navbar />
            <div className="relative flex bg-slate-100/20 overflow-hidden h-screen w-full flex-col items-center justify-center rounded-lg border dark:bg-[#00072d]">
                <Meteors />
                <div className='max-w-[1000px] p-4 flex flex-col items-start justify-start'>
                    <motion.div
                        initial={{ opacity: 0, x: 40, filter: "blur(8px)" }}
                        animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                        transition={{ duration: 0.4, ease: "easeIn" }}
                        className='flex gap-4 items-center justify-center'>
                        <img src={profileImg} alt="Profile Image" className='size-32 object-cover object-top rounded-full' />
                        <div className='flex flex-col'>
                            <motion.h4
                                initial={{ opacity: 0, filter: "blur(8px)" }}
                                animate={{ opacity: 1, filter: "blur(0px)" }}
                                transition={{ duration: 0.5, ease: "easeIn" }}
                                className='font-montserrat font-medium text-slate-500 text-xl dark:text-slate-50'>
                                Sourav Saha
                            </motion.h4>
                            <motion.h4
                                initial={{ opacity: 0, filter: "blur(8px)" }}
                                animate={{ opacity: 1, filter: "blur(0px)" }}
                                transition={{ duration: 0.6, ease: "easeIn" }}
                                className='font-montserrat font-medium text-blue-500 text-xl'>
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
                    <motion.div
                        initial={{ x: 40, opacity: 0, filter: "blue(8px)" }}
                        animate={{ x: 0, opacity: 1, filter: "blue(0px)", rotate: -45 }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                        className='absolute top-32 right-12 bg-slate-950 rounded-md drop-shadow-md'>
                        <RiJavascriptFill className='text-7xl text-yellow-300' />
                    </motion.div>

                    <motion.div
                        initial={{ x: -40, opacity: 0, filter: "blue(8px)" }}
                        animate={{ x: 0, opacity: 1, filter: "blue(0px)", rotate: 45 }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                        className='absolute top-32 left-20 bg-slate-50 dark:bg-transparent rounded-md drop-shadow-md'>
                        <BiLogoTypescript className='text-7xl text-blue-500' />
                    </motion.div>

                    <motion.div
                        initial={{ y: 40, opacity: 0, filter: "blue(8px)" }}
                        animate={{ y: 0, opacity: 1, filter: "blue(0px)", rotate: 45 }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                        className='absolute bottom-10 left-32 bg-slate-50 dark:bg-transparent rounded-lg drop-shadow-md'>
                        <RiReactjsFill className='text-7xl text-cyan-500' />
                    </motion.div>
                    <SpinningText className='absolute bottom-20 right-32' radius={6}>learn more • build more • grow more •</SpinningText>
                    <div className='flex mt-4 items-center justify-center gap-2 leading-tight'>
                        <TextAnimate animation="blurInUp" by="character" className='font-lobstar font-normal text-slate-400 text-6xl dark:text-slate-100' once>
                            Hey  there! I'm
                        </TextAnimate>
                        <TextAnimate animation="blurInUp" by="character" className='font-lobstar font-medium text-blue-600 italic text-8xl tracking-tight leading-tight' once delay={0.2}>
                            Sourav
                        </TextAnimate>
                    </div>
                    <div className='flex items-center justify-center gap-4'>
                        <TextAnimate animation="blurInUp" by="character" className='font-lobstar font-normal italic text-blue-600 text-6xl tracking-tight leading-tight' once delay={0.2}>
                            a Frontend Developer
                        </TextAnimate>
                        <TextAnimate animation="blurInUp" by="character" className='font-lobstar font-normal text-slate-400 dark:text-slate-100 text-6xl tracking-tight leading-tight' once delay={0.2}>
                            from Kolkata
                        </TextAnimate>
                    </div>
                    <TextAnimate animation="blurInUp" by="character" className='font-lobstar font-normal text-slate-400 dark:text-slate-100 text-6xl tracking-tight leading-tight' once delay={0.2}>
                        Love building things and helping people
                    </TextAnimate>
                </div>
            </div>
        </>
    )
}

export default HeroSection;