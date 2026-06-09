"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import Link from "next/link"
import { Terminal, Palette } from "lucide-react"
import { MatrixRainBackground, BlueprintBackground } from "@/components/sections/hero-backgrounds"

export function Hero() {
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setTimeout(() => setMounted(true), 0)
    }, [])

    if (!mounted) return <div className="h-[calc(100vh-3.5rem)]" /> // Prevent layout shift

    return (
        <section className="relative flex h-[calc(100vh-3.5rem)] w-full flex-col items-center justify-center overflow-hidden border-b bg-background transition-colors duration-500">
            {/* ── Split-Screen Background ── */}
            {/* Left Half: Code / Matrix Rain (dark) */}
            <div
                className="absolute inset-0 z-0"
                style={{ clipPath: "polygon(0 0, 58% 0, 42% 100%, 0 100%)" }}
            >
                <div className="absolute inset-0 bg-[rgb(10,10,20)]">
                    <MatrixRainBackground />
                </div>
                {/* Vignette overlay */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_30%_50%,transparent_20%,rgba(10,10,20,0.7)_100%)]" />
            </div>

            {/* Right Half: Design / Blueprint (deep navy — like a real blueprint) */}
            <div
                className="absolute inset-0 z-0"
                style={{ clipPath: "polygon(58% 0, 100% 0, 100% 100%, 42% 100%)" }}
            >
                <div className="absolute inset-0 bg-[rgb(12,16,36)]">
                    <BlueprintBackground />
                </div>
                {/* Soft overlay */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_70%_50%,transparent_20%,rgba(12,16,36,0.7)_100%)]" />
            </div>

            {/* ── Animated Diagonal Divider ── */}
            <div
                className="absolute inset-0 z-[1] pointer-events-none"
                style={{ clipPath: "polygon(56% 0, 60% 0, 44% 100%, 40% 100%)" }}
            >
                <motion.div
                    className="absolute inset-0"
                    animate={{
                        background: [
                            "linear-gradient(180deg, rgba(16,185,129,0.6) 0%, rgba(99,102,241,0.6) 100%)",
                            "linear-gradient(180deg, rgba(99,102,241,0.6) 0%, rgba(16,185,129,0.6) 100%)",
                            "linear-gradient(180deg, rgba(16,185,129,0.6) 0%, rgba(99,102,241,0.6) 100%)",
                        ]
                    }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                />
                {/* Glow line */}
                <div className="absolute inset-0 backdrop-blur-[2px]" />
            </div>

            {/* ── Content Overlay ── */}
            <div className="container relative z-10 flex flex-col items-center gap-6 text-center px-4">
                {/* Badge */}
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="flex items-center gap-3 rounded-full border border-white/20 bg-black/30 px-5 py-2 text-sm font-medium text-white backdrop-blur-md shadow-lg"
                >
                    <Palette className="h-4 w-4 text-indigo-300" />
                    <span className="h-3 w-px bg-white/30" />
                    <Terminal className="h-4 w-4 text-emerald-300" />
                    <span>Two Crafts. One Creator.</span>
                </motion.div>

                {/* Main Heading — Stacked with both identities */}
                <motion.h1
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
                >
                    <span className="block bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent drop-shadow-sm">
                        I Design With Precision
                    </span>
                    <span className="block mt-1 bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent drop-shadow-sm">
                        I Build With Code
                    </span>
                </motion.h1>

                {/* Sub-heading — One unified description */}
                <motion.p
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                    className="max-w-[42rem] leading-normal text-white/80 sm:text-xl sm:leading-8 drop-shadow-sm"
                >
                    Polyboard furniture design & CorelDRAW precision meets Python automation,
                    high-performance bots, and AI-augmented web scraping.
                </motion.p>

                {/* Split Skills Tags */}
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.55, duration: 0.5 }}
                    className="flex flex-wrap items-center justify-center gap-2 max-w-lg"
                >
                    {/* Design tags */}
                    {["Polyboard", "CorelDRAW", "CNC"].map(tag => (
                        <span key={tag} className="rounded-full border border-indigo-400/30 bg-indigo-500/10 px-3 py-1 text-xs font-medium text-indigo-200 backdrop-blur-sm">
                            {tag}
                        </span>
                    ))}
                    <span className="text-white/30 text-xs">×</span>
                    {/* Code tags */}
                    {["Python", "Telegram Bots", "Web Scraping"].map(tag => (
                        <span key={tag} className="rounded-full border border-emerald-400/30 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-200 backdrop-blur-sm">
                            {tag}
                        </span>
                    ))}
                </motion.div>

                {/* CTAs */}
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.7, duration: 0.5 }}
                    className="flex gap-4"
                >
                    <Link
                        href="/#projects"
                        className="inline-flex h-11 items-center justify-center rounded-full bg-white px-8 text-sm font-semibold text-gray-900 shadow-lg transition-all hover:shadow-xl hover:-translate-y-0.5 hover:bg-gray-50"
                    >
                        View My Work
                    </Link>
                    <Link
                        href="/#contact"
                        className="inline-flex h-11 items-center justify-center rounded-full border border-white/25 bg-white/10 px-8 text-sm font-semibold text-white shadow-sm backdrop-blur-sm transition-all hover:bg-white/20 hover:-translate-y-0.5"
                    >
                        Contact Me
                    </Link>
                </motion.div>
            </div>

            {/* ── Bottom Gradient Fade ── */}
            <div className="absolute bottom-0 left-0 right-0 z-[2] h-24 bg-gradient-to-t from-background to-transparent" />
        </section>
    )
}
