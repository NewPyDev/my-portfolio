"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { projects } from "@/lib/data"
import { Github, ArrowUpRight, Code2, Palette } from "lucide-react"
import Link from "next/link"
import { Category } from "@/lib/types"

export function Gallery() {
    const [filter, setFilter] = useState<Category | "All">("All")

    const filteredProjects = projects.filter(project => filter === "All" || project.category === filter)

    const filterLabels: Record<string, string> = {
        "All": "All Projects",
        "Design": "Creative Suite",
        "Code": "Vibe Code",
    }

    return (
        <section id="projects" className="py-24 sm:py-32">
            {/* Section Header */}
            <div className="container space-y-16">
                <div className="flex flex-col items-center justify-center space-y-6 text-center">
                    <div className="inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-sm font-medium text-muted-foreground">
                        <span className="relative flex h-2 w-2">
                            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                        </span>
                        Portfolio
                    </div>
                    <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl bg-gradient-to-r from-foreground via-foreground/80 to-foreground/60 bg-clip-text text-transparent">
                        Featured Works
                    </h2>
                    <p className="max-w-[600px] text-muted-foreground text-lg">
                        From precision furniture design to high-performance automation — a showcase of craft and code.
                    </p>
                </div>

                {/* Filter Buttons */}
                <div className="flex justify-center">
                    <div className="inline-flex items-center gap-1 rounded-full border p-1 bg-muted/50 backdrop-blur-sm">
                        {["All", "Design", "Code"].map((category) => (
                            <button
                                key={category}
                                onClick={() => setFilter(category as Category | "All")}
                                className={`relative px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${filter === category
                                    ? "bg-background text-foreground shadow-sm"
                                    : "text-muted-foreground hover:text-foreground"
                                    }`}
                            >
                                {filterLabels[category]}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Project Grid */}
                <motion.div
                    layout
                    className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
                >
                    <AnimatePresence>
                        {filteredProjects.map((project, index) => (
                            <motion.div
                                layout
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.3, delay: index * 0.05 }}
                                key={project.id}
                                className="group relative"
                            >
                                <Link href={`/projects/${project.id}`} className="block h-full">
                                    <div className="relative h-full overflow-hidden rounded-2xl border border-border/50 bg-card transition-all duration-300 hover:border-border hover:shadow-xl hover:shadow-black/5 dark:hover:shadow-black/20">
                                        {/* Image / Placeholder Area */}
                                        <div className="relative aspect-[4/3] overflow-hidden">
                                            {project.imageUrl ? (
                                                <>
                                                    <img
                                                        src={project.imageUrl}
                                                        alt={project.title}
                                                        className="object-cover h-full w-full transition-transform duration-500 group-hover:scale-105"
                                                    />
                                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
                                                    <div className="absolute bottom-4 left-4 right-4">
                                                        <span className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold backdrop-blur-md ${
                                                            project.category === "Design"
                                                                ? "bg-indigo-500/20 text-indigo-200 border border-indigo-400/20"
                                                                : "bg-emerald-500/20 text-emerald-200 border border-emerald-400/20"
                                                        }`}>
                                                            {project.category === "Design" ? <Palette className="h-3 w-3" /> : <Code2 className="h-3 w-3" />}
                                                            {project.category === "Design" ? "Creative" : "Code"}
                                                        </span>
                                                    </div>
                                                </>
                                            ) : (
                                                <div className={`flex h-full w-full flex-col items-center justify-center p-8 text-center transition-all duration-300 ${
                                                    project.category === "Design"
                                                        ? "bg-gradient-to-br from-indigo-500/5 via-purple-500/10 to-pink-500/5 group-hover:from-indigo-500/10 group-hover:via-purple-500/15 group-hover:to-pink-500/10"
                                                        : "bg-gradient-to-br from-emerald-500/5 via-cyan-500/10 to-teal-500/5 group-hover:from-emerald-500/10 group-hover:via-cyan-500/15 group-hover:to-teal-500/10"
                                                }`}>
                                                    <div className={`mb-4 rounded-2xl p-3 ${
                                                        project.category === "Design"
                                                            ? "bg-indigo-500/10 text-indigo-500"
                                                            : "bg-emerald-500/10 text-emerald-500"
                                                    }`}>
                                                        {project.category === "Design"
                                                            ? <Palette className="h-8 w-8" />
                                                            : <Code2 className="h-8 w-8" />
                                                        }
                                                    </div>
                                                    <h3 className={`font-bold tracking-tight text-lg leading-tight ${
                                                        project.category === "Design"
                                                            ? "text-indigo-700/50 dark:text-indigo-400/50"
                                                            : "text-emerald-700/50 dark:text-emerald-400/50"
                                                    }`}>
                                                        {project.title}
                                                    </h3>
                                                </div>
                                            )}

                                            {/* Hover Arrow */}
                                            <div className="absolute top-4 right-4 rounded-full bg-background/80 p-2 opacity-0 transform translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 backdrop-blur-sm shadow-sm">
                                                <ArrowUpRight className="h-4 w-4 text-foreground" />
                                            </div>
                                        </div>

                                        {/* Card Content */}
                                        <div className="p-5 space-y-3">
                                            <div className="flex items-start justify-between gap-2">
                                                <h3 className="font-semibold text-foreground leading-tight group-hover:text-primary transition-colors">
                                                    {project.title}
                                                </h3>
                                                {!project.imageUrl && (
                                                    <span className={`shrink-0 inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-xs font-medium ${
                                                        project.category === "Design"
                                                            ? "bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-400"
                                                            : "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400"
                                                    }`}>
                                                        {project.category === "Design" ? "Creative" : "Code"}
                                                    </span>
                                                )}
                                            </div>
                                            <p className="line-clamp-2 text-sm text-muted-foreground leading-relaxed">
                                                {project.description}
                                            </p>
                                            <div className="flex flex-wrap gap-1.5 pt-1">
                                                {project.tags.map(tag => (
                                                    <span key={tag} className="inline-flex items-center rounded-md px-2 py-0.5 text-xs font-medium bg-muted text-muted-foreground">
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>
                                            {project.repoUrl && (
                                                <div className="flex items-center gap-1.5 pt-1 text-xs text-muted-foreground">
                                                    <Github className="h-3.5 w-3.5" />
                                                    <span>Source Available</span>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>
        </section>
    )
}
