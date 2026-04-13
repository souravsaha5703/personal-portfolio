import React, { useState, useEffect } from 'react';
import { motion } from "motion/react";
import profileImg from "@/assets/dp.jpeg";
import Navbar from './Navbar';
import { IoLogoLinkedin, IoLogoGithub } from 'react-icons/io';
import { FaSquareXTwitter } from 'react-icons/fa6';
import { SiLeetcode } from 'react-icons/si';
import { MapPin, Mail, GraduationCap, Briefcase } from 'lucide-react';
import { Link } from 'react-router-dom';

interface GithubData {
    repos: number
    followers: number
    following: number
}

interface LeetCodeData {
    totalSolved: number;
    easySolved: number;
    mediumSolved: number;
    hardSolved: number;
    totalQuestions: number;
    totalEasy: number;
    totalMedium: number;
    totalHard: number;
}

interface Badge {
    id: string;
    displayName: string;
    icon: string;
    creationDate: string;
}

const HeroSection: React.FC = () => {
    const [githubData, setGithubData] = useState<GithubData | null>(null);
    const [leetcodeData, setLeetcodeData] = useState<LeetCodeData | null>(null);
    const [githubBadges, setGithubBadges] = useState<string[]>([]);
    // Helper to generate random heatmap squares
    useEffect(() => {
        const fetchGithubData = async () => {
            try {
                const response = await fetch('https://api.github.com/users/souravsaha5703')
                if (!response.ok) {
                    throw new Error(`Response status: ${response.status}`);
                }
                const data = await response.json()
                setGithubData({
                    repos: data.public_repos,
                    followers: data.followers,
                    following: data.following
                });

            } catch (err) {
                if (err instanceof Error) {
                    console.log(err.message); // safe
                } else {
                    console.log("Unknown error");
                }
            }
        }

        const fetchLeetCodeData = async () => {
            try {
                const response = await fetch('https://alfa-leetcode-api.onrender.com/souravsaha57/profile');
                if (!response.ok) throw new Error(`Response status: ${response.status}`);
                const data = await response.json();

                const badgeResponse = await fetch('https://alfa-leetcode-api.onrender.com/souravsaha57/badges')
                if (!badgeResponse.ok) throw new Error(`Response status: ${badgeResponse.status}`);

                const badgeData = await badgeResponse.json();
                if (badgeData) {
                    let badges: string[] = []
                    badgeData.badges.forEach((badge: Badge) => {
                        badges.push(badge.icon)
                    });
                    setGithubBadges(badges);
                }
                setLeetcodeData({
                    totalSolved: data.totalSolved,
                    easySolved: data.easySolved,
                    mediumSolved: data.mediumSolved,
                    hardSolved: data.hardSolved,
                    totalQuestions: data.totalQuestions,
                    totalEasy: data.totalEasy,
                    totalMedium: data.totalMedium,
                    totalHard: data.totalHard
                });
            } catch (err) {
                console.log(err);
            }
        };

        fetchGithubData();
        fetchLeetCodeData();
    }, []);
    const generateHeatmapSquares = () => {
        const bgColors = [
            'bg-zinc-100 dark:bg-zinc-800',
            'bg-green-300 dark:bg-green-800',
            'bg-green-400 dark:bg-green-600',
            'bg-green-500 dark:bg-green-500',
            'bg-green-600 dark:bg-green-400'
        ];

        return Array.from({ length: 60 }).map((_, i) => {
            const isActive = Math.random() > 0.4;
            const randColor = bgColors[Math.floor(Math.random() * (isActive ? bgColors.length : 1))];
            return <div key={i} className={`aspect-square rounded-[3px] md:rounded-[4px] ${randColor}`} />
        });
    };

    return (
        <div className="min-h-[90vh] w-full bg-zinc-50 dark:bg-zinc-950 font-sans pb-20 pt-20 lg:pt-24 transition-colors duration-300 flex flex-col justify-center items-center relative" id='home'>
            <Navbar />
            <main className="w-full max-w-6xl mx-auto px-4 mt-8 md:mt-12 flex-1 flex flex-col justify-center">
                <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-6 w-full">
                    {/* Left Column - Profile Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        className="bg-white dark:bg-zinc-900 rounded-3xl p-6 border border-zinc-200 dark:border-zinc-800 shadow-sm flex flex-col items-center text-center"
                    >
                        {/* Avatar */}
                        <div className="relative mb-4 mt-4">
                            <div className="size-24 md:size-24 rounded-full p-[3px] bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500">
                                <img src={profileImg} alt="Sourav Saha" className="w-full h-full object-cover object-top rounded-full border-4 border-white dark:border-gray-900" />
                            </div>
                            <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-indigo-600 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider border-2 border-white dark:border-gray-900">
                                #BUILDING
                            </div>
                        </div>

                        <div className="flex items-center gap-2">
                            <h1 className="text-2xl font-semibold font-montserrat text-gray-900 dark:text-white">Sourav Saha</h1>
                        </div>

                        <div className="w-full space-y-1 font-medium text-sm md:text-sm text-gray-900 dark:text-gray-200 mt-4 px-2 font-montserrat">
                            <div className="flex items-center gap-3">
                                <Briefcase className="w-4 h-4 shrink-0" />
                                <span>Still Exploring</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <GraduationCap className="w-4 h-4 shrink-0" />
                                <span>Student</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <Mail className="w-4 h-4 shrink-0" />
                                <span className="truncate">saha83787@gmail.com</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <MapPin className="w-4 h-4 shrink-0" />
                                <span>Kolkata, India</span>
                            </div>
                        </div>

                        <div className="flex flex-wrap items-center justify-start gap-2 mt-4 w-full">
                            <span className="px-3 py-1 font-montserrat bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 text-xs font-medium rounded-md">Frontend</span>
                            <span className="px-3 py-1 font-montserrat bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-200 text-xs font-medium rounded-md">Python</span>
                            <span className="px-3 py-1 font-montserrat bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-200 text-xs font-medium rounded-md">GenAI</span>
                            <span className="px-3 py-1 font-montserrat bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200 text-xs font-medium rounded-md">DSA</span>
                        </div>

                        <p className="text-sm font-montserrat leading-relaxed text-gray-500 dark:text-gray-300 mt-2 text-left">
                            A curious builder who turns creative ideas into reality. I love experimenting with new tools, building from scratch, and staying at the forefront of tech trends.
                        </p>
                    </motion.div>

                    {/* Right Column - Bento Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-fit">

                        {/* GitHub Bento */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
                            className="bg-white dark:bg-zinc-900 rounded-3xl p-6 border border-zinc-200 dark:border-zinc-800 shadow-sm col-span-1 flex flex-col"
                        >
                            <div className="flex items-center justify-between mb-6">
                                <Link to="https://github.com/souravsaha5703" target="_blank" className="hover:opacity-70 transition-opacity">
                                    <IoLogoGithub className="text-4xl text-black dark:text-white" />
                                </Link>
                                <span className="text-sm font-medium text-gray-500 font-montserrat">@souravsaha5703</span>
                            </div>

                            <div className="grid grid-cols-3 gap-2 w-full mb-6 text-center">
                                <div className="bg-zinc-50 font-montserrat dark:bg-zinc-800/50 p-3 rounded-2xl">
                                    {githubData != null && <h4 className="text-2xl font-bold text-zinc-900 dark:text-white">{githubData.repos}</h4>}
                                    <p className="text-[9px] uppercase tracking-wider text-zinc-500 mt-1 font-semibold">Repos</p>
                                </div>
                                <div className="bg-zinc-50 font-montserrat dark:bg-zinc-800/50 p-3 rounded-2xl">
                                    {githubData != null && <h4 className="text-2xl font-bold text-zinc-900 dark:text-white">{githubData.followers}</h4>}
                                    <p className="text-[9px] uppercase tracking-wider text-zinc-500 mt-1 font-semibold">Followers</p>
                                </div>
                                <div className="bg-zinc-50 font-montserrat dark:bg-zinc-800/50 p-3 rounded-2xl">
                                    {githubData != null && <h4 className="text-2xl font-bold text-zinc-900 dark:text-white">{githubData.following}</h4>}
                                    <p className="text-[9px] uppercase tracking-wider text-zinc-500 mt-1 font-semibold">Following</p>
                                </div>
                            </div>

                            {/* Small Mock Heatmap */}
                            <div className="flex-1 flex items-end justify-center w-full mt-auto">
                                <div className="grid grid-cols-[repeat(12,minmax(0,1fr))] gap-1 w-full opacity-80">
                                    {generateHeatmapSquares().slice(0, 36)}
                                </div>
                            </div>
                        </motion.div>

                        {/* Leetcode Bento */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: 0.15, ease: "easeOut" }}
                            className="bg-white dark:bg-zinc-900 rounded-3xl p-6 border border-zinc-200 dark:border-zinc-800 shadow-sm col-span-1 flex flex-col justify-between"
                        >
                            <div className="flex items-center justify-between mb-4">
                                <Link to="https://leetcode.com/u/souravsaha57/" target="_blank" className="w-12 h-12 bg-orange-100 dark:bg-orange-900/30 rounded-full flex items-center justify-center">
                                    <SiLeetcode className="text-2xl text-[#FFA116]" />
                                </Link>
                                <div className="flex items-center gap-2">
                                    <span className="text-[10px] uppercase tracking-wider font-bold text-zinc-400">Badges</span>
                                    <div className="flex -space-x-3">
                                        {/* Mocking actual Leetcode badges with official ones */}
                                        {githubBadges && githubBadges.map((badge: string) => (
                                            <img src={badge} alt="Badge" className="size-10 rounded-full border-2 border-white dark:border-zinc-900 bg-white" />
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div className="mt-4 flex items-center justify-between gap-4 w-full">
                                <div className="relative w-24 h-24 flex items-center justify-center shrink-0">
                                    {/* Circular Progress Mockup */}
                                    <svg className="w-full h-full transform -rotate-90 text-zinc-100 dark:text-zinc-800" viewBox="0 0 100 100">
                                        <circle cx="50" cy="50" r="40" fill="transparent" stroke="currentColor" strokeWidth="6" />
                                        <circle cx="50" cy="50" r="40" fill="transparent" stroke="#FFA116" strokeWidth="6" strokeDasharray="250" strokeDashoffset={leetcodeData && leetcodeData.totalQuestions > 0 ? 250 - (leetcodeData.totalSolved / leetcodeData.totalQuestions) * 250 : 250} className="drop-shadow-sm transition-all duration-1000 ease-out" />
                                    </svg>
                                    <div className="absolute flex flex-col items-center">
                                        <span className="text-xl font-bold font-montserrat text-zinc-900 dark:text-white">{leetcodeData ? leetcodeData.totalSolved : 0}</span>
                                        <span className="text-[9px] uppercase tracking-wider text-zinc-500 font-semibold mt-0.5">Solved</span>
                                    </div>
                                </div>

                                <div className="flex flex-col gap-2.5 w-full">
                                    <div className="w-full">
                                        <div className="flex justify-between text-xs mb-1">
                                            <span className="text-green-500 font-semibold uppercase tracking-wider text-[10px]">Easy</span>
                                            <span className="text-zinc-600 dark:text-zinc-400 font-medium font-montserrat">{leetcodeData ? `${leetcodeData.easySolved} / ${leetcodeData.totalEasy}` : '0/0'}</span>
                                        </div>
                                        <div className="w-full bg-zinc-100 dark:bg-zinc-800 rounded-full h-1.5"><div className="bg-green-500 h-1.5 rounded-full transition-all duration-1000" style={{ width: leetcodeData && leetcodeData.totalEasy > 0 ? `${(leetcodeData.easySolved / leetcodeData.totalEasy) * 100}%` : '0%' }}></div></div>
                                    </div>
                                    <div className="w-full">
                                        <div className="flex justify-between text-xs mb-1">
                                            <span className="text-yellow-500 font-semibold uppercase tracking-wider text-[10px]">Medium</span>
                                            <span className="text-zinc-600 dark:text-zinc-400 font-medium font-montserrat">{leetcodeData ? `${leetcodeData.mediumSolved} / ${leetcodeData.totalMedium}` : '0/0'}</span>
                                        </div>
                                        <div className="w-full bg-zinc-100 dark:bg-zinc-800 rounded-full h-1.5"><div className="bg-yellow-500 h-1.5 rounded-full transition-all duration-1000" style={{ width: leetcodeData && leetcodeData.totalMedium > 0 ? `${(leetcodeData.mediumSolved / leetcodeData.totalMedium) * 100}%` : '0%' }}></div></div>
                                    </div>
                                    <div className="w-full">
                                        <div className="flex justify-between text-xs mb-1">
                                            <span className="text-red-500 font-semibold uppercase tracking-wider text-[10px]">Hard</span>
                                            <span className="text-zinc-600 dark:text-zinc-400 font-medium font-montserrat">{leetcodeData ? `${leetcodeData.hardSolved} / ${leetcodeData.totalHard}` : '0/0'}</span>
                                        </div>
                                        <div className="w-full bg-zinc-100 dark:bg-zinc-800 rounded-full h-1.5"><div className="bg-red-500 h-1.5 rounded-full transition-all duration-1000" style={{ width: leetcodeData && leetcodeData.totalHard > 0 ? `${(leetcodeData.hardSolved / leetcodeData.totalHard) * 100}%` : '0%' }}></div></div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* X / Twitter Bento */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
                            className="bg-white dark:bg-zinc-900 rounded-3xl border border-zinc-200 dark:border-zinc-800 shadow-sm relative overflow-hidden group hover:border-zinc-300 dark:hover:border-zinc-600 transition-colors h-full min-h-[200px]"
                        >
                            <Link to={'https://x.com/exoticSourav03'} target="_blank" className="absolute inset-0 z-20" />
                            {/* Abstract network Mockup inside X card */}
                            <div className="absolute inset-x-0 bottom-0 top-0 pointer-events-none opacity-20 dark:opacity-20 group-hover:opacity-40 transition-opacity duration-500">
                                <svg width="100%" height="100%" viewBox="0 0 200 100" preserveAspectRatio="none">
                                    <path d="M0,20 Q60,80 100,50 T200,80" fill="none" stroke="currentColor" strokeWidth="2" className="text-zinc-300 dark:text-zinc-700" />
                                    <path d="M0,20 Q60,80 100,50 T200,80" fill="none" stroke="currentColor" strokeWidth="1.5" strokeDasharray="5 5" className="text-black dark:text-white opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                                    <circle cx="60" cy="50" r="3" fill="currentColor" className="text-zinc-800 dark:text-zinc-200" />
                                    <circle cx="100" cy="50" r="3" fill="currentColor" className="text-zinc-800 dark:text-zinc-200" />
                                    <circle cx="160" cy="65" r="3" fill="currentColor" className="text-zinc-800 dark:text-zinc-200" />
                                </svg>
                            </div>
                            <div className="absolute inset-0 flex items-center justify-center [perspective:1000px] z-10">
                                <motion.div
                                    animate={{ y: [-6, 6, -6] }}
                                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                    className="w-28 h-28 relative [transform-style:preserve-3d] [transform:rotateX(55deg)_rotateZ(-45deg)] group-hover:[transform:rotateX(50deg)_rotateZ(-40deg)] transition-transform duration-500"
                                >
                                    {/* Platform Layers */}
                                    <div className="absolute inset-0 bg-zinc-300 dark:bg-zinc-950 rounded-3xl [transform:translateZ(-20px)] blur-md opacity-60"></div>
                                    <div className="absolute inset-0 bg-zinc-200 dark:bg-zinc-800 rounded-3xl [transform:translateZ(-10px)] border border-zinc-300 dark:border-zinc-700"></div>
                                    <div className="absolute inset-0 bg-black dark:bg-white rounded-3xl [transform:translateZ(0px)] border border-zinc-800 dark:border-zinc-200 shadow-xl flex items-center justify-center overflow-hidden">
                                        <div className="absolute inset-0 bg-gradient-to-tr from-white/20 dark:from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                        <FaSquareXTwitter className="text-6xl text-white dark:text-black drop-shadow-md" />
                                    </div>
                                </motion.div>
                            </div>
                        </motion.div>

                        {/* LinkedIn Bento */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
                            className="bg-white dark:bg-zinc-900 rounded-3xl border border-zinc-200 dark:border-zinc-800 shadow-sm relative overflow-hidden group hover:border-[#0A66C2]/50 transition-colors h-full min-h-[200px]"
                        >
                            <Link to={'https://www.linkedin.com/in/sourav-saha-973984286/'} target="_blank" className="absolute inset-0 z-20" />
                            {/* Node Graph Mockup inside LinkedIn card */}
                            <div className="absolute inset-x-0 bottom-0 h-40 pointer-events-none opacity-20 dark:opacity-20 group-hover:opacity-60 transition-opacity duration-500">
                                <svg width="100%" height="100%" viewBox="0 0 200 100" preserveAspectRatio="none">
                                    <path d="M-10,80 Q40,20 80,60 T160,40 T220,70" fill="none" stroke="#e4e4e7" strokeWidth="2" className="dark:stroke-zinc-700" />
                                    <path d="M-10,80 Q40,20 80,60 T160,40 T220,70" fill="none" stroke="#0A66C2" strokeWidth="1.5" strokeDasharray="5 5" className="opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                                    <circle cx="40" cy="50" r="4" fill="#0A66C2" />
                                    <circle cx="80" cy="60" r="6" fill="#0A66C2" className="ring-4 ring-[#0A66C2]/20" />
                                    <circle cx="160" cy="40" r="4" fill="#0A66C2" />
                                </svg>
                            </div>
                            <div className="absolute inset-0 flex items-center justify-center [perspective:1000px] z-10">
                                <motion.div
                                    animate={{ y: [6, -6, 6] }}
                                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                                    className="w-28 h-28 relative [transform-style:preserve-3d] [transform:rotateX(55deg)_rotateZ(45deg)] group-hover:[transform:rotateX(50deg)_rotateZ(40deg)] transition-transform duration-500"
                                >
                                    {/* Platform Layers */}
                                    <div className="absolute inset-0 bg-[#0A66C2]/30 rounded-3xl [transform:translateZ(-25px)] blur-xl"></div>
                                    <div className="absolute inset-0 bg-white/60 dark:bg-zinc-800/60 backdrop-blur-sm rounded-3xl border border-white/40 dark:border-zinc-600 [transform:translateZ(-12px)] shadow-lg"></div>
                                    <div className="absolute inset-0 bg-gradient-to-br from-[#0A66C2] to-[#004182] rounded-3xl [transform:translateZ(0px)] flex items-center justify-center shadow-xl border border-[#0A66C2]/50">
                                        <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
                                        <IoLogoLinkedin className="text-7xl text-white drop-shadow-lg" />
                                    </div>
                                </motion.div>
                            </div>
                        </motion.div>

                    </div>
                </div>
            </main>
        </div>
    )
}

export default HeroSection;