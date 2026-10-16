"use client"

import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { Send, Bot, RefreshCcw, ArrowRight } from "lucide-react"
import Link from "next/link"

type Message = {
    id: string;
    text: string;
    sender: "bot" | "user";
}

const INITIAL_MESSAGES: Message[] = [
    { id: "1", text: "Hello! I'm the Vibe Coder Assistant. 🤖", sender: "bot" },
    { id: "2", text: "I can help you learn about my services, pricing, and projects. Click a chip below or type /help to get started!", sender: "bot" },
]

const QUICK_COMMANDS = [
    { label: "⚡ Services", cmd: "/services" },
    { label: "💰 Pricing", cmd: "/pricing" },
    { label: "🔍 Scraping", cmd: "/scraper" },
    { label: "🤖 Bots", cmd: "/bot" },
    { label: "📬 Contact", cmd: "/contact" },
]

export function BotDemo() {
    const [messages, setMessages] = useState<Message[]>(INITIAL_MESSAGES)
    const [input, setInput] = useState("")
    const [isTyping, setIsTyping] = useState(false)
    const scrollRef = useRef<HTMLDivElement>(null)
    const msgCounter = useRef(3)

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight
        }
    }, [messages, isTyping])

    const sendMessage = (textToSend: string) => {
        if (!textToSend.trim()) return

        const userMsg: Message = { id: `msg-${msgCounter.current++}`, text: textToSend, sender: "user" }
        setMessages(prev => [...prev, userMsg])
        setInput("")
        setIsTyping(true)

        // Simulate bot delay
        setTimeout(() => {
            let responseText = "I'm not sure about that command. Try /help to see what I can do!"
            const lowerInput = userMsg.text.toLowerCase()

            if (lowerInput.includes("/help") || lowerInput.includes("help") || lowerInput.includes("hi") || lowerInput.includes("hello")) {
                responseText = "Here's what I can help with:\n\n/services — What I build & pricing\n/scraper — Web scraping details\n/bot — Bot development details\n/portfolio — See my work\n/contact — Get in touch\n/hire — Ready to start?"
            } else if (lowerInput.includes("/services") || lowerInput.includes("services") || lowerInput.includes("what do you do")) {
                responseText = "I offer 4 core services:\n\n🔍 Web Scraping — from $150\n🤖 Telegram/Discord Bots — from $100\n⚡ Scraper + Bot Combo — from $250\n🪵 Furniture Design (Polyboard) — from $200\n\nClick a command chip or type the service name for more details!"
            } else if (lowerInput.includes("/scraper") || lowerInput.includes("scraping") || lowerInput.includes("scrape")) {
                responseText = "🔍 Web Scraping Solutions — from $150\n\nI extract data from any website, even those with anti-bot measures. Dynamic sites, CAPTCHA bypasses, structured CSV/JSON output.\n\nSimple jobs from $150, complex multi-site from $500+."
            } else if (lowerInput.includes("/bot") || lowerInput.includes("telegram") || lowerInput.includes("discord")) {
                responseText = "🤖 Bot Development — from $100\n\nI build custom Telegram & Discord bots using Python (Aiogram, Discord.py). Features include:\n• Custom commands & menus\n• Database integration\n• Payment & API integrations\n• Admin dashboards\n\nSimple bots from $100, advanced from $300+."
            } else if (lowerInput.includes("/contact") || lowerInput.includes("contact") || lowerInput.includes("reach")) {
                responseText = "📬 You can reach me at:\n\n• Telegram: @Yassine_nagat0\n• Email: n0nyf0xy@duck.com\n\nI typically respond within 24 hours!"
            } else if (lowerInput.includes("/portfolio") || lowerInput.includes("portfolio") || lowerInput.includes("work") || lowerInput.includes("project")) {
                responseText = "Check out my work in the Featured Works gallery! 👆\n\nI have 15+ projects spanning:\n• 🤖 Automation bots\n• 🔍 Web scrapers\n• 🪵 Polyboard furniture designs\n• 🌐 Web applications\n\nScroll up to view all projects!"
            } else if (lowerInput.includes("/hire") || lowerInput.includes("hire") || lowerInput.includes("ready") || lowerInput.includes("start")) {
                responseText = "Let's build something awesome! 🚀\n\nHead to the Contact section below, or DM me directly on Telegram at @Yassine_nagat0.\n\nI typically respond within 24 hours and can start most projects within a week."
            } else if (lowerInput.includes("price") || lowerInput.includes("cost") || lowerInput.includes("how much") || lowerInput.includes("pricing")) {
                responseText = "💰 My starting prices:\n\n• Web Scraping: from $150\n• Telegram/Discord Bot: from $100\n• Scraper + Bot Combo: from $250\n• Polyboard Design: from $200\n\nFinal price depends on complexity. DM me for a custom quote!"
            }

            const botMsg: Message = { id: `msg-${msgCounter.current++}`, text: responseText, sender: "bot" }
            setMessages(prev => [...prev, botMsg])
            setIsTyping(false)
        }, 800)
    }

    const handleSend = () => sendMessage(input)

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === "Enter") handleSend()
    }

    return (
        <section id="bot-demo" className="container py-24 sm:py-32 flex flex-col items-center">
            <div className="text-center mb-12">
                <div className="inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-sm font-medium text-muted-foreground mb-6">
                    <span className="relative flex h-2 w-2">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-purple-400 opacity-75" />
                        <span className="relative inline-flex h-2 w-2 rounded-full bg-purple-500" />
                    </span>
                    Interactive Demo
                </div>
                <h2 className="text-3xl font-bold sm:text-4xl">Chat with the Portfolio</h2>
                <p className="mt-4 text-muted-foreground">
                    Experience the &quot;Vibe Coder&quot; workflow. Try clicking a quick command below or typing <code className="rounded bg-muted px-1.5 py-0.5 text-sm">/help</code>.
                </p>
            </div>

            <div className="w-full max-w-md rounded-xl border bg-card shadow-xl overflow-hidden">
                {/* Chat Header */}
                <div className="bg-gradient-to-r from-emerald-600 to-cyan-600 px-4 py-3 flex items-center gap-3 text-white">
                    <div className="rounded-full bg-white/20 p-1.5">
                        <Bot className="h-5 w-5" />
                    </div>
                    <div>
                        <p className="font-semibold text-sm">Vibe Coder Bot</p>
                        <p className="text-xs opacity-80">Online • Ready to assist</p>
                    </div>
                    <button
                        onClick={() => setMessages(INITIAL_MESSAGES)}
                        className="ml-auto p-1.5 hover:bg-white/10 rounded-md transition-colors"
                        aria-label="Reset chat"
                    >
                        <RefreshCcw className="h-4 w-4" />
                    </button>
                </div>

                {/* Chat Area */}
                <div ref={scrollRef} className="h-[360px] overflow-y-auto p-4 space-y-4 bg-muted/20">
                    {messages.map((msg) => (
                        <motion.div
                            key={msg.id}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
                        >
                            <div className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm whitespace-pre-wrap leading-relaxed ${
                                msg.sender === "user"
                                    ? "bg-gradient-to-r from-emerald-600 to-cyan-600 text-white rounded-br-sm shadow-md"
                                    : "bg-muted/80 border rounded-bl-sm"
                            }`}>
                                {msg.text}
                            </div>
                        </motion.div>
                    ))}
                    {isTyping && (
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex justify-start">
                            <div className="bg-muted/80 border rounded-2xl rounded-bl-sm px-4 py-3 text-sm flex gap-1.5 items-center">
                                <span className="w-1.5 h-1.5 bg-foreground/50 rounded-full animate-bounce [animation-delay:-0.3s]" />
                                <span className="w-1.5 h-1.5 bg-foreground/50 rounded-full animate-bounce [animation-delay:-0.15s]" />
                                <span className="w-1.5 h-1.5 bg-foreground/50 rounded-full animate-bounce" />
                            </div>
                        </motion.div>
                    )}
                </div>

                {/* Quick Action Chips */}
                <div className="p-2 border-t bg-muted/30 flex items-center gap-1.5 overflow-x-auto no-scrollbar">
                    {QUICK_COMMANDS.map((cmd) => (
                        <button
                            key={cmd.cmd}
                            onClick={() => sendMessage(cmd.cmd)}
                            className="shrink-0 rounded-full border border-border/60 bg-background/80 px-2.5 py-1 text-xs font-medium text-muted-foreground hover:bg-accent hover:text-foreground transition-colors"
                        >
                            {cmd.label}
                        </button>
                    ))}
                </div>

                {/* Input Area */}
                <div className="p-3 border-t bg-background flex gap-2 items-center">
                    <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={handleKeyDown}
                        placeholder="Type a message or /help..."
                        className="flex-1 bg-transparent border-none focus:outline-none text-sm placeholder:text-muted-foreground px-2"
                    />
                    <button
                        onClick={handleSend}
                        disabled={!input.trim()}
                        className="rounded-lg bg-primary p-2 text-primary-foreground disabled:opacity-40 hover:bg-primary/90 transition-opacity"
                        aria-label="Send message"
                    >
                        <Send className="h-4 w-4" />
                    </button>
                </div>
            </div>

            {/* CTA Banner */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                viewport={{ once: true }}
                className="mt-8 w-full max-w-md"
            >
                <div className="rounded-xl border bg-gradient-to-r from-emerald-500/5 to-cyan-500/5 p-6 text-center">
                    <p className="font-semibold text-foreground mb-2">Like this? I can build one for your business.</p>
                    <p className="text-sm text-muted-foreground mb-4">Custom Telegram & Discord bots tailored to your exact needs.</p>
                    <Link
                        href="/#contact"
                        className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-emerald-600 to-cyan-600 px-6 py-2.5 text-sm font-medium text-white shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5"
                    >
                        Get Your Own Bot
                        <ArrowRight className="h-4 w-4" />
                    </Link>
                </div>
            </motion.div>
        </section>
    )
}
