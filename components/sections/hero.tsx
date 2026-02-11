"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import Link from "next/link"
import { Terminal, Palette } from "lucide-react"

export function Hero() {
    const { theme } = useTheme()
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setTimeout(() => setMounted(true), 0)
    }, [])

    if (!mounted) return <div className="h-[calc(100vh-3.5rem)]" /> // Prevent layout shift

    const isDark = theme === "dark"

    return (
        <section className="relative flex h-[calc(100vh-3.5rem)] w-full flex-col items-center justify-center overflow-hidden border-b bg-background transition-colors duration-500">
            <AnimatePresence mode="wait">
                {isDark ? (
                    <motion.div
                        key="coder"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                        className="absolute inset-0 z-0 bg-background"
                    >
                        {/* Matrix/Code Effect Background */}
                        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
                    </motion.div>
                ) : (
                    <motion.div
                        key="designer"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                        className="absolute inset-0 z-0 bg-background"
                    >
                        {/* Clean Grid Background */}
                        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
                    </motion.div>
                )}
            </AnimatePresence>

            <div className="container relative z-10 flex flex-col items-center gap-4 text-center">
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="flex items-center gap-2 rounded-full border bg-muted/50 px-4 py-1.5 text-sm font-medium text-muted-foreground backdrop-blur-md"
                >
                    {isDark ? <Terminal className="h-4 w-4" /> : <Palette className="h-4 w-4" />}
                    <span key={isDark ? "coder-tag" : "design-tag"}>
                        {isDark ? "Vibe Coder Mode Active" : "Creative Mode Active"}
                    </span>
                </motion.div>

                <motion.h1
                    key={isDark ? "coder-heading" : "design-heading"}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
                >
                    {isDark ? (
                        <span className="bg-gradient-to-r from-emerald-400 to-cyan-500 bg-clip-text text-transparent">
                            Bot Developer &<br /> Web Scraper
                        </span>
                    ) : (
                        <span className="bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent">
                            Polyboard Designer &<br /> CorelDRAW Pro
                        </span>
                    )}
                </motion.h1>

                <motion.p
                    key={isDark ? "coder-desc" : "design-desc"}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                    className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8"
                >
                    {isDark
                        ? "Automating the boring stuff. Building high-performance bots for Telegram & Discord. AI-augmented scraping at scale."
                        : "Crafting precise, beautiful designs. Specialized in furniture design with Polyboard and vector art with CorelDRAW."}
                </motion.p>

                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.6, duration: 0.5 }}
                    className="flex gap-4"
                >
                    <Link
                        href="/projects"
                        className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    >
                        View Work
                    </Link>
                    <Link
                        href="/contact"
                        className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    >
                        Contact Me
                    </Link>
                </motion.div>

                {/* Theme Toggle Hint */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: [0, 1, 1, 0] }}
                    transition={{
                        duration: 4,
                        times: [0, 0.2, 0.8, 1],
                        repeat: Infinity,
                        repeatDelay: 2
                    }}
                    className="absolute bottom-10 animate-bounce text-xs text-muted-foreground"
                >
                    <span className="bg-muted px-2 py-1 rounded-full border shadow-sm">
                        Try switching the theme 🌓
                    </span>
                </motion.div>
            </div>
        </section>
    )
}
