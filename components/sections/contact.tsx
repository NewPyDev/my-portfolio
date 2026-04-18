"use client"

import { Mail, MessageSquare, Github, ArrowRight } from "lucide-react"
import { motion } from "framer-motion"

export function Contact() {
    return (
        <section id="contact" className="container py-24 sm:py-32">
            <div className="mx-auto max-w-[58rem] text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    <div className="inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-sm font-medium text-muted-foreground mb-6">
                        <span className="relative flex h-2 w-2">
                            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-rose-400 opacity-75" />
                            <span className="relative inline-flex h-2 w-2 rounded-full bg-rose-500" />
                        </span>
                        Contact
                    </div>
                    <h2 className="text-3xl font-bold leading-[1.1] sm:text-4xl md:text-5xl">
                        Let&apos;s Build Something{" "}
                        <span className="bg-gradient-to-r from-emerald-500 to-cyan-500 bg-clip-text text-transparent">Together</span>
                    </h2>
                    <p className="mt-4 text-muted-foreground sm:text-lg">
                        Ready to automate your workflow, build a custom bot, or design your next interior project?
                        <br />
                        <span className="text-foreground font-medium">I typically respond within 24 hours.</span>
                    </p>
                </motion.div>
            </div>

            <div className="mx-auto mt-12 grid max-w-lg gap-4">
                <motion.a
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3 }}
                    viewport={{ once: true }}
                    href="mailto:n0nyf0xy@duck.com"
                    className="group flex items-center justify-between rounded-xl border bg-card p-5 transition-all duration-300 hover:border-border hover:shadow-lg hover:-translate-y-0.5"
                >
                    <div className="flex items-center gap-4">
                        <div className="rounded-lg bg-gradient-to-br from-rose-500 to-pink-600 p-2.5 text-white shadow-lg">
                            <Mail className="h-5 w-5" />
                        </div>
                        <div className="text-left">
                            <h3 className="font-semibold">Email</h3>
                            <p className="text-sm text-muted-foreground">n0nyf0xy@duck.com</p>
                        </div>
                    </div>
                    <ArrowRight className="h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                </motion.a>

                <motion.a
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                    viewport={{ once: true }}
                    href="https://t.me/Yassine_nagat0"
                    target="_blank"
                    rel="noreferrer"
                    className="group flex items-center justify-between rounded-xl border bg-card p-5 transition-all duration-300 hover:border-border hover:shadow-lg hover:-translate-y-0.5"
                >
                    <div className="flex items-center gap-4">
                        <div className="rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 p-2.5 text-white shadow-lg">
                            <MessageSquare className="h-5 w-5" />
                        </div>
                        <div className="text-left">
                            <h3 className="font-semibold">Telegram</h3>
                            <p className="text-sm text-muted-foreground">@Yassine_nagat0 — fastest response</p>
                        </div>
                    </div>
                    <ArrowRight className="h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                </motion.a>

                <motion.a
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.2 }}
                    viewport={{ once: true }}
                    href="https://github.com/NewPyDev"
                    target="_blank"
                    rel="noreferrer"
                    className="group flex items-center justify-between rounded-xl border bg-card p-5 transition-all duration-300 hover:border-border hover:shadow-lg hover:-translate-y-0.5"
                >
                    <div className="flex items-center gap-4">
                        <div className="rounded-lg bg-gradient-to-br from-gray-700 to-gray-900 p-2.5 text-white shadow-lg">
                            <Github className="h-5 w-5" />
                        </div>
                        <div className="text-left">
                            <h3 className="font-semibold">GitHub</h3>
                            <p className="text-sm text-muted-foreground">github.com/NewPyDev</p>
                        </div>
                    </div>
                    <ArrowRight className="h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                </motion.a>
            </div>
        </section>
    )
}
