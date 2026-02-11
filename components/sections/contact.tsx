"use client"

import { Mail, MessageSquare, Linkedin, Github } from "lucide-react"

export function Contact() {
    return (
        <section id="contact" className="container py-24 sm:py-32">
            <div className="mx-auto max-w-[58rem] text-center">
                <h2 className="text-3xl font-bold leading-[1.1] sm:text-3xl md:text-5xl">Get in Touch</h2>
                <p className="mt-4 text-muted-foreground sm:text-lg">
                    Ready to start a project? Whether it&apos;s a complex furniture design or a high-speed trading bot, I&apos;m here to help.
                </p>
            </div>

            <div className="mx-auto mt-12 grid max-w-lg gap-4">
                <a
                    href="mailto:contact@example.com"
                    className="flex items-center justify-between rounded-lg border bg-background p-4 transition-colors hover:bg-muted/50"
                >
                    <div className="flex items-center gap-4">
                        <div className="rounded-md bg-primary/10 p-2 text-primary">
                            <Mail className="h-6 w-6" />
                        </div>
                        <div className="text-left">
                            <h3 className="font-semibold">Email</h3>
                            <p className="text-sm text-muted-foreground">contact@example.com</p>
                        </div>
                    </div>
                </a>

                <a
                    href="https://t.me/yourusername"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-between rounded-lg border bg-background p-4 transition-colors hover:bg-muted/50"
                >
                    <div className="flex items-center gap-4">
                        <div className="rounded-md bg-blue-500/10 p-2 text-blue-500">
                            <MessageSquare className="h-6 w-6" />
                        </div>
                        <div className="text-left">
                            <h3 className="font-semibold">Telegram</h3>
                            <p className="text-sm text-muted-foreground">@yourusername</p>
                        </div>
                    </div>
                </a>

                <div className="mt-8 flex justify-center gap-6">
                    <a href="https://github.com" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground">
                        <Github className="h-6 w-6" />
                        <span className="sr-only">GitHub</span>
                    </a>
                    <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground">
                        <Linkedin className="h-6 w-6" />
                        <span className="sr-only">LinkedIn</span>
                    </a>
                </div>
            </div>
        </section>
    )
}
