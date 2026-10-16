import Link from "next/link"
import { Github, Send, Mail } from "lucide-react"

export function Footer() {
    return (
        <footer className="border-t py-8 md:py-6 bg-background">
            <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
                <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
                    Built by <span className="font-semibold text-foreground">Mohammed Yassine (Hami)</span>. The Designer Who Codes.
                </p>
                <div className="flex items-center gap-6 text-sm text-muted-foreground">
                    <Link
                        href="https://github.com/NewPyDev"
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 hover:text-foreground transition-colors"
                    >
                        <Github className="h-4 w-4" />
                        GitHub
                    </Link>
                    <Link
                        href="https://t.me/Yassine_nagat0"
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 hover:text-foreground transition-colors"
                    >
                        <Send className="h-4 w-4" />
                        Telegram
                    </Link>
                    <Link
                        href="mailto:n0nyf0xy@duck.com"
                        className="inline-flex items-center gap-1.5 hover:text-foreground transition-colors"
                    >
                        <Mail className="h-4 w-4" />
                        Email
                    </Link>
                </div>
            </div>
        </footer>
    )
}
