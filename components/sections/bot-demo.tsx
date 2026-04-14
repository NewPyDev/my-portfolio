"use client"

import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { Send, Bot, RefreshCcw, ArrowRight } from "lucide-react"

type Message = {
    id: string;
    text: string;
    sender: "bot" | "user";
    timestamp: Date;
}

const INITIAL_MESSAGES: Message[] = [
    { id: "1", text: "Hello! I'm the Vibe Coder Assistant. 🤖", sender: "bot", timestamp: new Date() },
    { id: "2", text: "I can help you learn about my services, pricing, and projects. Type /help to see what I can do!", sender: "bot", timestamp: new Date() },
]

export function BotDemo() {
    const [messages, setMessages] = useState<Message[]>(INITIAL_MESSAGES)
    const [input, setInput] = useState("")
    const [isTyping, setIsTyping] = useState(false)
    const scrollRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight
        }
    }, [messages, isTyping])

    const handleSend = async () => {
        if (!input.trim()) return

        const userMsg: Message = { id: Date.now().toString(), text: input, sender: "user", timestamp: new Date() }
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
                responseText = "I offer 4 core services:\n\n🔍 Web Scraping — from $150\n🤖 Telegram/Discord Bots — from $100\n⚡ Scraper + Bot Combo — from $250\n🪵 Furniture Design (Polyboard) — from $200\n\nType the service name for more details!"
            } else if (lowerInput.includes("/scraper") || lowerInput.includes("scraping") || lowerInput.includes("scrape")) {
                responseText = "🔍 Web Scraping Solutions — from $150\n\nI extract data from any website, even those with anti-bot measures. Dynamic sites, CAPTCHA bypasses, structured CSV/JSON output.\n\nSimple jobs from $150, complex multi-site from $500+."
            } else if (lowerInput.includes("/bot") || lowerInput.includes("telegram") || lowerInput.includes("discord")) {
                responseText = "🤖 Bot Development — from $100\n\nI build custom Telegram & Discord bots using Python (Aiogram, Discord.py). Features include:\n• Custom commands & menus\n• Database integration\n• Payment & API integrations\n• Admin dashboards\n\nSimple bots from $100, advanced from $300+."
            } else if (lowerInput.includes("/contact") || lowerInput.includes("contact") || lowerInput.includes("reach")) {
                responseText = "📬 You can reach me at:\n\n• Telegram: @Yassine_nagat0\n• Email: n0nyf0xy@gmail.com\n\nI typically respond within 24 hours!"
            } else if (lowerInput.includes("/portfolio") || lowerInput.includes("portfolio") || lowerInput.includes("work") || lowerInput.includes("project")) {
                responseText = "Check out my work above! 👆\n\nI have 15+ projects spanning:\n• 🤖 Automation bots\n• 🔍 Web scrapers\n• 🪵 Polyboard furniture designs\n• 🌐 Web applications\n\nScroll up to the Projects Gallery!"
            } else if (lowerInput.includes("/hire") || lowerInput.includes("hire") || lowerInput.includes("ready") || lowerInput.includes("start")) {
                responseText = "Let's build something awesome! 🚀\n\nHead to the Contact section below, or DM me directly on Telegram at @Yassine_nagat0.\n\nI typically respond within 24 hours and can start most projects within a week."
            } else if (lowerInput.includes("price") || lowerInput.includes("cost") || lowerInput.includes("how much") || lowerInput.includes("pricing")) {
                responseText = "💰 My starting prices:\n\n• Web Scraping: from $150\n• Telegram/Discord Bot: from $100\n• Scraper + Bot Combo: from $250\n• Polyboard Design: from $200\n\nFinal price depends on complexity. DM me for a custom quote!"
            }

            const botMsg: Message = { id: (Date.now() + 1).toString(), text: responseText, sender: "bot", timestamp: new Date() }
            setMessages(prev => [...prev, botMsg])
            setIsTyping(false)
        }, 1000)
    }

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === "Enter") handleSend()
    }

    return (
        <section className="container py-24 sm:py-32 flex flex-col items-center">
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
                    Experience the &quot;Vibe Coder&quot; workflow. Try typing <code className="rounded bg-muted px-1.5 py-0.5 text-sm">/help</code> or ask about pricing.
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
                        <p className="text-xs opacity-80">Online • Bot</p>
                    </div>
                    <button onClick={() => setMessages(INITIAL_MESSAGES)} className="ml-auto p-1 hover:bg-white/10 rounded">
                        <RefreshCcw className="h-4 w-4" />
                    </button>
                </div>

                {/* Chat Area */}
                <div ref={scrollRef} className="h-[400px] overflow-y-auto p-4 space-y-4 bg-muted/20">
                    {messages.map((msg) => (
                        <motion.div
                            key={msg.id}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
                        >
                            <div className={`max-w-[80%] rounded-lg px-4 py-2 text-sm whitespace-pre-wrap ${msg.sender === "user" ? "bg-gradient-to-r from-emerald-600 to-cyan-600 text-white" : "bg-muted border"}`}>
                                {msg.text}
                            </div>
                        </motion.div>
                    ))}
                    {isTyping && (
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex justify-start">
                            <div className="bg-muted border rounded-lg px-4 py-2 text-sm flex gap-1">
                                <span className="w-1.5 h-1.5 bg-foreground/50 rounded-full animate-bounce [animation-delay:-0.3s]" />
                                <span className="w-1.5 h-1.5 bg-foreground/50 rounded-full animate-bounce [animation-delay:-0.15s]" />
                                <span className="w-1.5 h-1.5 bg-foreground/50 rounded-full animate-bounce" />
                            </div>
                        </motion.div>
                    )}
                </div>

                {/* Input Area */}
                <div className="p-4 border-t bg-background flex gap-2">
                    <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={handleKeyDown}
                        placeholder="Type a message..."
                        className="flex-1 bg-transparent border-none focus:outline-none text-sm placeholder:text-muted-foreground"
                    />
                    <button onClick={handleSend} disabled={!input.trim()} className="text-primary disabled:opacity-50">
                        <Send className="h-5 w-5" />
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
                    <a
                        href="#contact"
                        className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-emerald-600 to-cyan-600 px-6 py-2.5 text-sm font-medium text-white shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5"
                    >
                        Get Your Own Bot
                        <ArrowRight className="h-4 w-4" />
                    </a>
                </div>
            </motion.div>
        </section>
    )
}
