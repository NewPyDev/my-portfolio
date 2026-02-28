import { notFound } from "next/navigation"
import { projects } from "@/lib/data"
import { Navbar } from "@/components/sections/navbar"
import { Footer } from "@/components/sections/footer"
import { ExternalLink, Github, ArrowLeft, Layers, Terminal } from "lucide-react"
import Link from "next/link"


interface ProjectPageProps {
    params: Promise<{
        id: string
    }>
}

export async function generateStaticParams() {
    return projects.map((project) => ({
        id: project.id,
    }))
}

export default async function ProjectPage(props: ProjectPageProps) {
    const params = await props.params;
    const project = projects.find((p) => p.id === params.id)

    if (!project) {
        notFound()
    }

    return (
        <main className="flex min-h-screen flex-col">
            <Navbar />
            <div className="container py-24 sm:py-32">
                <Link href="/#projects" className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-8">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back to Projects
                </Link>
                <div className="grid gap-8 lg:grid-cols-2">
                    <div className="space-y-4">
                        <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">{project.title}</h1>
                        <div className="flex gap-2">
                            <span className={`px-2 py-1 rounded-full text-xs font-semibold ${project.category === "Design" ? "bg-indigo-100 text-indigo-700" : "bg-emerald-100 text-emerald-700"}`}>
                                {project.category}
                            </span>
                            {project.tags.map(tag => (
                                <span key={tag} className="border px-2 py-1 rounded-full text-xs text-muted-foreground">
                                    {tag}
                                </span>
                            ))}
                        </div>
                        <p className="text-xl text-muted-foreground leading-relaxed">
                            {project.description}
                        </p>

                        <div className="flex gap-4 pt-4">
                            {project.repoUrl && (
                                <a href={project.repoUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90">
                                    <Github className="h-4 w-4" />
                                    View Code
                                </a>
                            )}
                            {project.demoUrl && (
                                <a href={project.demoUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-md border bg-background px-4 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground">
                                    <ExternalLink className="h-4 w-4" />
                                    Live Demo
                                </a>
                            )}
                        </div>
                    </div>

                    <div className="relative aspect-video overflow-hidden rounded-xl border bg-muted">
                        {project.imageUrl ? (
                            <img
                                src={project.imageUrl}
                                alt={project.title}
                                className="object-cover w-full h-full"
                            />
                        ) : project.category === "Design" ? (
                            <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-indigo-500/10 to-purple-500/10 transition-colors p-8 text-center">
                                <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-indigo-700/40 dark:text-indigo-400/40">{project.title}</h2>
                            </div>
                        ) : (
                            <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-emerald-500/10 to-cyan-500/10 transition-colors p-8 text-center">
                                <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-emerald-700/40 dark:text-emerald-400/40">{project.title}</h2>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <Footer />
        </main>
    )
}
