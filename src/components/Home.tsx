import React, { useState } from 'react';
import { type ThemeConfig } from '../themes';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

interface HomeProps {
    currentTheme: ThemeConfig;
}

// Interactive Cosmic Background: Sparkling Stars, Shooting Comet, & Flying UFO
const CosmicBackground: React.FC = () => {
    const stars = [
        { top: '8%', left: '12%', size: 3, delay: '0s', dur: '3.2s' },
        { top: '15%', left: '78%', size: 4, delay: '1.2s', dur: '4s' },
        { top: '22%', left: '34%', size: 2, delay: '0.6s', dur: '2.8s' },
        { top: '18%', left: '92%', size: 3, delay: '2.1s', dur: '3.5s' },
        { top: '35%', left: '8%', size: 2.5, delay: '1.7s', dur: '3s' },
        { top: '42%', left: '85%', size: 3.5, delay: '0.3s', dur: '4.2s' },
        { top: '28%', left: '60%', size: 2, delay: '2.5s', dur: '3.6s' },
        { top: '55%', left: '18%', size: 3, delay: '1.4s', dur: '3.1s' },
        { top: '62%', left: '72%', size: 2.5, delay: '0.8s', dur: '3.9s' },
        { top: '70%', left: '30%', size: 3.5, delay: '2s', dur: '4.5s' },
        { top: '78%', left: '90%', size: 2, delay: '1.1s', dur: '2.7s' },
        { top: '85%', left: '14%', size: 3, delay: '0.5s', dur: '3.4s' },
        { top: '92%', left: '65%', size: 2.5, delay: '1.9s', dur: '3.8s' },
        { top: '12%', left: '48%', size: 3, delay: '2.8s', dur: '4.1s' },
        { top: '48%', left: '42%', size: 2, delay: '1.5s', dur: '3s' },
        { top: '65%', left: '5%', size: 3, delay: '0.2s', dur: '3.3s' },
    ];

    return (
        <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
            {/* Ambient Nebula Glows */}
            <div className="absolute top-[10%] left-1/2 -translate-x-1/2 w-[900px] h-[550px] bg-[#531f94]/20 rounded-full blur-[140px]" />
            <div className="absolute top-[45%] -left-[100px] w-[500px] h-[500px] bg-[#3b126b]/25 rounded-full blur-[120px]" />
            <div className="absolute top-[65%] -right-[100px] w-[600px] h-[600px] bg-[#2b0c54]/30 rounded-full blur-[130px]" />

            {/* Sparkling Stars */}
            {stars.map((s, idx) => (
                <div
                    key={idx}
                    className="absolute rounded-full bg-white"
                    style={{
                        top: s.top,
                        left: s.left,
                        width: `${s.size}px`,
                        height: `${s.size}px`,
                        boxShadow: `0 0 ${s.size * 2}px rgba(255, 255, 255, 0.8), 0 0 ${s.size * 4}px rgba(181, 138, 255, 0.6)`,
                        animation: `star-sparkle ${s.dur} ease-in-out infinite ${s.delay}`,
                    }}
                />
            ))}

            {/* Shooting Comet */}
            <div className="absolute top-0 left-0 w-full h-full animate-comet pointer-events-none">
                <div className="relative flex items-center">
                    <div 
                        className="w-44 sm:w-60 h-[2.5px] rounded-full"
                        style={{
                            background: 'linear-gradient(to left, rgba(255, 255, 255, 1) 0%, rgba(143, 216, 255, 0.8) 25%, rgba(181, 138, 255, 0.4) 65%, transparent 100%)',
                            boxShadow: '0 0 10px rgba(143, 216, 255, 0.8), 0 0 20px rgba(181, 138, 255, 0.5)'
                        }}
                    />
                    <div 
                        className="w-2.5 h-2.5 rounded-full bg-white shrink-0 -ml-1"
                        style={{
                            boxShadow: '0 0 12px #ffffff, 0 0 24px #8fd8ff, 0 0 36px #b58aff'
                        }}
                    />
                </div>
            </div>

            {/* Little Flying UFO */}
            <div className="absolute top-0 left-0 animate-ufo pointer-events-none">
                <div className="animate-ufo-wobble flex flex-col items-center">
                    <svg
                        width="76"
                        height="44"
                        viewBox="0 0 76 44"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="filter drop-shadow-[0_4px_16px_rgba(181,138,255,0.6)]"
                    >
                        <path
                            d="M26 20C26 12 31 6 38 6C45 6 50 12 50 20Z"
                            fill="#8fd8ff"
                            fillOpacity="0.85"
                        />
                        <ellipse cx="38" cy="14" rx="8" ry="5" fill="#e0f4ff" fillOpacity="0.75" />
                        
                        <circle cx="38" cy="15" r="3.2" fill="#120925" />
                        <ellipse cx="36.8" cy="14.5" rx="0.8" ry="1.1" fill="#5fd68a" />
                        <ellipse cx="39.2" cy="14.5" rx="0.8" ry="1.1" fill="#5fd68a" />

                        <ellipse cx="38" cy="22" rx="34" ry="10" fill="#331960" stroke="#7e4fc9" strokeWidth="1.5" />
                        <ellipse cx="38" cy="21" rx="30" ry="7.5" fill="#4a2785" />
                        
                        <circle cx="16" cy="22" r="2.2" fill="#ffd23f" className="animate-pulse" />
                        <circle cx="27" cy="24" r="2.2" fill="#5fd68a" className="animate-pulse" style={{ animationDelay: '0.4s' }} />
                        <circle cx="38" cy="25" r="2.4" fill="#8fd8ff" className="animate-pulse" style={{ animationDelay: '0.8s' }} />
                        <circle cx="49" cy="24" r="2.2" fill="#ffd23f" className="animate-pulse" style={{ animationDelay: '1.2s' }} />
                        <circle cx="60" cy="22" r="2.2" fill="#5fd68a" className="animate-pulse" style={{ animationDelay: '1.6s' }} />

                        <ellipse cx="38" cy="26" rx="14" ry="4" fill="#1e0d3c" stroke="#b58aff" strokeWidth="1" />
                        <ellipse cx="38" cy="27" rx="8" ry="2" fill="#ffd23f" />
                    </svg>

                    <div 
                        className="animate-ufo-beam w-24 h-28 -mt-2.5 rounded-b-full pointer-events-none"
                        style={{
                            background: 'polygon(30% 0%, 70% 0%, 100% 100%, 0% 100%)',
                            clipPath: 'polygon(35% 0%, 65% 0%, 100% 100%, 0% 100%)',
                            backgroundImage: 'linear-gradient(to bottom, rgba(143, 216, 255, 0.45) 0%, rgba(181, 138, 255, 0.2) 60%, transparent 100%)'
                        }}
                    />
                </div>
            </div>
        </div>
    );
};

