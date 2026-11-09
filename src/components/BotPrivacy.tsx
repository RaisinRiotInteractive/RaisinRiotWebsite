import React from 'react';
import { Shield, ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const BotPrivacy: React.FC = () => {
    return (
        <motion.div
            key="bot-privacy"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="min-h-screen w-full p-4 sm:p-8 cosmic-canvas text-[#f4f1e8] flex justify-center"
        >
            <div className="max-w-4xl w-full py-8">
                <Link
                    to="/"
                    onClick={() => window.scrollTo(0, 0)}
                    className="mb-8 btn-pressable btn-indigo px-5 py-2.5 text-sm font-black uppercase inline-flex items-center gap-2"
                >
                    <ArrowLeft size={18} />
                    Back to Home
                </Link>

                <div className="cosmic-panel p-6 sm:p-12">
                    <div className="flex items-center gap-5 mb-8">
                        <div className="w-16 h-16 rounded-2xl flex items-center justify-center bg-[#120925] border-2 border-[#28144c] text-[#5fd68a] shadow-[inset_0_2px_4px_rgba(0,0,0,0.6)]">
                            <Shield size={36} />
                        </div>
                        <div>
                            <h1 className="headline-arcade text-3xl sm:text-4xl md:text-5xl font-black text-[#f4f1e8]">
                                RaisinConnect Privacy
                            </h1>
                        </div>
                    </div>

                    <div className="space-y-8 text-base sm:text-lg text-[#9f96c2] font-medium leading-relaxed">
                        <div className="inline-block px-3 py-1 rounded-full text-xs font-black uppercase bg-[#120925] border border-[#331960] text-[#ffd23f]">
                            Last Updated: August 14, 2026
                        </div>

                        <section className="space-y-3">
                            <h2 className="text-xl sm:text-2xl font-black text-[#f4f1e8]">1. Introduction</h2>
                            <p>
                                This Privacy Policy explains how RaisinConnect (the "Bot") handles data when it is active on a streamer's Joystick.tv channel. RaisinConnect reads chat messages and tip/gift events during a live session so the Raisin Interactive Games (such as RaisinWord Connect) can score viewers who type valid words in chat.
                            </p>
                        </section>

                        <section className="space-y-3">
                            <h2 className="text-xl sm:text-2xl font-black text-[#f4f1e8]">2. Data We Collect</h2>
                            <p className="font-bold text-[#f4f1e8]">From Streamers:</p>
                            <ul className="list-disc pl-6 space-y-2 text-[#8a92b8]">
                                <li><strong className="text-[#f4f1e8]">OAuth Client Data:</strong> When a streamer authorizes RaisinConnect via Joystick.tv, we receive OAuth tokens and account identifiers needed to connect the Bot to their channel.</li>
                                <li><strong className="text-[#f4f1e8]">Bot Configuration:</strong> Settings the streamer chooses for how the Bot and Games run on their channel.</li>
                            </ul>
                            <p className="font-bold text-[#f4f1e8]">From Viewers:</p>
                            <ul className="list-disc pl-6 space-y-2 text-[#8a92b8]">
                                <li><strong className="text-[#f4f1e8]">Chat Messages:</strong> The text of chat messages sent in a channel while the Bot is active, read in order to detect valid words for gameplay scoring.</li>
                                <li><strong className="text-[#f4f1e8]">Usernames:</strong> The Joystick.tv username associated with a chat message or tip/gift event, so points can be attributed to the correct viewer.</li>
                                <li><strong className="text-[#f4f1e8]">Tip/Gift Event Data:</strong> That a tip or gift occurred and its relevant details, used for in-game scoring and bonus logic.</li>
                            </ul>
                        </section>

                        <section className="space-y-3">
                            <h2 className="text-xl sm:text-2xl font-black text-[#f4f1e8]">3. Why We Collect It</h2>
                            <p>
                                This data is used solely to power live gameplay: detecting valid words typed in chat, scoring viewers in real time, and applying tip/gift-based bonus logic within the Games. We do not use chat or viewer data for advertising, profiling, or any purpose unrelated to running the Games.
                            </p>
                        </section>

                        <section className="space-y-3">
                            <h2 className="text-xl sm:text-2xl font-black text-[#f4f1e8]">4. Data Retention</h2>
                            <p>
                                Chat messages, per-message viewer data, and tip/gift events are processed in memory during a live session to power gameplay and are not stored persistently. This data is discarded once the session ends. OAuth tokens and bot configuration for a streamer's channel are retained only for as long as needed to keep the Bot connected to that channel, and are removed if the streamer disconnects or revokes access.
                            </p>
                        </section>

                        <section className="space-y-3">
                            <h2 className="text-xl sm:text-2xl font-black text-[#f4f1e8]">5. Sharing</h2>
                            <p>
                                We do not sell viewer or streamer data, and we do not share it with third parties. Data collected by RaisinConnect is used only within Raisin Interactive Games to power gameplay.
                            </p>
                        </section>

                        <section className="space-y-3">
                            <h2 className="text-xl sm:text-2xl font-black text-[#f4f1e8]">6. Third-Party Services</h2>
                            <p>
                                RaisinConnect connects to Joystick.tv through its OAuth authorization and API to read chat and tip/gift events and to identify the streamer's channel. Joystick.tv's own handling of your data is governed by their{' '}
                                <a
                                    href="https://joystick.tv/privacy"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="font-black text-[#8fd8ff] hover:underline"
                                >
                                    Privacy &amp; Cookie Policy
                                </a>.
                            </p>
                        </section>

                        <section className="space-y-3">
                            <h2 className="text-xl sm:text-2xl font-black text-[#f4f1e8]">7. Age Restriction</h2>
                            <p>
                                Joystick.tv requires all users to be at least 18 years old, and RaisinConnect operates only within Joystick.tv channels. We do not knowingly collect data from minors.
                            </p>
                        </section>

                        <section className="space-y-3">
                            <h2 className="text-xl sm:text-2xl font-black text-[#f4f1e8]">8. Contact &amp; Data Deletion Requests</h2>
                            <p>
                                Questions about this Privacy Policy, or requests regarding your data, can be directed to us via our{' '}
                                <a
                                    href="https://discord.gg/P882rNrBKb"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="font-black text-[#ffd23f] hover:underline"
                                >
                                    Discord community
                                </a>.
                            </p>
                        </section>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default BotPrivacy;
