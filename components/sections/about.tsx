"use client"

import { motion } from "framer-motion"
import { Database, Layers, PenTool, Zap, MessageSquare, Cpu, Globe, ArrowDown } from "lucide-react"
import { useState, useEffect } from "react"
import Image from "next/image"

const skills = [
    {
        category: "Creative Suite",
        gradient: "from-indigo-500 to-purple-600",
        accentBg: "bg-indigo-500/10",
        accentText: "text-indigo-500",
        accentBorder: "border-indigo-500/20",
        items: [
            { name: "Polyboard", icon: Layers, desc: "Expert parametric furniture design for manufacturing." },
            { name: "CorelDRAW", icon: PenTool, desc: "Professional vector graphics and technical layout." },
            { name: "CNC Machining", icon: Cpu, desc: "Practical operation for design realization (Non-machinist)." },
        ]
    },
    {
        category: "Vibe Code",
        gradient: "from-emerald-500 to-cyan-600",
        accentBg: "bg-emerald-500/10",
        accentText: "text-emerald-500",
        accentBorder: "border-emerald-500/20",
        items: [
            { name: "Telegram & Discord Bots", icon: MessageSquare, desc: "Custom automated assistants and community managers." },
            { name: "Advanced Web Scraping", icon: Database, desc: "Extracting data from complex, dynamic websites." },
            { name: "AI-Augmented Dev", icon: Zap, desc: "Rapid prototyping and shipping with LLM-enhanced workflows." },
        ]
    },
    {
        category: "Languages",
        gradient: "from-amber-500 to-orange-600",
        accentBg: "bg-amber-500/10",
        accentText: "text-amber-500",
        accentBorder: "border-amber-500/20",
        items: [
            { name: "Arabic", icon: Globe, desc: "Native proficiency." },
            { name: "English", icon: Globe, desc: "University-level proficiency." },
            { name: "French", icon: Globe, desc: "Working proficiency." },
        ]
    }
]

/* ── Timeline entries: Design story first, then Code story ── */
const timelineEntries = [
    {
        era: "design",
        label: "The Design Origin",
        gradient: "from-indigo-500 to-purple-600",
        dotColor: "bg-indigo-500",
        ringColor: "ring-indigo-500/30",
        paragraphs: [
            "Hey, I'm Mohammed Yassine — but everyone calls me Hami. When COVID hit, the world didn't just slow down for my dev career. It hit everything. I found myself without work, no clear direction, just a lot of free time and a need to figure things out. That's when a close friend of mine — who was already working at a woodworking company — reached out and asked if I wanted to join him.",
            "It was a small, specialized company focused on 'Sur Mesure' — fully custom-made furniture and interiors. Walk-in closets, kitchens, pharmacy fittings, retail displays, reception desks — everything built from scratch, tailored to the exact millimeter for each client. I had zero experience in the field, but I said yes. And honestly? It was one of the best decisions I've ever made.",
            "I started from nothing. I didn't know what a cut list was, didn't understand material thickness, had never heard of Polyboard. But I threw myself into it the same way I threw myself into Python — with obsessive curiosity. I learned Polyboard inside and out — parametric furniture design, automatic hardware placement, material cost reports, 3D rendering. It became second nature.",
            "Then came CorelDRAW, ArtCAM, Aspire for CNC carving, and the machines themselves. I don't just make things that look good in 3D — I make things that can actually be built, assembled, and installed without headaches. Every design I deliver comes with clean cut lists, hardware specs, and files ready for production.",
        ],
    },
    {
        era: "code",
        label: "The Code Journey",
        gradient: "from-emerald-500 to-cyan-600",
        dotColor: "bg-emerald-500",
        ringColor: "ring-emerald-500/30",
        paragraphs: [
            "My coding journey started in my early twenties, and honestly, it was messy at first. I bounced around between C, C++, C#, and even gave JavaScript a fair shot. Nothing really stuck. Then one day, I stumbled into Python. And I don't know how to explain it other than — it just made sense. The syntax, the logic, the way you could go from idea to working code in the same afternoon.",
            "After a while, I started pushing further. Flask, Django, web apps, desktop tools. And then I discovered web scraping and automation — and that was the moment everything changed for me. The idea that I could write a script that goes out, collects data, processes it, and delivers it somewhere automatically? That blew my mind.",
            "When COVID hit, I went all in on bots and scraping. Telegram bots, Discord bots, data pipelines, scheduled automations — I built them obsessively. I learned how anti-bot systems work just so I could figure out how to get past them.",
            "And then AI came into the picture — and it was like strapping a rocket to everything I'd already built. What used to take me days now takes hours. What used to take hours now takes minutes. It's not about replacing the thinking — it's about amplifying it. AI didn't change what I do. It just made me dangerously fast at doing it.",
        ],
    },
]

