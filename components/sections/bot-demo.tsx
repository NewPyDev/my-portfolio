"use client"

import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { Send, Bot, RefreshCcw, ArrowRight, ExternalLink, Shield, Swords, Sparkles } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

type Message = {
    id: string;
    text: string;
    sender: "bot" | "user";
}

const FEATURED_BOTS = [
    {
        id: "last-war-companion",
        name: "Last War Companion",
        badge: "Tactical Operations & Verification",
        description: "The premier Discord bot for Last War alliances. 5-second member verification via in-game UID, Saturday Kill Event unshielded base radar sweeps, squad power balancing, and 24/7 telemetry monitoring.",
        url: "https://lastwarcompanion.bot.nu/",
        image: "/assets/lastwarcompanion.png",
        stats: ["31 Slash Commands", "5s Auto-Verify", "Radar Sweeps", "Top.gg Verified"],
        gradient: "from-amber-500 via-orange-500 to-red-600",
        glow: "rgba(245, 158, 11, 0.15)",
        Icon: Shield,
    },
    {
        id: "tenkai",
        name: "Tenkai (天界)",
        badge: "Anime Multiverse RPG",
        description: "Anime Multiverse RPG & squad drafting platform for Discord. Features 7-pick tactical anime drafts, 10,000 HP World Boss raids, rendered Pillow rank cards, and Yu-Gi-Oh! duels across 6 universes.",
        url: "https://tenkai.bot.nu/",
        image: "/assets/tenkai.png",
        stats: ["6 Anime Universes", "10,000 HP Bosses", "Pillow Rank Cards", "Structure Decks"],
        gradient: "from-purple-500 via-indigo-500 to-cyan-500",
        glow: "rgba(168, 85, 247, 0.15)",
        Icon: Swords,
    },
]

const INITIAL_MESSAGES: Message[] = [
    { id: "1", text: "Hello! I'm the Vibe Coder Assistant. 🤖", sender: "bot" },
    { id: "2", text: "I can help you learn about my bots, services, pricing, and live projects. Try clicking a quick command below or type /help!", sender: "bot" },
]

