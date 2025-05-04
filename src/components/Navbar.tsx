import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';

const Navbar: React.FC = () => {
    const [isScrolled, setIsScrolled] = useState<boolean>(false);
    const [hovered, setHovered] = useState<string | null>(null);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            setIsScrolled(scrollY > 20);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <header className='w-full fixed top-5 left-0 flex items-center justify-center z-50'>
            <motion.nav
                initial={{ width: "100%" }}
                animate={{ width: isScrolled ? "50%" : "100%" }}
                transition={{ duration: 0.5, ease: "linear" }}
                className={`py-4 px-10 ${isScrolled ? "rounded-3xl bg-slate-100/5 backdrop-blur-md shadow-md" : "rounded-none bg-transparent"}`}>
                <div className='w-full flex items-center justify-between'>
                    <h1 className='font-literata font-bold text-slate-950 text-3xl cursor-pointer'>S</h1>
                    <div className='flex gap-5'>
                        <motion.span transition={{ duration: 0.5, ease: "linear" }} onMouseEnter={() => setHovered('Home')} onMouseLeave={() => setHovered(null)} className='relative font-montserrat font-normal text-slate-950 hover:text-yellow-500 text-xl cursor-pointer'>
                            Home
                            {hovered == "Home" && (
                                <motion.div
                                    initial={{ scaleX: 0 }}
                                    animate={{ scaleX: 1 }}
                                    exit={{ scaleX: 0 }}
                                    transition={{ duration: 0.2, ease: "linear" }}
                                    className="absolute left-0 right-0 -bottom-1 h-[2px] bg-blue-500 origin-center"
                                >

                                </motion.div>
                            )}
                        </motion.span>
                        <motion.span transition={{ duration: 0.5, ease: "linear" }} onMouseEnter={() => setHovered('Projects')} onMouseLeave={() => setHovered(null)} className='relative font-montserrat font-normal text-slate-950 hover:text-yellow-500 text-xl cursor-pointer'>
                            Projects
                            {hovered == "Projects" && (
                                <motion.div
                                    initial={{ scaleX: 0 }}
                                    animate={{ scaleX: 1 }}
                                    exit={{ scaleX: 0 }}
                                    transition={{ duration: 0.2, ease: "linear" }}
                                    className="absolute left-0 right-0 -bottom-1 h-[2px] bg-blue-500 origin-center"
                                >

                                </motion.div>
                            )}
                        </motion.span>
                        <motion.span transition={{ duration: 0.5, ease: "linear" }} onMouseEnter={() => setHovered('Contact')} onMouseLeave={() => setHovered(null)} className='relative font-montserrat font-normal text-slate-950 hover:text-yellow-500 text-xl cursor-pointer'>
                            Contact
                            {hovered == "Contact" && (
                                <motion.div
                                    initial={{ scaleX: 0 }}
                                    animate={{ scaleX: 1 }}
                                    exit={{ scaleX: 0 }}
                                    transition={{ duration: 0.2, ease: "linear" }}
                                    className="absolute left-0 right-0 -bottom-1 h-[2px] bg-blue-500 origin-center"
                                >

                                </motion.div>
                            )}
                        </motion.span>
                        <motion.span transition={{ duration: 0.5, ease: "linear" }} onMouseEnter={() => setHovered('Resume')} onMouseLeave={() => setHovered(null)} className='relative font-montserrat font-normal text-slate-950 hover:text-yellow-500 text-xl cursor-pointer'>
                            Resume
                            {hovered == "Resume" && (
                                <motion.div
                                    initial={{ scaleX: 0 }}
                                    animate={{ scaleX: 1 }}
                                    exit={{ scaleX: 0 }}
                                    transition={{ duration: 0.2, ease: "linear" }}
                                    className="absolute left-0 right-0 -bottom-1 h-[2px] bg-blue-500 origin-center"
                                >

                                </motion.div>
                            )}
                        </motion.span>
                    </div>
                </div>
            </motion.nav>
        </header>
    )
}

export default Navbar;