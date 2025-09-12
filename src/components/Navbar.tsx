import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { ModeToggle } from './mode-toggle';
import { Link } from 'react-scroll';

const Navbar: React.FC = () => {
    const [isScrolled, setIsScrolled] = useState<boolean>(false);
    const [hovered, setHovered] = useState<string | null>(null);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 588);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 588) {
                setIsMobile(true);
            } else {
                setIsMobile(false);
            }
        };

        window.addEventListener("resize", handleResize);
        handleResize();
        return () => window.removeEventListener("resize", handleResize);
    }, []);

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

    const handleResumeDownload = () => {
        const link = document.createElement("a");
        link.href = "/resume.pdf";
        link.download = "My_Resume.pdf";
        link.click();
    }

    return (
        <header className='w-full fixed top-5 left-0 flex items-center justify-center z-50'>
            <motion.nav
                transition={{ duration: 0.5, ease: "linear" }}
                className={`w-[800px] mx-5 py-4 px-10 ${isScrolled ? "rounded-3xl bg-slate-100/5 backdrop-blur-md shadow-md" : "rounded-none bg-transparent"}`}>
                <div className='w-full flex items-center justify-between'>
                    <h1 className='font-literata font-bold text-neutral-950 dark:text-neutral-50 text-3xl cursor-pointer'>S</h1>
                    {!isMobile ? (
                        <div className='flex gap-5'>
                            <motion.span transition={{ duration: 0.5, ease: "linear" }} onMouseEnter={() => setHovered('Home')} onMouseLeave={() => setHovered(null)} className='relative font-montserrat font-normal text-neutral-950 dark:text-neutral-100 text-xl cursor-pointer'>
                                <Link to={'home'} smooth={true}>Home</Link>
                                {hovered == "Home" && (
                                    <motion.div
                                        initial={{ scaleX: 0 }}
                                        animate={{ scaleX: 1 }}
                                        exit={{ scaleX: 0 }}
                                        transition={{ duration: 0.2, ease: "linear" }}
                                        className="absolute left-0 right-0 -bottom-1 h-[2px] bg-neutral-950 dark:bg-neutral-100 origin-center"
                                    >

                                    </motion.div>
                                )}
                            </motion.span>
                            <motion.span transition={{ duration: 0.5, ease: "linear" }} onMouseEnter={() => setHovered('Projects')} onMouseLeave={() => setHovered(null)} className='relative font-montserrat font-normal text-neutral-950 dark:text-neutral-100 text-xl cursor-pointer'>
                                <Link to={'projects'} smooth={true}>Projects</Link>
                                {hovered == "Projects" && (
                                    <motion.div
                                        initial={{ scaleX: 0 }}
                                        animate={{ scaleX: 1 }}
                                        exit={{ scaleX: 0 }}
                                        transition={{ duration: 0.2, ease: "linear" }}
                                        className="absolute left-0 right-0 -bottom-1 h-[2px] bg-neutral-950 dark:bg-neutral-100 origin-center"
                                    >

                                    </motion.div>
                                )}
                            </motion.span>
                            <motion.span transition={{ duration: 0.5, ease: "linear" }} onMouseEnter={() => setHovered('Contact')} onMouseLeave={() => setHovered(null)} className='relative font-montserrat font-normal text-neutral-950 dark:text-neutral-100 text-xl cursor-pointer'>
                                <Link to={'contact'} smooth={true}>Contact</Link>
                                {hovered == "Contact" && (
                                    <motion.div
                                        initial={{ scaleX: 0 }}
                                        animate={{ scaleX: 1 }}
                                        exit={{ scaleX: 0 }}
                                        transition={{ duration: 0.2, ease: "linear" }}
                                        className="absolute left-0 right-0 -bottom-1 h-[2px] bg-neutral-950 dark:bg-neutral-100 origin-center"
                                    >

                                    </motion.div>
                                )}
                            </motion.span>
                            <motion.span transition={{ duration: 0.5, ease: "linear" }} onMouseEnter={() => setHovered('Resume')} onMouseLeave={() => setHovered(null)}
                                onClick={handleResumeDownload} className='relative font-montserrat font-normal text-neutral-950 dark:text-neutral-100 text-xl cursor-pointer'>
                                Resume
                                {hovered == "Resume" && (
                                    <motion.div
                                        initial={{ scaleX: 0 }}
                                        animate={{ scaleX: 1 }}
                                        exit={{ scaleX: 0 }}
                                        transition={{ duration: 0.2, ease: "linear" }}
                                        className="absolute left-0 right-0 -bottom-1 h-[2px] bg-neutral-950 dark:bg-neutral-100 origin-center"
                                    >

                                    </motion.div>
                                )}
                            </motion.span>
                            <ModeToggle />
                        </div>
                    ) : (
                        <ModeToggle />
                    )}
                </div>
            </motion.nav>
        </header >
    )
}

export default Navbar;