import React from 'react';
import { Meteors } from "@/components/magicui/meteors";
import { RiJavascriptFill, RiReactjsFill } from "react-icons/ri";
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
                    animate={{ rotate: 360 }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                    className='absolute top-48 right-80 -rotate-45 bg-slate-50 rounded-lg drop-shadow-md'>
                    <RiJavascriptFill className='text-7xl text-slate-800' />
                </motion.div>

                <motion.div
                    animate={{ rotate: -360 }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                    className='absolute bottom-36 left-80 rotate-45 bg-slate-50 rounded-lg drop-shadow-md'>
                    <RiReactjsFill className='text-7xl text-slate-800' />
                </motion.div>
                <SpinningText className='absolute bottom-20 right-32' radius={6}>learn more • build more • grow more •</SpinningText>
                <div className='flex flex-col items-center justify-center text-center'>
                    <TextAnimate animation="blurInUp" by="character" className='font-montserrat font-medium text-slate-600 text-xl' once delay={0.5}>
                        Hey  there! I'm
                    </TextAnimate>
                    <TextAnimate animation="blurInUp" by="character" className='font-literata font-bold text-slate-950 text-[8vw] tracking-tight leading-tight' once>
                        Sourav Saha
                    </TextAnimate>
                    <TextAnimate animation="blurInUp" by="character" className='font-montserrat font-medium text-slate-600 text-xl' once delay={0.6}>
                        I build exceptional and accessible digital experiences for the web.
                    </TextAnimate>
                </div>
            </div>
        </>
    )
}

export default HeroSection;