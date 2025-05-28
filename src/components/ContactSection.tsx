import React from 'react';
import { TextAnimate } from "@/components/magicui/text-animate";
import { motion } from "motion/react";
import { IoLogoLinkedin, IoLogoGithub } from "react-icons/io";
import { FaSquareXTwitter, FaArrowRight } from "react-icons/fa6";
import { Ripple } from "@/components/magicui/ripple";
import { Link } from "react-router-dom";

const ContactSection: React.FC = () => {
    return (
        <>
            <div className='relative w-full h-[700px] flex items-center justify-center gap-10 overflow-hidden dark:bg-[#00072d]'>
                <Ripple />
                <div className='flex flex-col gap-5 items-center justify-center px-2'>
                    <TextAnimate animation="blurInUp" by="character" className='font-literata font-bold text-blue-500 dark:text-blue-600 text-[3vw] tracking-tight leading-tight'>Lets Stay Connected</TextAnimate>
                    <motion.p
                        initial={{ opacity: 0, filter: "blur(10px)", y: 20 }}
                        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                        transition={{ ease: "easeIn", delay: 0.2 }}
                        className='max-w-2xl font-montserrat font-medium text-center text-xl text-slate-400 dark:text-slate-300 break-keep'>
                        Have questions or want to collaborate? I’m always open to new projects or even a casual conversation—feel free to get in touch!
                    </motion.p>
                    <div className='flex gap-5 mt-10'>
                        <Link to={'https://github.com/souravsaha5703'} target='_blank' className='bg-black flex items-center justify-center px-6 gap-2 h-11 rounded-lg hover:bg-black'>
                            <IoLogoGithub className='text-xl text-white' />
                            <span className='font-montserrat font-medium text-white text-base'>Github</span>
                            <FaArrowRight className='text-base text-white' />
                        </Link>
                        <Link to={'https://x.com/exoticSourav03'} target='_blank' className='bg-black flex items-center justify-center px-6 gap-2 h-11 rounded-lg hover:bg-black'>
                            <FaSquareXTwitter className='text-xl text-white' />
                            <span className='font-montserrat font-medium text-white text-base'>X (Twitter)</span>
                            <FaArrowRight className='text-base text-white' />
                        </Link>
                        <Link to={'https://www.linkedin.com/in/sourav-saha-973984286/'} target='_blank' className='bg-blue-600 flex items-center justify-center px-6 gap-2 h-11 rounded-lg hover:bg-blue-700'>
                            <IoLogoLinkedin className='text-xl text-white' />
                            <span className='font-montserrat font-medium text-base text-white'>Linkedin</span>
                            <FaArrowRight className='text-base text-white' />
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ContactSection;