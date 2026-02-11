"use client"

import { motion } from "framer-motion"
import { Database, Layers, PenTool, Zap, MessageSquare, Cpu, Globe } from "lucide-react"

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

export function About() {
    return (
        <section id="about" className="container py-24 sm:py-32 space-y-12">
            <div className="mx-auto max-w-[58rem] text-center">
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
        </section>
    )
}
