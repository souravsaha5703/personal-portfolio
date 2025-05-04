import React from 'react';
import dp from '@/assets/dp.jpeg';
import { motion } from "motion/react";
import solarSystemSvg from "@/assets/planet-solar-system-svgrepo-com.svg";
import { Particles } from "@/components/magicui/particles";
import { IoLogoLinkedin, IoLogoGithub } from "react-icons/io";
import { FaSquareXTwitter } from "react-icons/fa6";
import { TextAnimate } from "@/components/magicui/text-animate";

const AboutMeSection: React.FC = () => {
    return (
        <>
            <div className='relative w-full h-screen flex items-center justify-center gap-10'>
                <Particles
                    className="absolute inset-0 z-0"
                    quantity={100}
                    ease={80}
                    color={"#000000"}
                    refresh
                />
                <div className='flex flex-col gap-5 max-w-[425px] items-start px-2'>
                    <TextAnimate animation="blurInUp" by="character" className='font-literata font-bold text-blue-500 text-[3vw] tracking-tight leading-tight'>About Me</TextAnimate>
                    <motion.p
                        initial={{ opacity: 0, filter: "blur(8px)", y: 20 }}
                        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                        className='font-montserrat font-medium text-2xl text-slate-400'
                        transition={{ ease: "easeIn", delay: 0.5 }}>
                        hello there folks, I’m Sourav! frontend developer based in the city of joy, kolkata. I love building things and helping people.
                    </motion.p>
                    <div className='flex gap-4 justify-start items-center'>
                        <div className='rounded-full size-12 flex items-center justify-center drop-shadow-md bg-slate-50 cursor-pointer'>
                            <IoLogoLinkedin className='text-3xl text-blue-600' />
                        </div>
                        <div className='rounded-full size-12 flex items-center justify-center drop-shadow-md bg-slate-50 cursor-pointer'>
                            <FaSquareXTwitter className='text-3xl' />
                        </div>
                        <div className='rounded-full size-12 flex items-center justify-center drop-shadow-md bg-slate-50 cursor-pointer'>
                            <IoLogoGithub className='text-3xl' />
                        </div>
                    </div>
                </div>
                <div className='max-w-[425px] px-5'>
                    <motion.div
                        initial={{ opacity: 0, x: 10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, ease: "easeIn" }}
                        className='relative bg-blue-500 w-[300px] h-[400px] rounded-full'>
                        <div className='absolute -top-1 -left-3 overflow-hidden w-full h-full rounded-full'>
                            <img src={dp} alt="Profile Picture" className='object-cover object-center' />
                        </div>
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                            className='absolute top-2 -left-6 -rotate-45 w-16 bg-transparent rounded-lg drop-shadow-md'>
                            <img src={solarSystemSvg} alt="Solar SVG" />
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </>
    )
}

export default AboutMeSection;