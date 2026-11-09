import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { SearchX, ArrowLeft } from 'lucide-react';

const NotFound: React.FC = () => {
    return (
        <motion.div
            key="not-found"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="min-h-screen w-full flex items-center justify-center p-6 cosmic-canvas text-[#f4f1e8]"
        >
            <div className="cosmic-panel p-8 sm:p-14 max-w-xl w-full text-center">
                <div className="flex justify-center mb-6">
                    <div className="w-24 h-24 rounded-3xl flex items-center justify-center bg-[#120925] border-2 border-[#28144c] shadow-[inset_0_2px_6px_rgba(0,0,0,0.7)] text-[#ffd23f]">
                        <SearchX size={52} />
                    </div>
                </div>

                <h1 className="headline-arcade text-6xl sm:text-7xl font-black mb-3 tracking-tight text-[#f4f1e8]">
                    404
                </h1>

                <h2 className="text-2xl sm:text-3xl font-black mb-4 text-[#8fd8ff]">
                    Page Not Found
                </h2>

                <p className="text-base sm:text-lg mb-8 text-[#9f96c2] font-medium leading-relaxed">
                    Oops! Looks like your spaceship drifted off the cosmic grid. The coordinates you entered do not exist or have moved.
                </p>

                <div className="flex justify-center">
                    <Link
                        to="/"
                        onClick={() => window.scrollTo(0, 0)}
                        className="btn-pressable btn-gold px-8 py-3.5 text-base font-black tracking-wider uppercase inline-flex items-center gap-3"
                    >
                        <ArrowLeft size={20} />
                        Return to Arcade
                    </Link>
                </div>
            </div>
        </motion.div>
    );
};

export default NotFound;
