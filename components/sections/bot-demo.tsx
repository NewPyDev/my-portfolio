"use client"

import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { Send, Bot, RefreshCcw } from "lucide-react"

type Message = {
    id: string;
    text: string;
    sender: "bot" | "user";
    timestamp: Date;
}

const INITIAL_MESSAGES: Message[] = [
    { id: "1", text: "Hello! I'm the Vibe Coder Assistant. 🤖", sender: "bot", timestamp: new Date() },
    { id: "2", text: "I can help you build Telegram Bots, Discord Bots, or Scrapers. Type /help to see what I can do!", sender: "bot", timestamp: new Date() },
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
            let responseText = "I'm not sure about that command. Try /help."
            const lowerInput = userMsg.text.toLowerCase()

            if (lowerInput.includes("/help") || lowerInput.includes("help") || lowerInput.includes("hi")) {
                responseText = "Available commands:\n/portfolio - See my work\n/contact - Get in touch\n/scraper - Web scraping services\n/bot - Bot development services"
            } else if (lowerInput.includes("/contact") || lowerInput.includes("hire")) {
                responseText = "You can DM me on Telegram at @Yassine_nagat0!"
            } else if (lowerInput.includes("/portfolio")) {
                responseText = "Scroll up to see the Projects Gallery! I specialize in Polyboard, CorelDRAW, and Bot Dev."
            } else if (lowerInput.includes("/bot")) {
                responseText = "I build custom Telegram & Discord bots using Python (Aiogram, Discord.py). High concurrency, database integration, and AI features included."
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
                <h2 className="text-3xl font-bold sm:text-4xl">Chat with the Portfolio</h2>
                <p className="mt-4 text-muted-foreground">
                    Experience the &quot;Vibe Coder&quot; workflow. Try typing <code>/help</code>.
                </p>
            </div>

            <div className="w-full max-w-md rounded-xl border bg-card shadow-xl overflow-hidden">
                {/* Chat Header */}
                <div className="bg-primary px-4 py-3 flex items-center gap-3 text-primary-foreground">
                    <div className="rounded-full bg-primary-foreground/20 p-1.5">
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
                            <div className={`max-w-[80%] rounded-lg px-4 py-2 text-sm whitespace-pre-wrap ${msg.sender === "user" ? "bg-primary text-primary-foreground" : "bg-muted border"}`}>
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
        </section>
    )
}
