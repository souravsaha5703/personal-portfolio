import React from 'react';
import { motion } from "motion/react";
import { Mail } from "lucide-react";
import { Ripple } from "@/components/magicui/ripple";

const ContactSection: React.FC = () => {
    return (
        <section className='relative w-full h-[100vh] flex items-center justify-center overflow-hidden bg-zinc-50 dark:bg-zinc-950 border-t border-zinc-200 dark:border-zinc-800/10' id='contact'>
            <Ripple/>
            <div className='flex flex-col gap-6 items-center justify-center px-4 relative z-10'>
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="w-16 h-16 rounded-3xl bg-gray-500/10 border border-gray-500/20 flex items-center justify-center mb-2"
                >
                    <Mail className="w-8 h-8 text-gray-700 dark:text-gray-200" />
                </motion.div>
                
                <h2 className='font-literata font-bold text-zinc-900 dark:text-zinc-100 text-5xl tracking-tight leading-tight max-[768px]:text-4xl max-[425px]:text-3xl text-center'>
                    Let's Build Something
                </h2>
                
                <p className='max-w-xl font-montserrat font-medium text-center text-lg text-zinc-500 dark:text-zinc-400 break-keep max-[425px]:text-base'>
                    I'm currently exploring new opportunities. Whether you have a project in mind or just want to say hi, my inbox is always open!
                </p>
            </div>
        </section>
    )
}

export default ContactSection;