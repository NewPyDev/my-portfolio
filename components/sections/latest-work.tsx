"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Github, Star, GitFork, ArrowUpRight, ExternalLink, Loader2 } from "lucide-react"

interface GitHubRepo {
    id: number
    name: string
    description: string | null
    html_url: string
    language: string | null
    stargazers_count: number
    forks_count: number
    pushed_at: string
}

const languageColors: Record<string, string> = {
    Python: "bg-blue-500",
    JavaScript: "bg-yellow-400",
    TypeScript: "bg-blue-600",
    HTML: "bg-orange-500",
    CSS: "bg-purple-500",
}

export function LatestWork() {
    const [repos, setRepos] = useState<GitHubRepo[]>([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)

    useEffect(() => {
        async function fetchRepos() {
            try {
                const res = await fetch(
                    "https://api.github.com/users/NewPyDev/repos?sort=pushed&direction=desc&per_page=4",
                    { next: { revalidate: 3600 } } as RequestInit
                )
                if (!res.ok) throw new Error("Failed to fetch")
                const data = await res.json()
                setRepos(data)
            } catch {
                setError(true)
            } finally {
                setLoading(false)
            }
        }
        fetchRepos()
    }, [])

    function timeAgo(dateStr: string) {
        const diff = Date.now() - new Date(dateStr).getTime()
        const days = Math.floor(diff / 86400000)
        if (days === 0) return "today"
        if (days === 1) return "yesterday"
        if (days < 30) return `${days}d ago`
        if (days < 365) return `${Math.floor(days / 30)}mo ago`
        return `${Math.floor(days / 365)}y ago`
    }

    if (error) return null // Gracefully hide if API fails

    return (
        <section id="latest-work" className="py-24 sm:py-32">
            <div className="container space-y-16">
                {/* Section Header */}
                <div className="flex flex-col items-center justify-center space-y-6 text-center">
                    <div className="inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-sm font-medium text-muted-foreground">
                        <span className="relative flex h-2 w-2">
                            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-violet-400 opacity-75" />
                            <span className="relative inline-flex h-2 w-2 rounded-full bg-violet-500" />
                        </span>
                        Live from GitHub
                    </div>
                    <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl bg-gradient-to-r from-foreground via-foreground/80 to-foreground/60 bg-clip-text text-transparent">
                        Latest Activity
                    </h2>
                    <p className="max-w-[600px] text-muted-foreground text-lg">
                        What I&apos;ve been working on recently — pulled live from my GitHub.
                    </p>
                </div>

                {/* Repo Grid */}
                {loading ? (
                    <div className="flex items-center justify-center py-16">
                        <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
                    </div>
                ) : (
                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                        {repos.map((repo, index) => (
                            <motion.a
                                key={repo.id}
                                href={repo.html_url}
                                target="_blank"
                                rel="noreferrer"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.3, delay: index * 0.08 }}
                                viewport={{ once: true }}
                                className="group relative block"
                            >
                                <div className="relative h-full overflow-hidden rounded-2xl border border-border/50 bg-card p-6 transition-all duration-300 hover:border-border hover:shadow-xl hover:shadow-black/5 dark:hover:shadow-black/20 hover:-translate-y-1">
                                    {/* Header */}
                                    <div className="flex items-start justify-between mb-3">
                                        <div className="flex items-center gap-2">
                                            <Github className="h-5 w-5 text-muted-foreground" />
                                            <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors truncate">
                                                {repo.name}
                                            </h3>
                                        </div>
                                        <ArrowUpRight className="h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
                                    </div>

                                    {/* Description */}
                                    <p className="text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-2">
                                        {repo.description || "No description available."}
                                    </p>

                                    {/* Meta */}
                                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                                        {repo.language && (
                                            <div className="flex items-center gap-1.5">
                                                <span className={`h-2.5 w-2.5 rounded-full ${languageColors[repo.language] || "bg-gray-400"}`} />
                                                <span>{repo.language}</span>
                                            </div>
                                        )}
                                        {repo.stargazers_count > 0 && (
                                            <div className="flex items-center gap-1">
                                                <Star className="h-3.5 w-3.5" />
                                                <span>{repo.stargazers_count}</span>
                                            </div>
                                        )}
                                        {repo.forks_count > 0 && (
                                            <div className="flex items-center gap-1">
                                                <GitFork className="h-3.5 w-3.5" />
                                                <span>{repo.forks_count}</span>
                                            </div>
                                        )}
                                        <span className="ml-auto">Updated {timeAgo(repo.pushed_at)}</span>
                                    </div>
                                </div>
                            </motion.a>
                        ))}
                    </div>
                )}

                {/* View All CTA */}
                <div className="flex justify-center">
                    <a
                        href="https://github.com/NewPyDev?tab=repositories"
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 rounded-full border bg-muted/50 px-6 py-3 text-sm font-medium text-foreground transition-all hover:bg-muted hover:shadow-md"
                    >
                        <Github className="h-4 w-4" />
                        View All Repositories
                        <ExternalLink className="h-3.5 w-3.5 text-muted-foreground" />
                    </a>
                </div>
            </div>
        </section>
    )
}
