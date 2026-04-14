"use client"

import { motion } from "framer-motion"
import { Database, Layers, PenTool, Zap, MessageSquare, Cpu, Globe } from "lucide-react"
import Image from "next/image"

const skills = [
    {
        category: "Creative Suite",
        items: [
            { name: "Polyboard", icon: Layers, desc: "Expert parametric furniture design for manufacturing." },
            { name: "CorelDRAW", icon: PenTool, desc: "Professional vector graphics and technical layout." },
            { name: "CNC Machining", icon: Cpu, desc: "Practical operation for design realization (Non-machinist)." },
        ]
    },
    {
        category: "Vibe Code",
        items: [
            { name: "Telegram & Discord Bots", icon: MessageSquare, desc: "Custom automated assistants and community managers." },
            { name: "Advanced Web Scraping", icon: Database, desc: "Extracting data from complex, dynamic websites." },
            { name: "AI-Augmented Dev", icon: Zap, desc: "Rapid prototyping and shipping with LLM-enhanced workflows." },
        ]
    },
    {
        category: "Languages",
        items: [
            { name: "Arabic", icon: Globe, desc: "Native proficiency." },
            { name: "English", icon: Globe, desc: "University-level proficiency." },
            { name: "French", icon: Globe, desc: "Working proficiency." },
        ]
    }
]

const storyParagraphs = [
    "Hey, I'm Mohammed Yassine — but everyone calls me Hami. My coding journey started in my early twenties, and honestly, it was messy at first. I bounced around between C, C++, C#, and even gave JavaScript a fair shot. Nothing really stuck. I'd start a tutorial, get halfway through, and feel like I was fighting the language more than learning it.",
    "Then one day, I stumbled into Python. And I don't know how to explain it other than — it just made sense. The syntax, the logic, the way you could go from idea to working code in the same afternoon. I didn't just learn Python. I fell in love with it. I'd stay up way too late building random stuff — little scripts to rename my files, calculators nobody asked for, a tool to organize my music library. Nothing impressive, but every small project taught me something new.",
    "After a while, I started pushing further. I picked up Flask, Django, tried my hand at web apps, even built a few desktop tools. I was just hungry to see what Python could really do. And then I discovered web scraping and automation — and that was the moment everything changed for me. The idea that I could write a script that goes out, collects data, processes it, and delivers it somewhere automatically? That blew my mind.",
    "When COVID hit and the world slowed down, I didn't. I went all in on bots and scraping. Telegram bots, Discord bots, data pipelines, scheduled automations — I built them obsessively. I learned how anti-bot systems work just so I could figure out how to get past them. I studied APIs, reverse-engineered websites, and got really comfortable living in the terminal.",
    "That focus hasn't changed. I'm not the developer who chases every new framework or trendy tool. I found my thing — automation, bots, and scraping — and I'm committed to being genuinely great at it. If it can be automated, I want to be the one who builds it.",
]

export function About() {
    return (
        <section id="about" className="container py-24 sm:py-32 space-y-20">
            {/* Story Section */}
            <div className="grid gap-12 lg:grid-cols-5 lg:gap-16 items-start">
                {/* Avatar — Left Column */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="lg:col-span-2 flex flex-col items-center lg:sticky lg:top-24"
                >
                    <div className="relative mb-6">
                        <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-emerald-500 via-cyan-500 to-blue-500 opacity-20 blur-lg" />
                        <div className="relative overflow-hidden rounded-2xl border-2 border-border/50 shadow-2xl">
                            <Image
                                src="/assets/avatar.png"
                                alt="Mohammed Yassine — Hami"
                                width={400}
                                height={400}
                                className="object-cover"
                                priority
                            />
                        </div>
                    </div>
                    <h3 className="text-2xl font-bold text-center">Mohammed Yassine</h3>
                    <p className="text-muted-foreground text-center mt-1">aka <span className="font-semibold text-foreground">Hami</span></p>
                    <div className="flex items-center gap-2 mt-3">
                        <span className="relative flex h-2 w-2">
                            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                        </span>
                        <span className="text-sm text-muted-foreground">Available for projects</span>
                    </div>
                </motion.div>

                {/* Story — Right Column */}
                <div className="lg:col-span-3 space-y-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                    >
                        <div className="inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-sm font-medium text-muted-foreground mb-4">
                            About Me
                        </div>
                        <h2 className="text-3xl font-bold leading-[1.1] sm:text-4xl md:text-5xl mb-6">
                            The Story Behind<br />
                            <span className="bg-gradient-to-r from-emerald-500 to-cyan-500 bg-clip-text text-transparent">the Code</span>
                        </h2>
                    </motion.div>

                    {storyParagraphs.map((paragraph, i) => (
                        <motion.p
                            key={i}
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: i * 0.08 }}
                            viewport={{ once: true }}
                            className="text-muted-foreground leading-relaxed text-[15px]"
                        >
                            {paragraph}
                        </motion.p>
                    ))}
                </div>
            </div>

            {/* Skills Grid */}
            <div>
                <div className="mx-auto max-w-[58rem] text-center mb-12">
                    <h2 className="text-3xl font-bold leading-[1.1] sm:text-3xl md:text-5xl">Multi-Disciplinary Expertise</h2>
                    <p className="mt-4 text-muted-foreground sm:text-lg">
                        Bridging the gap between aesthetic precision and functional automation.
                    </p>
                </div>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-12">
                    {skills.map((category, i) => (
                        <div key={i} className="space-y-6">
                            <h3 className="text-xl font-bold border-b pb-2">{category.category}</h3>
                            <div className="grid gap-4">
                                {category.items.map((skill, j) => (
                                    <motion.div
                                        key={j}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ delay: j * 0.1 }}
                                        viewport={{ once: true }}
                                        className="flex items-start gap-4 rounded-lg border p-4 hover:bg-muted/50 transition-colors"
                                    >
                                        <div className="mt-1 rounded-md bg-primary/10 p-2 text-primary">
                                            <skill.icon className="h-5 w-5" />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold">{skill.name}</h4>
                                            <p className="text-sm text-muted-foreground">{skill.desc}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
