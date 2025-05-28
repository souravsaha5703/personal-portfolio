import React from 'react';
import { motion } from "motion/react";
import { Particles } from "@/components/magicui/particles";
import { TextAnimate } from "@/components/magicui/text-animate";
import { useTheme } from "@/components/theme-provider";

const AboutMeSection: React.FC = () => {
    const { theme } = useTheme();
    return (
        <>
            <div className='relative w-full h-[700px] flex items-center justify-center gap-10 dark:bg-[#00072d]'>
                <Particles
                    className="absolute inset-0 z-0"
                    quantity={100}
                    ease={80}
                    color={theme === "dark" ? "#ffffff" : "#000000"}
                    refresh
                />
                <div className='flex flex-col gap-5 items-center justify-center px-2'>
                    <TextAnimate animation="blurInUp" by="character" className='font-literata font-bold text-blue-500 dark:text-blue-600 text-[3vw] tracking-tight leading-tight'>About Me</TextAnimate>
                    <motion.p
                        initial={{ opacity: 0, filter: "blur(10px)", y: 20 }}
                        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                        transition={{ ease: "easeIn", delay: 0.2 }}
                        className='max-w-3xl font-montserrat font-medium text-center text-2xl text-slate-400 dark:text-slate-300 break-keep'>
                        I'm Sourav Saha a Frontend Developer from the city of joy Kolkata. I have been coding for over 2 years, starting my journey in the beginning of 2023. Initially I learned C, JAVA, Python at college and also a bit of DSA topics of my own. Then i learned HTML, CSS, and JavaScript to build websites. My first project was a simple TODO website built with HTML, CSS, and JavaScript (mid-2023). As I progressed, I focused heavily on React.js.
                    </motion.p>
                    
                </div>
            </div>
        </>
    )
}

export default AboutMeSection;