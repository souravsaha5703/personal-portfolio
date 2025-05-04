import React from 'react';
import { Meteors } from "@/components/magicui/meteors";
import { RiJavascriptFill, RiReactjsFill } from "react-icons/ri";
import { BiLogoTypescript } from "react-icons/bi";
import { motion } from "motion/react";
import { SpinningText } from "@/components/magicui/spinning-text";
import { TextAnimate } from "@/components/magicui/text-animate";
import Navbar from './Navbar';

const HeroSection: React.FC = () => {
    return (
        <>
            <Navbar />
            <div className="relative flex bg-slate-100/20 overflow-hidden h-screen w-full flex-col items-center justify-center rounded-lg border">
                <Meteors />
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
                    className='absolute top-32 left-20 bg-slate-50 rounded-md drop-shadow-md'>
                    <BiLogoTypescript className='text-7xl text-blue-500' />
                </motion.div>

                <motion.div
                    initial={{ y: 40, opacity: 0, filter: "blue(8px)" }}
                    animate={{ y: 0, opacity: 1, filter: "blue(0px)", rotate: 45 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className='absolute bottom-10 left-32 bg-slate-50 rounded-lg drop-shadow-md'>
                    <RiReactjsFill className='text-7xl text-cyan-500' />
                </motion.div>
                <SpinningText className='absolute bottom-20 right-32' radius={6}>learn more • build more • grow more •</SpinningText>
                <div className='flex flex-col items-center justify-center text-center'>
                    <TextAnimate animation="blurInUp" by="character" className='font-montserrat font-medium text-slate-400 text-xl' once delay={0.5}>
                        Hey  there! I'm
                    </TextAnimate>
                    <TextAnimate animation="blurInUp" by="character" className='font-literata font-bold text-blue-600 text-[8vw] tracking-tight leading-tight' once>
                        Sourav Saha
                    </TextAnimate>
                    <TextAnimate animation="blurInUp" by="character" className='font-montserrat font-medium text-slate-600 text-lg' once delay={0.6}>
                        Frontend Developer
                    </TextAnimate>
                </div>
            </div>
        </>
    )
}

export default HeroSection;