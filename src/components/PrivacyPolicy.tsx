import React from 'react';
import { Shield, ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const PrivacyPolicy: React.FC = () => {
    return (
        <motion.div
            key="privacy-policy"
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
                        <div className="w-16 h-16 rounded-2xl flex items-center justify-center bg-[#120925] border-2 border-[#28144c] text-[#8fd8ff] shadow-[inset_0_2px_4px_rgba(0,0,0,0.6)]">
                            <Shield size={36} />
                        </div>
                        <div>
                            <h1 className="headline-arcade text-3xl sm:text-4xl md:text-5xl font-black text-[#f4f1e8]">
                                Privacy Policy
                            </h1>
                        </div>
                    </div>

                    <div className="space-y-8 text-base sm:text-lg text-[#9f96c2] font-medium leading-relaxed">
                        <div className="inline-block px-3 py-1 rounded-full text-xs font-black uppercase bg-[#120925] border border-[#331960] text-[#ffd23f]">
                            Last Updated: November 2026
                        </div>

                        <section className="space-y-3">
                            <h2 className="text-xl sm:text-2xl font-black text-[#f4f1e8]">1. Introduction</h2>
                            <p>
                                Welcome to Raisin Riot. This Privacy Policy is designed to help you understand how Raisin Universe (and other Raisin Riot interactive games) (the "Application") handles data when you play it and share it with your audience on platforms like Twitch and TikTok.
                            </p>
                        </section>

                        <section className="space-y-3">
                            <h2 className="text-xl sm:text-2xl font-black text-[#f4f1e8]">2. What Data We Collect & Why</h2>
                            <p>
                                The Application connects directly to your live stream to power interactive gameplay. During a session, the Application temporarily processes viewer interactions (e.g., chat messages, likes, gifts, follows) to display them in-game.
                            </p>
                            <p className="font-bold text-[#f4f1e8]">Specifically for Debugging and Technical Support:</p>
                            <p>
                                To help us fix bugs and improve the game experience, the Application may collect short-term diagnostic logs ("Session Logs"). As of March 2026, we have implemented a <strong className="text-[#ffd23f]">Privacy-First Logging System</strong>:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 text-[#8a92b8]">
                                <li><strong className="text-[#f4f1e8]">Viewer Usernames:</strong> Are cryptographically scrambled/anonymized before being written to diagnostic logs. We do not store the actual usernames of your viewers.</li>
                                <li><strong className="text-[#f4f1e8]">Viewer Chat Messages:</strong> The content of viewer chat messages is completely stripped out and replaced with a placeholder (e.g., <code className="bg-[#121628] px-1.5 py-0.5 rounded text-[#ffd23f] border border-[#2b3566]">&lt;message obscured&gt;</code>) before logging. We do not store what your viewers type.</li>
                                <li><strong className="text-[#f4f1e8]">Broadcaster Username:</strong> As the host who accepted the End User License Agreement (EULA), your connecting username is preserved in diagnostic logs to identify the session.</li>
                                <li><strong className="text-[#f4f1e8]">Event Data:</strong> We log that structural events happened (e.g., "A viewer sent a gift", "A viewer joined") to understand the flow of the game when crashes occur, without attaching PII to those events.</li>
                            </ul>
                        </section>

                        <section className="space-y-3">
                            <h2 className="text-xl sm:text-2xl font-black text-[#f4f1e8]">3. Where Data is Sent & Stored</h2>
                            <p>
                                Diagnostic session logs (which contain no viewer PII as described above) may be transmitted to a secure, private developer channel for troubleshooting (e.g., a private developer Discord webhook) upon application closure.
                            </p>
                            <p>
                                These files are used strictly for technical triage and are routinely deleted once the associated issue has been resolved.
                            </p>
                        </section>

                        <section className="space-y-3">
                            <h2 className="text-xl sm:text-2xl font-black text-[#f4f1e8]">4. Streamer Responsibilities</h2>
                            <p>
                                As a Broadcaster/Streamer utilizing this Application, you remain responsible for ensuring your live stream and your use of this interactive tool complies with the Terms of Service of Twitch, TikTok, or any other connected platform, as well as the local privacy laws applicable to you and your audience.
                            </p>
                        </section>

                        <section className="space-y-3">
                            <h2 className="text-xl sm:text-2xl font-black text-[#f4f1e8]">5. Contact Us</h2>
                            <p>
                                If you have any questions or concerns about this Privacy Policy or our data practices, please reach out to us via email at{' '}
                                <a
                                    href="mailto:privacy@raisinriot.com"
                                    className="font-black text-[#ffd23f] hover:underline"
                                >
                                    privacy@raisinriot.com
                                </a>{' '}
                                or through our official{' '}
                                <a
                                    href="https://discord.gg/P882rNrBKb"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="font-black text-[#8fd8ff] hover:underline"
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

export default PrivacyPolicy;