const Home: React.FC<HomeProps> = ({ currentTheme }) => {
    const [copied, setCopied] = useState(false);

    const handleShare = async () => {
        if (navigator.share) {
            try {
                await navigator.share({
                    title: 'Raisin Riot',
                    text: 'Check out Raisin Riot - Interactive Games for TikTok & Twitch!',
                    url: window.location.href,
                });
            } catch {
                // Cancelled
            }
        } else {
            await navigator.clipboard.writeText(window.location.href);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        }
    };

    return (
        <motion.div
            key="home"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="w-full relative min-h-screen"
        >
            {/* Space Background (Comet, UFO, Sparkling Stars) */}
            <CosmicBackground />

            {/* Main Content Container */}
            <div className="relative z-10 flex flex-col items-center justify-center px-4 py-16 md:py-24 max-w-6xl mx-auto">
                {/* Hero Section */}
                <motion.div
                    key={currentTheme.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    className="text-center max-w-4xl mx-auto mb-20"
                >
                    <h1 className="headline-arcade text-6xl sm:text-7xl md:text-8xl font-black mb-6 tracking-tight text-[#f4f1e8]">
                        RAISIN RIOT
                    </h1>

                    <p className="text-xl md:text-2xl font-bold mb-4 text-[#9f96c2] max-w-2xl mx-auto leading-relaxed">
                        Interactive Games for TikTok, Twitch &amp; Local Play
                    </p>

                    <p className="text-sm md:text-base font-medium mb-10 text-[#9f96c2] opacity-90 max-w-xl mx-auto">
                        Works with Twitch, TikTok, Kick &amp; more — don't see your platform?{' '}
                        <a
                            href="#contact"
                            onClick={(e) => {
                                e.preventDefault();
                                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                            }}
                            className="underline underline-offset-2 text-[#ffd23f] hover:text-[#ffe484] transition-colors"
                        >
                            Let us know
                        </a>{' '}
                        and we'll look into it.
                    </p>

                    <div className="flex flex-wrap gap-4 justify-center items-center">
                        <button
                            onClick={() => document.getElementById('games')?.scrollIntoView({ behavior: 'smooth' })}
                            className="btn-pressable btn-gold px-9 py-4 text-lg font-black tracking-wider uppercase"
                        >
                            Our Games
                        </button>

                        <button
                            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                            className="btn-pressable btn-indigo px-9 py-4 text-lg font-bold tracking-wide"
                        >
                            Contact Us
                        </button>

                        <div className="relative">
                            <button
                                onClick={handleShare}
                                className="btn-pressable btn-indigo px-8 py-4 text-lg font-bold tracking-wide"
                            >
                                {copied ? 'Copied' : 'Share'}
                            </button>

                            <AnimatePresence>
                                {copied && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 8 }}
                                        animate={{ opacity: 1, y: -42 }}
                                        exit={{ opacity: 0, y: -50 }}
                                        transition={{ duration: 0.2 }}
                                        className="absolute left-1/2 -translate-x-1/2 pointer-events-none z-30 whitespace-nowrap bg-[#120925] border border-[#331960] text-[#5fd68a] text-xs font-black px-3 py-1.5 rounded-lg shadow-lg"
                                    >
                                        Link Copied
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </div>
                </motion.div>

                {/* CELESTIAL ORBIT HIGHWAY */}
                <div className="relative w-full mb-32 py-6">
                    {/* Connecting Celestial Trajectory Line (Desktop) */}
                    <div className="absolute top-[105px] left-0 right-0 h-[2px] hidden md:block pointer-events-none z-0">
                        <div 
                            className="w-full h-full"
                            style={{
                                background: 'radial-gradient(ellipse at center, rgba(181, 138, 255, 0.45) 0%, rgba(143, 216, 255, 0.25) 50%, transparent 95%)',
                                boxShadow: '0 0 12px rgba(181, 138, 255, 0.4)'
                            }}
                        />
                        <svg className="absolute -top-3 left-0 w-full h-8" preserveAspectRatio="none">
                            <line x1="10%" y1="16" x2="90%" y2="16" stroke="rgba(255, 210, 63, 0.3)" strokeWidth="1.5" strokeDasharray="6 10" />
                        </svg>
                    </div>

                    {/* 3 Floating Planetary Waypoints */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 relative z-10">
                        {/* Waypoint 1: The Deep Space Transmitter (Stream Interaction) */}
                        <motion.div
                            initial={{ opacity: 0, y: 25 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4 }}
                            className="flex flex-col items-center text-center group cursor-default"
                        >
                            <div className="relative w-48 h-48 mb-6 flex items-center justify-center">
                                <div className="absolute inset-0 rounded-full bg-[#38166d]/20 blur-xl group-hover:bg-[#4a2785]/40 transition-colors duration-500" />
                                <div className="absolute w-36 h-36 rounded-full border border-[#8fd8ff]/30 animate-pulse-ring-1" />
                                <div className="absolute w-36 h-36 rounded-full border border-[#b58aff]/30 animate-pulse-ring-2" />
                                <div className="absolute w-36 h-36 rounded-full border border-[#ffd23f]/25 animate-pulse-ring-3" />

                                <div className="absolute w-44 h-44 rounded-full border border-dashed border-[#8fd8ff]/30 animate-orbit">
                                    <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3.5 h-3.5 rounded-full bg-[#8fd8ff] shadow-[0_0_12px_#8fd8ff]" />
                                    <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-[#ffd23f] shadow-[0_0_10px_#ffd23f]" />
                                </div>

                                <div className="relative z-10 w-24 h-24 rounded-full bg-gradient-to-tr from-[#1b0d38] via-[#331960] to-[#4a2785] p-1 shadow-[0_0_30px_rgba(143,216,255,0.45)] group-hover:scale-110 transition-transform duration-400 border border-[#8fd8ff]/50 flex items-center justify-center">
                                    <div className="w-full h-full rounded-full bg-[#120925] flex items-center justify-center overflow-hidden">
                                        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#8fd8ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="filter drop-shadow-[0_0_8px_#8fd8ff]">
                                            <path d="M4.9 19.1C1 15.2 1 8.8 4.9 4.9" />
                                            <path d="M7.8 16.2c-2.3-2.3-2.3-6.1 0-8.5" />
                                            <circle cx="12" cy="12" r="2.5" fill="#ffd23f" stroke="#ffd23f" />
                                            <path d="M16.2 7.8c2.3 2.3 2.3 6.1 0 8.5" />
                                            <path d="M19.1 4.9C23 8.8 23 15.2 19.1 19.1" />
                                        </svg>
                                    </div>
                                </div>
                            </div>

                            <h3 className="headline-arcade text-2xl font-black mb-3 text-[#f4f1e8] tracking-wide">
                                Stream Interaction
                            </h3>

                            <p className="text-[#9f96c2] text-sm leading-relaxed max-w-xs">
                                Turn your live stream into an interactive universe. Viewers actively solve puzzles, trigger events, and join the action right from Twitch &amp; TikTok chat.
                            </p>
                        </motion.div>

                        {/* Waypoint 2: The Habitable Earthy World (Play Locally) */}
                        <motion.div
                            initial={{ opacity: 0, y: 25 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.15, duration: 0.4 }}
                            className="flex flex-col items-center text-center group cursor-default"
                        >
                            <div className="relative w-48 h-48 mb-6 flex items-center justify-center">
                                <div className="absolute inset-0 rounded-full bg-[#1e4a3b]/25 blur-xl group-hover:bg-[#28634e]/45 transition-colors duration-500" />

                                <div className="absolute w-48 h-16 rounded-full border-2 border-[#5fd68a]/45 rotate-[-24deg] animate-orbit">
                                    <div className="absolute -top-1.5 left-8 w-3.5 h-3.5 rounded-full bg-[#5fd68a] shadow-[0_0_14px_#5fd68a]" />
                                    <div className="absolute -bottom-1.5 right-8 w-3 h-3 rounded-full bg-[#8fd8ff] shadow-[0_0_12px_#8fd8ff]" />
                                </div>

                                <div className="relative z-10 w-24 h-24 rounded-full bg-gradient-to-br from-[#16436b] via-[#1d6b4f] to-[#0c243b] shadow-[0_0_32px_rgba(95,214,138,0.45)] group-hover:scale-110 transition-transform duration-400 border border-[#5fd68a]/60 flex items-center justify-center overflow-hidden">
                                    <svg width="96" height="96" viewBox="0 0 96 96" className="opacity-85">
                                        <path d="M22 38c5-7 14-5 16 0s5 12-2 14-16-2-14-14z" fill="#5fd68a" />
                                        <path d="M52 26c7-3 17 2 14 10s-10 12-14 7-5-12 0-17z" fill="#5fd68a" />
                                        <path d="M40 60c10-2 19 7 14 14s-17 5-19-2 0-10 5-12z" fill="#5fd68a" />
                                    </svg>
                                    <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-transparent via-white/10 to-white/40 pointer-events-none" />
                                </div>
                            </div>

                            <h3 className="headline-arcade text-2xl font-black mb-3 text-[#f4f1e8] tracking-wide">
                                Play Locally
                            </h3>

                            <p className="text-[#9f96c2] text-sm leading-relaxed max-w-xs">
                                Couch multiplayer grounded in real-world camaraderie. Bring friends and family together for chaotic party battles on one screen.
                            </p>
                        </motion.div>

                        {/* Waypoint 3: The Galactic Nebula Core (Community Driven) */}
                        <motion.div
                            initial={{ opacity: 0, y: 25 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3, duration: 0.4 }}
                            className="flex flex-col items-center text-center group cursor-default"
                        >
                            <div className="relative w-48 h-48 mb-6 flex items-center justify-center">
                                <div className="absolute inset-0 rounded-full bg-[#531f94]/25 blur-xl group-hover:bg-[#6824bd]/45 transition-colors duration-500" />

                                <div className="absolute w-44 h-44 rounded-full border-t-2 border-r-2 border-[#b58aff]/65 animate-orbit filter drop-shadow-[0_0_10px_#b58aff]" />
                                <div className="absolute w-36 h-36 rounded-full border-b-2 border-l-2 border-[#ffd23f]/55 animate-orbit-reverse filter drop-shadow-[0_0_10px_#ffd23f]" />

                                <div className="absolute w-28 h-28 rounded-full animate-orbit">
                                    <div className="absolute top-1 left-4 w-2.5 h-2.5 rounded-full bg-[#ffd23f] shadow-[0_0_10px_#ffd23f]" />
                                    <div className="absolute bottom-2 right-3 w-2.5 h-2.5 rounded-full bg-[#8fd8ff] shadow-[0_0_10px_#8fd8ff]" />
                                    <div className="absolute bottom-4 left-5 w-2 h-2 rounded-full bg-[#5fd68a] shadow-[0_0_8px_#5fd68a]" />
                                </div>

                                <div className="relative z-10 w-24 h-24 rounded-full bg-gradient-to-r from-[#ffd23f] via-[#b58aff] to-[#8fd8ff] p-[3px] shadow-[0_0_36px_rgba(255,210,63,0.55)] group-hover:scale-110 transition-transform duration-400 flex items-center justify-center">
                                    <div className="w-full h-full rounded-full bg-[#1b0d38] flex items-center justify-center border border-white/20">
                                        <div className="w-7 h-7 rounded-full bg-gradient-to-br from-white to-[#ffd23f] shadow-[0_0_18px_#ffffff] animate-pulse" />
                                    </div>
                                </div>
                            </div>

                            <h3 className="headline-arcade text-2xl font-black mb-3 text-[#f4f1e8] tracking-wide">
                                Community Driven
                            </h3>

                            <p className="text-[#9f96c2] text-sm leading-relaxed max-w-xs">
                                Shaped by real creators and feedback. Constant updates, community-submitted word packs, and new features driven directly by player requests.
                            </p>
                        </motion.div>
                    </div>
                </div>

                {/* Games Section */}
                <div id="games" className="w-full mb-28 scroll-mt-12">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-14"
                    >
                        <h2 className="headline-arcade text-4xl sm:text-5xl font-black text-[#f4f1e8]">
                            OUR GAMES
                        </h2>
                    </motion.div>

                    {/* FEATURED: RAISIN UNIVERSE */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="relative w-full mb-24 py-4"
                    >
                        {/* Ambient Cosmic Stage Glow */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl h-[600px] bg-gradient-to-r from-[#531f94]/25 via-[#38166d]/30 to-[#8fd8ff]/15 rounded-full blur-[130px] pointer-events-none" />

                        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-16 max-w-5xl mx-auto">
                            {/* BIG GAME ART (Clean, No Box, Native Portrait Format) */}
                            <div className="w-full sm:w-auto flex justify-center shrink-0 group perspective-1000">
                                <div className="relative">
                                    <div className="absolute -inset-4 bg-gradient-to-tr from-[#ffd23f]/25 via-[#b58aff]/35 to-[#8fd8ff]/25 rounded-[32px] blur-2xl opacity-60 group-hover:opacity-90 transition-opacity duration-500" />
                                    
                                    <img
                                        src="/raisin_universe.jpg"
                                        alt="Raisin Universe - Interstellar Board Game"
                                        className="relative z-10 w-full max-w-[340px] sm:max-w-[390px] md:max-w-[420px] rounded-2xl object-cover border-2 border-white/20 shadow-[0_24px_60px_rgba(0,0,0,0.9),0_0_40px_rgba(181,138,255,0.35)] transform group-hover:-translate-y-3 group-hover:scale-[1.02] transition-all duration-400 ease-out"
                                    />
                                </div>
                            </div>

                            {/* GAME DETAILS & CALL TO ACTION (Clean, Natural Copywriting) */}
                            <div className="flex-1 flex flex-col justify-center text-center lg:text-left max-w-xl">
                                <h3 className="headline-arcade text-4xl sm:text-5xl lg:text-6xl font-black text-[#f4f1e8] mb-3 tracking-tight">
                                    Raisin Universe
                                </h3>

                                <div className="text-base sm:text-lg font-bold text-[#8fd8ff] mb-6">
                                    Releasing November 30, 2026
                                </div>

                                <p className="text-base sm:text-lg text-[#f4f1e8]/90 font-medium leading-relaxed mb-8">
                                    An interstellar party board game adventure! Roll the cosmic dice, navigate perilous planetary paths, and journey across the galaxy together with your live stream and friends.
                                </p>

                                {/* Game Highlights */}
                                <ul className="space-y-3 mb-10 text-left text-sm sm:text-base text-[#f4f1e8] font-medium leading-relaxed">
                                    <li className="flex items-start gap-2.5">
                                        <span className="text-[#ffd23f] text-lg leading-none mt-1">•</span>
                                        <span>Cosmic Board Game Adventure — turn-based galactic paths, space hazards, item shop tiles, and dice chaos.</span>
                                    </li>
                                    <li className="flex items-start gap-2.5">
                                        <span className="text-[#8fd8ff] text-lg leading-none mt-1">•</span>
                                        <span>Twitch &amp; TikTok Chat Integration — live viewers vote on event cards, alter gravity, and sabotage competitors in chat.</span>
                                    </li>
                                    <li className="flex items-start gap-2.5">
                                        <span className="text-[#5fd68a] text-lg leading-none mt-1">•</span>
                                        <span>Multiplayer Party &amp; Co-op Fun — play with up to 8 friends locally or online with seamless cross-control support.</span>
                                    </li>
                                </ul>

                                <div className="flex justify-center lg:justify-start">
                                    <div className="btn-pressable btn-gold px-9 py-4 text-lg font-black tracking-wider uppercase select-none cursor-default inline-flex items-center">
                                        Coming Nov 30, 2026
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Secondary Games Header */}
                    <div className="text-center mb-10 pt-4">
                        <h3 className="headline-arcade text-2xl sm:text-3xl font-black text-[#f4f1e8]">
                            MORE GAMES FROM RAISIN RIOT
                        </h3>
                    </div>

                    {/* Secondary Games Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {/* Raisin Wordsearch */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="cosmic-panel overflow-hidden flex flex-col justify-between"
                        >
                            <div className="p-5 pb-0">
                                <div className="cosmic-well aspect-video w-full flex items-center justify-center p-4 overflow-hidden">
                                    <img
                                        src="/title.webp"
                                        alt="Raisin Wordsearch"
                                        className="w-full h-full object-contain filter drop-shadow-[0_8px_16px_rgba(0,0,0,0.6)] hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                            </div>

                            <div className="p-6 flex flex-col flex-1 justify-between">
                                <div>
                                    <h3 className="text-2xl font-black text-[#f4f1e8] mb-3">
                                        Raisin Wordsearch
                                    </h3>
                                    
                                    <p className="text-sm mb-5 text-[#9f96c2] leading-relaxed">
                                        The comprehensive word search experience! Featuring local play mode, Twitch &amp; TikTok integration, and themes to customize your game.
                                    </p>

                                    <ul className="mb-6 space-y-2 text-xs text-[#f4f1e8] font-medium">
                                        <li>• Twitch &amp; TikTok Chat Integration</li>
                                        <li>• Local Party Mode (Up to 8 players)</li>
                                        <li>• 200+ Built-in Word Categories</li>
                                    </ul>
                                </div>

                                <div>
                                    <a
                                        href="https://store.steampowered.com/app/4363140/Raisins_Wordsearch/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn-pressable btn-gold w-full px-6 py-3 text-sm font-black tracking-wider uppercase inline-flex items-center justify-center"
                                    >
                                        View on Steam
                                    </a>
                                </div>
                            </div>
                        </motion.div>

                        {/* Raisin Word-Connect */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="cosmic-panel overflow-hidden flex flex-col justify-between"
                        >
                            <div className="p-5 pb-0">
                                <div className="cosmic-well aspect-video w-full flex items-center justify-center p-4 overflow-hidden">
                                    <img
                                        src="/raisin_word_connect.png"
                                        alt="Raisin Word-Connect"
                                        className="w-full h-full object-contain filter drop-shadow-[0_8px_16px_rgba(0,0,0,0.6)] hover:scale-105 transition-transform duration-500 rounded-lg"
                                    />
                                </div>
                            </div>

                            <div className="p-6 flex flex-col flex-1 justify-between">
                                <div>
                                    <h3 className="text-2xl font-black text-[#f4f1e8] mb-3">
                                        Raisin Word-Connect
                                    </h3>

                                    <p className="text-sm mb-5 text-[#9f96c2] leading-relaxed">
                                        TikTok/Twitch interactive game where you find words and climb the leaderboard in a hex-like series of letters.
                                    </p>

                                    <ul className="mb-6 space-y-2 text-xs text-[#f4f1e8] font-medium">
                                        <li>• Twitch &amp; TikTok Chat Integration</li>
                                        <li>• Hex Grid Letter Mechanics</li>
                                        <li>• Climb the Leaderboards</li>
                                    </ul>
                                </div>

                                <div>
                                    <a
                                        href="https://store.steampowered.com/app/4452990/Raisin_WordConnect/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn-pressable btn-gold w-full px-6 py-3 text-sm font-black tracking-wider uppercase inline-flex items-center justify-center"
                                    >
                                        View on Steam
                                    </a>
                                </div>
                            </div>
                        </motion.div>

                        {/* Raisin Sudoku */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="cosmic-panel overflow-hidden flex flex-col justify-between"
                        >
                            <div className="p-5 pb-0">
                                <div className="cosmic-well aspect-video w-full flex items-center justify-center p-4 overflow-hidden">
                                    <img
                                        src="/raisin_sudoku.png"
                                        alt="Raisin Sudoku"
                                        className="w-full h-full object-contain filter drop-shadow-[0_8px_16px_rgba(0,0,0,0.6)] hover:scale-105 transition-transform duration-500 rounded-lg"
                                    />
                                </div>
                            </div>

                            <div className="p-6 flex flex-col flex-1 justify-between">
                                <div>
                                    <h3 className="text-2xl font-black text-[#f4f1e8] mb-3">
                                        Raisin Sudoku
                                    </h3>

                                    <p className="text-sm mb-5 text-[#9f96c2] leading-relaxed">
                                        TikTok/Twitch interactive sudoku where your chat helps solve the grid together and race the clock for the top spot on the leaderboard.
                                    </p>

                                    <ul className="mb-6 space-y-2 text-xs text-[#f4f1e8] font-medium">
                                        <li>• Twitch &amp; TikTok Chat Integration</li>
                                        <li>• Classic Sudoku Mechanics</li>
                                        <li>• Climb the Leaderboards</li>
                                    </ul>
                                </div>

                                <div>
                                    <a
                                        href="https://store.steampowered.com/app/5014910/Raisin_Sudoku/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn-pressable btn-gold w-full px-6 py-3 text-sm font-black tracking-wider uppercase inline-flex items-center justify-center"
                                    >
                                        View on Steam
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* Contact Section */}
                <div id="contact" className="w-full mb-24 scroll-mt-12">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-10"
                    >
                        <h2 className="headline-arcade text-4xl sm:text-5xl font-black text-[#f4f1e8]">
                            CONTACT US
                        </h2>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                        {/* Discord Card */}
                        <motion.a
                            href="https://discord.gg/P882rNrBKb"
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="cosmic-tile p-6 sm:p-7 flex items-center gap-5 group no-underline"
                        >
                            <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-[#5865F2]/25 border border-[#5865F2]/40 text-[#8fd8ff] font-black text-lg">
                                DC
                            </div>
                            <div className="flex-1">
                                <h3 className="text-xl font-black text-[#f4f1e8] group-hover:text-[#8fd8ff] transition-colors mb-1">
                                    Join our Discord
                                </h3>
                                <p className="text-[#9f96c2] text-sm">
                                    Chat with the community &amp; devs
                                </p>
                            </div>
                        </motion.a>

                        {/* TikTok Card */}
                        <motion.a
                            href="https://www.tiktok.com/@raisinriot"
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="cosmic-tile p-6 sm:p-7 flex items-center gap-5 group no-underline"
                        >
                            <img
                                src="/rasinriotpfp.png"
                                alt="Raisin Riot"
                                className="w-12 h-12 rounded-xl object-cover border border-[#28144c]"
                            />
                            <div className="flex-1">
                                <h3 className="text-xl font-black text-[#f4f1e8] group-hover:text-[#ffd23f] transition-colors mb-1">
                                    Follow on TikTok
                                </h3>
                                <p className="text-[#9f96c2] text-sm">
                                    @raisinriot
                                </p>
                            </div>
                        </motion.a>
                    </div>
                </div>

                {/* Press / Media Kit Section */}
                <div id="press" className="w-full max-w-3xl mb-24 text-center scroll-mt-12">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="cosmic-panel p-8 sm:p-10 border-dashed border border-[#4a2785]"
                    >
                        <h2 className="headline-arcade text-2xl sm:text-3xl font-black mb-3 text-[#f4f1e8]">
                            PRESS &amp; MEDIA KIT
                        </h2>

                        <p className="text-[#9f96c2] text-base mb-8 max-w-lg mx-auto">
                            Writing about Raisin Riot? Grab our official high-res assets here.
                        </p>

                        <div className="flex flex-wrap justify-center gap-4">
                            <a
                                href="/title.webp"
                                download="RaisinRiot-Logo.webp"
                                className="btn-pressable btn-indigo px-6 py-3 text-sm font-bold"
                            >
                                Logo (WebP)
                            </a>

                            <a
                                href="/rasinriotpfp.png"
                                download="RaisinRiot-Icon.png"
                                className="btn-pressable btn-indigo px-6 py-3 text-sm font-bold"
                            >
                                Icon (PNG)
                            </a>
                        </div>
                    </motion.div>
                </div>

                {/* Footer */}
                <footer className="w-full pt-8 border-t border-[#28144c] flex flex-col md:flex-row items-center justify-between gap-5">
                    <div className="flex items-center gap-3">
                        <img
                            src="/rasinriotpfp.png"
                            alt="Raisin Riot"
                            className="w-7 h-7 rounded-full border border-[#4a2785]"
                        />
                        <p className="text-[#9f96c2] text-sm">
                            © 2026 Raisin Riot. All rights reserved.
                        </p>
                    </div>

                    <div className="flex flex-wrap items-center justify-center gap-3">
                        <Link
                            to="/privacy"
                            onClick={() => window.scrollTo(0, 0)}
                            className="btn-pressable btn-indigo px-4 py-2 text-xs font-bold rounded-xl"
                        >
                            Privacy Policy
                        </Link>
                        <Link
                            to="/botterms"
                            onClick={() => window.scrollTo(0, 0)}
                            className="btn-pressable btn-indigo px-4 py-2 text-xs font-bold rounded-xl"
                        >
                            Bot Terms
                        </Link>
                        <Link
                            to="/botprivacy"
                            onClick={() => window.scrollTo(0, 0)}
                            className="btn-pressable btn-indigo px-4 py-2 text-xs font-bold rounded-xl"
                        >
                            Bot Privacy
                        </Link>
                    </div>
                </footer>
            </div>
        </motion.div>
    );
};

export default Home;
