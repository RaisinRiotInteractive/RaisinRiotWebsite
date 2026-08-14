import React from 'react';
import { Scale, ArrowLeft } from 'lucide-react';
import { THEMES } from '../themes';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const BotTerms: React.FC = () => {
    const currentTheme = THEMES.classic;

    return (
        <motion.div
            key="bot-terms"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className={`min-h-screen w-full p-6 ${currentTheme.background} ${currentTheme.textPrimary} flex justify-center`}
        >
            <div className="max-w-4xl w-full">
                <Link
                    to="/"
                    onClick={() => window.scrollTo(0, 0)}
                    className={`mb-8 inline-flex items-center gap-2 px-4 py-2 rounded-lg font-bold ${currentTheme.buttonSecondary} hover:opacity-80 transition-opacity`}
                >
                    <ArrowLeft size={20} />
                    Back to Home
                </Link>

                <div className={`p-8 md:p-12 rounded-3xl border-2 ${currentTheme.cardBackground} ${currentTheme.cardBorder} ${currentTheme.cardShadow}`}>
                    <div className="flex items-center gap-4 mb-8">
                        <div className={`p-4 rounded-full ${currentTheme.gridHeaderBackground} ${currentTheme.gridHeaderText}`}>
                            <Scale size={40} />
                        </div>
                        <h1 className="text-4xl md:text-5xl font-black">RaisinConnect Terms of Service</h1>
                    </div>

                    <div className={`space-y-6 text-lg ${currentTheme.textSecondary}`}>
                        <p className="font-bold text-xl">Last Updated: August 14, 2026</p>

                        <section className="space-y-3">
                            <h2 className={`text-2xl font-bold ${currentTheme.textPrimary}`}>1. Scope</h2>
                            <p>
                                These Terms of Service ("Terms") govern your use of RaisinConnect (the "Bot"), a chat bot that connects to a streamer's Joystick.tv channel to power the Raisin Interactive Games (including RaisinWord Connect and other word-game products, collectively the "Games"). By installing the Bot on your channel, or by interacting with it as a viewer in a channel's chat, you agree to these Terms.
                            </p>
                        </section>

                        <section className="space-y-3">
                            <h2 className={`text-2xl font-bold ${currentTheme.textPrimary}`}>2. Who Can Use RaisinConnect</h2>
                            <p>
                                <strong>Streamers</strong> may install and authorize the Bot on their own Joystick.tv channel via Joystick.tv's OAuth authorization flow. <strong>Viewers</strong> interact with the Bot indirectly by typing in a streamer's chat or sending tips/gifts while the Bot is active; viewers do not need to install anything.
                            </p>
                            <p>
                                Joystick.tv requires all users to be at least 18 years old. By using RaisinConnect, whether as a streamer or a viewer, you confirm that you meet Joystick.tv's eligibility requirements.
                            </p>
                        </section>

                        <section className="space-y-3">
                            <h2 className={`text-2xl font-bold ${currentTheme.textPrimary}`}>3. Acceptable Use</h2>
                            <p>You agree not to:</p>
                            <ul className="list-disc pl-8 space-y-2">
                                <li>Interfere with, disrupt, or attempt to circumvent the normal operation of the Bot or the Games.</li>
                                <li>Attempt to abuse, exploit, reverse-engineer, or probe the Bot's scoring logic, API, or authentication flow beyond normal gameplay.</li>
                                <li>Use the Bot to spam, flood, or otherwise abuse a channel's chat.</li>
                                <li>Use the Bot for any purpose that violates Joystick.tv's own Terms of Service or applicable law.</li>
                            </ul>
                        </section>

                        <section className="space-y-3">
                            <h2 className={`text-2xl font-bold ${currentTheme.textPrimary}`}>4. Disclaimer of Warranty</h2>
                            <p>
                                The Bot and the Games are provided "as is" and "as available," without warranties of any kind, express or implied, including but not limited to warranties of merchantability, fitness for a particular purpose, or non-infringement. We do not guarantee that the Bot will be uninterrupted, error-free, or available at all times.
                            </p>
                        </section>

                        <section className="space-y-3">
                            <h2 className={`text-2xl font-bold ${currentTheme.textPrimary}`}>5. Limitation of Liability</h2>
                            <p>
                                To the fullest extent permitted by law, Raisin Riot shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of data, revenue, or goodwill, arising out of or related to your use of, or inability to use, the Bot or the Games.
                            </p>
                        </section>

                        <section className="space-y-3">
                            <h2 className={`text-2xl font-bold ${currentTheme.textPrimary}`}>6. Termination</h2>
                            <p>
                                We may suspend or revoke a streamer's access to the Bot, or block a viewer's interactions with it, at any time and without notice if we believe these Terms have been violated or if continued access poses a risk to the Bot, the Games, or their users.
                            </p>
                        </section>

                        <section className="space-y-3">
                            <h2 className={`text-2xl font-bold ${currentTheme.textPrimary}`}>7. Changes to These Terms</h2>
                            <p>
                                We may update these Terms from time to time. Continued use of the Bot after changes are posted constitutes acceptance of the revised Terms. We encourage streamers and viewers to check this page periodically.
                            </p>
                        </section>

                        <section className="space-y-3">
                            <h2 className={`text-2xl font-bold ${currentTheme.textPrimary}`}>8. Governing Law</h2>
                            <p>
                                These Terms are governed by general principles of applicable law, without regard to conflict-of-law rules. If any provision of these Terms is found unenforceable, the remaining provisions will remain in full effect.
                            </p>
                        </section>

                        <section className="space-y-3">
                            <h2 className={`text-2xl font-bold ${currentTheme.textPrimary}`}>9. Contact</h2>
                            <p>
                                Questions about these Terms can be directed to us via our{' '}
                                <a
                                    href="https://discord.gg/P882rNrBKb"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`font-bold underline ${currentTheme.textAccent}`}
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

export default BotTerms;