const QUICK_COMMANDS = [
    { label: "🤖 Live Bots", cmd: "/bots" },
    { label: "⚡ Services", cmd: "/services" },
    { label: "💰 Pricing", cmd: "/pricing" },
    { label: "🔍 Scraping", cmd: "/scraper" },
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
                responseText = "Here's what I can help with:\n\n/bots — Live Discord bots (Last War & Tenkai)\n/services — What I build & pricing\n/scraper — Web scraping details\n/portfolio — See all projects\n/contact — Get in touch\n/hire — Ready to start?"
            } else if (lowerInput.includes("/bots") || lowerInput.includes("bot") || lowerInput.includes("discord") || lowerInput.includes("telegram")) {
                responseText = "🤖 Check out my live Discord production bots:\n\n1️⃣ Last War Companion\n🔗 https://lastwarcompanion.bot.nu/\n• 31 slash commands, UID verification in 5s, Saturday Kill Event base radar, and squad duel simulation.\n\n2️⃣ Tenkai (天界)\n🔗 https://tenkai.bot.nu/\n• Anime multiverse RPG, 7-pick tactical drafts, 10k HP World Boss raids, rendered Pillow rank cards & Yu-Gi-Oh! duels.\n\nNeed a custom bot for your business or gaming community? I build with Python (Aiogram, Discord.py). Starting from $100!"
            } else if (lowerInput.includes("/services") || lowerInput.includes("services") || lowerInput.includes("what do you do")) {
                responseText = "I offer 4 core services:\n\n🤖 Custom Discord & Telegram Bots — from $100\n🔍 Web Scraping Solutions — from $150\n⚡ Scraper + Bot Automation Pipeline — from $250\n🪵 Furniture Design (Polyboard) — from $200\n\nClick a command chip or type the service name for more details!"
            } else if (lowerInput.includes("/scraper") || lowerInput.includes("scraping") || lowerInput.includes("scrape")) {
                responseText = "🔍 Web Scraping Solutions — from $150\n\nI extract data from any website, even those with anti-bot measures. Dynamic sites, CAPTCHA bypasses, structured CSV/JSON output.\n\nSimple jobs from $150, complex multi-site from $500+."
            } else if (lowerInput.includes("/contact") || lowerInput.includes("contact") || lowerInput.includes("reach")) {
                responseText = "📬 You can reach me directly at:\n\n• Telegram: @Yassine_nagat0\n• Email: n0nyf0xy@duck.com\n\nI typically respond within 24 hours!"
            } else if (lowerInput.includes("/portfolio") || lowerInput.includes("portfolio") || lowerInput.includes("work") || lowerInput.includes("project")) {
                responseText = "Explore my portfolio:\n\n• 🛡️ Last War Companion: https://lastwarcompanion.bot.nu/\n• ⚔️ Tenkai Discord RPG: https://tenkai.bot.nu/\n• 15+ projects across Web Scraping, Automation, and Polyboard CAD design.\n\nCheck out the Featured Works section above!"
            } else if (lowerInput.includes("/hire") || lowerInput.includes("hire") || lowerInput.includes("ready") || lowerInput.includes("start")) {
                responseText = "Let's build something awesome! 🚀\n\nHead to the Contact section below, or DM me directly on Telegram at @Yassine_nagat0.\n\nI typically respond within 24 hours and can start most projects within a week."
            } else if (lowerInput.includes("price") || lowerInput.includes("cost") || lowerInput.includes("how much") || lowerInput.includes("pricing")) {
                responseText = "💰 My starting prices:\n\n• Discord / Telegram Bot: from $100\n• Web Scraping: from $150\n• Scraper + Bot Combo: from $250\n• Polyboard Design: from $200\n\nFinal price depends on complexity. DM me for a custom quote!"
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
        <section id="bot-demo" className="container py-24 sm:py-32 space-y-16">
            {/* Section Header */}
            <div className="flex flex-col items-center justify-center space-y-6 text-center">
                <div className="inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-sm font-medium text-muted-foreground">
                    <span className="relative flex h-2 w-2">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-purple-400 opacity-75" />
                        <span className="relative inline-flex h-2 w-2 rounded-full bg-purple-500" />
                    </span>
                    Bot Showcase & Interactive Demo
                </div>
                <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl bg-gradient-to-r from-foreground via-foreground/80 to-foreground/60 bg-clip-text text-transparent">
                    Discord Bots in Production
                </h2>
                <p className="max-w-[650px] text-muted-foreground text-lg">
                    Real bots serving active gaming communities and alliance leaders. Test the live platforms or chat with the assistant below.
                </p>
            </div>

            {/* ── Featured Bots Cards ── */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto w-full">
                {FEATURED_BOTS.map((bot, index) => {
                    const IconComponent = bot.Icon
                    return (
                        <motion.div
                            key={bot.id}
                            initial={{ opacity: 0, y: 25 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: index * 0.15 }}
                            viewport={{ once: true }}
                            className="group relative"
                        >
                            <div className="relative h-full overflow-hidden rounded-2xl border border-border/60 bg-card p-7 transition-all duration-300 hover:border-border hover:shadow-2xl hover:shadow-black/10 dark:hover:shadow-black/30 hover:-translate-y-1 flex flex-col justify-between">
                                {/* Ambient Glow */}
                                <div
                                    className="absolute -right-20 -top-20 h-48 w-48 rounded-full blur-3xl pointer-events-none opacity-20 group-hover:opacity-40 transition-opacity"
                                    style={{ background: bot.glow }}
                                />

                                <div>
                                    {/* Top Bar: Icon + Badge + Live Pill */}
                                    <div className="flex items-center justify-between mb-5">
                                        <div className={`rounded-xl bg-gradient-to-br ${bot.gradient} p-3 text-white shadow-lg`}>
                                            <IconComponent className="h-6 w-6" />
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-500">
                                                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                                                Live Production
                                            </span>
                                        </div>
                                    </div>

                                    {/* Sub-badge */}
                                    <span className="font-mono text-xs text-muted-foreground uppercase tracking-wider block mb-2">
                                        {bot.badge}
                                    </span>

                                    {/* Title */}
                                    <h3 className="text-2xl font-bold tracking-tight text-foreground mb-3 group-hover:text-primary transition-colors">
                                        {bot.name}
                                    </h3>

                                    {/* Description */}
                                    <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                                        {bot.description}
                                    </p>

                                    {/* Website Screenshot Preview */}
                                    <div className="relative aspect-video w-full overflow-hidden rounded-xl border border-border/50 mb-5 bg-muted/40 shadow-inner group-hover:border-border transition-colors">
                                        <Image
                                            src={bot.image}
                                            alt={`${bot.name} website preview`}
                                            fill
                                            className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                                            sizes="(max-width: 768px) 100vw, 50vw"
                                        />
                                    </div>

                                    {/* Feature Pills */}
                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {bot.stats.map((stat) => (
                                            <span
                                                key={stat}
                                                className="rounded-lg border border-border/60 bg-muted/50 px-2.5 py-1 text-xs font-medium text-foreground/80"
                                            >
                                                {stat}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* External Action Button */}
                                <div className="pt-4 border-t border-border/50">
                                    <a
                                        href={bot.url}
                                        target="_blank"
                                        rel="noreferrer"
                                        className={`inline-flex items-center justify-between w-full rounded-xl bg-gradient-to-r ${bot.gradient} px-5 py-3 text-sm font-semibold text-white shadow-md hover:shadow-lg transition-all hover:brightness-110`}
                                    >
                                        <span>Visit {bot.name}</span>
                                        <ExternalLink className="h-4 w-4" />
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    )
                })}
            </div>

            {/* ── Interactive Assistant Demo ── */}
            <div className="flex flex-col items-center w-full max-w-xl mx-auto pt-8">
                <div className="text-center mb-6">
                    <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                        <Sparkles className="h-3.5 w-3.5 text-purple-400" />
                        Interactive Bot Assistant
                    </div>
                    <p className="text-sm text-muted-foreground">
                        Test automated conversational flows. Type a query or click a quick action.
                    </p>
                </div>

                <div className="w-full rounded-2xl border bg-card shadow-2xl overflow-hidden">
                    {/* Chat Header */}
                    <div className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 px-5 py-3.5 flex items-center gap-3 text-white">
                        <div className="rounded-full bg-white/20 p-1.5">
                            <Bot className="h-5 w-5" />
                        </div>
                        <div>
                            <p className="font-semibold text-sm">Vibe Coder Assistant</p>
                            <p className="text-xs opacity-80">Online • Live Bot Simulation</p>
                        </div>
                        <button
                            onClick={() => setMessages(INITIAL_MESSAGES)}
                            className="ml-auto p-1.5 hover:bg-white/10 rounded-md transition-colors"
                            aria-label="Reset chat"
                            title="Reset conversation"
                        >
                            <RefreshCcw className="h-4 w-4" />
                        </button>
                    </div>

                    {/* Chat Messages */}
                    <div ref={scrollRef} className="h-[340px] overflow-y-auto p-4 space-y-3.5 bg-muted/20">
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
                    <div className="p-2.5 border-t bg-muted/30 flex items-center gap-1.5 overflow-x-auto no-scrollbar">
                        {QUICK_COMMANDS.map((cmd) => (
                            <button
                                key={cmd.cmd}
                                onClick={() => sendMessage(cmd.cmd)}
                                className="shrink-0 rounded-full border border-border/60 bg-background/80 px-3 py-1 text-xs font-medium text-muted-foreground hover:bg-accent hover:text-foreground transition-colors"
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
                            placeholder="Type /bots, /pricing, or a message..."
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

                {/* Bottom CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    viewport={{ once: true }}
                    className="mt-8 w-full"
                >
                    <div className="rounded-2xl border bg-gradient-to-r from-emerald-500/5 via-cyan-500/5 to-purple-500/5 p-6 text-center">
                        <p className="font-semibold text-foreground mb-1">Need a custom bot for your Discord or Telegram community?</p>
                        <p className="text-sm text-muted-foreground mb-4">From automated member verification to full interactive RPG mechanics — built fast, reliable, and 24/7 online.</p>
                        <Link
                            href="/#contact"
                            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-emerald-600 to-cyan-600 px-6 py-2.5 text-sm font-medium text-white shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5"
                        >
                            Order a Custom Bot
                            <ArrowRight className="h-4 w-4" />
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