export function About() {
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) return null

    return (
        <section id="about" className="container py-24 sm:py-32 space-y-24">
            {/* ── Top: Avatar + Intro ── */}
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
                        <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-indigo-500 via-emerald-500 to-cyan-500 opacity-20 blur-lg transition-all duration-700" />
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
                    {/* Tagline */}
                    <p className="mt-6 text-center text-sm text-muted-foreground max-w-[280px] leading-relaxed">
                        The designer who codes. Bridging aesthetic precision with functional automation.
                    </p>
                </motion.div>

                {/* Story — Right Column: Timeline */}
                <div className="lg:col-span-3 space-y-2">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4 }}
                        viewport={{ once: true }}
                    >
                        <div className="inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-sm font-medium text-muted-foreground mb-4">
                            About Me
                        </div>
                        <h2 className="text-3xl font-bold leading-[1.1] sm:text-4xl md:text-5xl mb-2">
                            The Story Behind<br />
                            <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-emerald-500 bg-clip-text text-transparent">
                                the Craft & the Code
                            </span>
                        </h2>
                    </motion.div>

                    {/* ── Vertical Timeline ── */}
                    <div className="relative mt-10">
                        {/* Timeline Line */}
                        <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-indigo-500/40 via-border to-emerald-500/40" />

                        {timelineEntries.map((entry, entryIdx) => (
                            <div key={entry.era} className="relative mb-12 last:mb-0">
                                {/* Era Label */}
                                <motion.div
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.4 }}
                                    viewport={{ once: true }}
                                    className="flex items-center gap-3 mb-6"
                                >
                                    {/* Dot */}
                                    <div className={`relative z-10 flex h-8 w-8 items-center justify-center rounded-full ${entry.dotColor} ring-4 ${entry.ringColor} ring-offset-2 ring-offset-background shadow-lg`}>
                                        <div className="h-2.5 w-2.5 rounded-full bg-white" />
                                    </div>
                                    <h3 className={`text-xl font-bold bg-gradient-to-r ${entry.gradient} bg-clip-text text-transparent`}>
                                        {entry.label}
                                    </h3>
                                </motion.div>

                                {/* Paragraphs */}
                                <div className="pl-[2.75rem] space-y-4">
                                    {entry.paragraphs.map((paragraph, i) => (
                                        <motion.p
                                            key={i}
                                            initial={{ opacity: 0, y: 15 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.4, delay: i * 0.05 }}
                                            viewport={{ once: true }}
                                            className="text-muted-foreground leading-relaxed text-[15px]"
                                        >
                                            {paragraph}
                                        </motion.p>
                                    ))}
                                </div>

                                {/* Bridge between stories */}
                                {entryIdx === 0 && (
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        whileInView={{ opacity: 1 }}
                                        transition={{ duration: 0.6 }}
                                        viewport={{ once: true }}
                                        className="flex items-center gap-3 pl-[2.75rem] mt-8 mb-2"
                                    >
                                        <div className="h-px flex-1 bg-gradient-to-r from-indigo-500/30 to-emerald-500/30" />
                                        <span className="text-xs font-semibold text-muted-foreground/60 uppercase tracking-widest flex items-center gap-1.5">
                                            But that&apos;s only half the story
                                            <ArrowDown className="h-3 w-3 animate-bounce" />
                                        </span>
                                        <div className="h-px flex-1 bg-gradient-to-r from-emerald-500/30 to-indigo-500/30" />
                                    </motion.div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* ── Skills Grid ── */}
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
                            <h3 className="text-xl font-bold border-b pb-2 flex items-center gap-2">
                                <span className={`inline-block h-2.5 w-2.5 rounded-full bg-gradient-to-r ${category.gradient}`} />
                                {category.category}
                            </h3>
                            <div className="grid gap-4">
                                {category.items.map((skill, j) => (
                                    <motion.div
                                        key={j}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ delay: j * 0.1 }}
                                        viewport={{ once: true }}
                                        className={`flex items-start gap-4 rounded-lg border ${category.accentBorder} p-4 hover:bg-muted/50 transition-colors`}
                                    >
                                        <div className={`mt-1 rounded-md ${category.accentBg} p-2 ${category.accentText}`}>
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
