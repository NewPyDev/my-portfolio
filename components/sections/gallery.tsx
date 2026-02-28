"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { projects } from "@/lib/data"
import { Layers, Terminal, Github } from "lucide-react"
import Link from "next/link"
import { Category } from "@/lib/types"

export function Gallery() {
    const [filter, setFilter] = useState<Category | "All">("All")

    const filteredProjects = projects.filter(project => filter === "All" || project.category === filter)

    return (
        <section id="projects" className="container py-24 sm:py-32 space-y-12 bg-muted/30">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Featured Works</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    A selection of parametric designs, vector illustrations, and high-performance bots.
                </p>
            </div>

            <div className="flex justify-center gap-4">
                {["All", "Design", "Code"].map((category) => (
                    <button
                        key={category}
                        onClick={() => setFilter(category as Category | "All")}
                        className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${filter === category
                            ? "bg-primary text-primary-foreground"
                            : "bg-muted hover:bg-muted/80 text-muted-foreground"
                            }`}
                    >
                        {category === "All" ? "All Projects" : category === "Design" ? "Creative Suite" : "Vibe Code"}
                    </button>
                ))}
            </div>

            <motion.div
                layout
                className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
            >
                <AnimatePresence>
                    {filteredProjects.map((project) => (
                        <motion.div
                            layout
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.2 }}
                            key={project.id}
                            className="group relative overflow-hidden rounded-lg border bg-background p-2 transition-all hover:shadow-lg"
                        >
                            <Link href={`/projects/${project.id}`} className="block h-full">
                                <div className="relative aspect-video overflow-hidden rounded-md bg-muted">
                                    {/* Visual Representation */}
                                    {project.imageUrl ? (
                                        <div className="relative h-full w-full">
                                            <img
                                                src={project.imageUrl}
                                                alt={project.title}
                                                className="object-cover h-full w-full"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                                        </div>
                                    ) : project.category === "Design" ? (
                                        <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-indigo-500/10 to-purple-500/10 group-hover:from-indigo-500/20 group-hover:to-purple-500/20 transition-colors">
                                            <Layers className="h-12 w-12 text-indigo-500 opacity-50" />
                                        </div>
                                    ) : (
                                        <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-emerald-500/10 to-cyan-500/10 group-hover:from-emerald-500/20 group-hover:to-cyan-500/20 transition-colors">
                                            <Terminal className="h-12 w-12 text-emerald-500 opacity-50" />
                                        </div>
                                    )}

                                    {/* Hover Overlay */}
                                    <div className="absolute inset-0 flex items-center justify-center gap-4 bg-background/80 opacity-0 transition-opacity group-hover:opacity-100 backdrop-blur-sm">
                                        <span className="font-medium bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm">View Details</span>
                                        {project.repoUrl && (
                                            <span className="rounded-full bg-secondary p-2 hover:bg-secondary/80">
                                                <Github className="h-4 w-4" />
                                            </span>
                                        )}
                                    </div>
                                </div>

                                <div className="p-4">
                                    <div className="flex items-center justify-between">
                                        <h3 className="font-semibold group-hover:underline text-foreground">{project.title}</h3>
                                        <span className={`text-xs px-2 py-1 rounded-full ${project.category === "Design" ? "bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-400" : "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400"}`}>
                                            {project.category === "Design" ? "Creative" : "Code"}
                                        </span>
                                    </div>
                                    <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">
                                        {project.description}
                                    </p>
                                    <div className="mt-4 flex flex-wrap gap-2">
                                        {project.tags.map(tag => (
                                            <span key={tag} className="inline-flex items-center rounded-md border px-2 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </motion.div>
        </section>
    )
}
