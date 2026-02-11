
"use client"

import React, { createContext, useContext, useState, useEffect } from "react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"

type SectionId = "hero" | "about" | "gallery" | "bot-demo" | "contact"

interface ScrollBackgroundContextType {
    activeSection: SectionId
    setActiveSection: (id: SectionId) => void
}

const ScrollBackgroundContext = createContext<ScrollBackgroundContextType | undefined>(undefined)

export function useScrollBackground() {
    const context = useContext(ScrollBackgroundContext)
    if (!context) {
        throw new Error("useScrollBackground must be used within a ScrollBackgroundProvider")
    }
    return context
}

export function ScrollBackgroundProvider({ children }: { children: React.ReactNode }) {
    const [activeSection, setActiveSection] = useState<SectionId>("hero")

    return (
        <ScrollBackgroundContext.Provider value={{ activeSection, setActiveSection }}>
            {children}
            <DynamicBackground activeSection={activeSection} />
        </ScrollBackgroundContext.Provider>
    )
}

const backgrounds: Record<SectionId, string> = {
    hero: "linear-gradient(to bottom, transparent, transparent)", // Hero has its own background
    about: "linear-gradient(to bottom right, hsl(var(--background)), hsl(var(--primary) / 0.05))",
    gallery: "radial-gradient(circle at center, hsla(110, 80%, 40%, 0.15) 0%, transparent 70%)", // Greenish for creative
    "bot-demo": "radial-gradient(circle at center, hsla(260, 80%, 40%, 0.15) 0%, transparent 70%)", // Purple/Blue for tech
    contact: "linear-gradient(to top left, hsl(var(--background)), hsl(var(--destructive) / 0.05))",
}

function DynamicBackground({ activeSection }: { activeSection: SectionId }) {
    return (
        <motion.div
            className="fixed inset-0 -z-50 pointer-events-none transition-colors duration-1000"
            initial={false}
            animate={{ background: backgrounds[activeSection] }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
        />
    )
}

export function SectionObserver({
    id,
    children,
    className
}: {
    id: SectionId
    children: React.ReactNode
    className?: string
}) {
    const { setActiveSection } = useScrollBackground()
    const ref = React.useRef(null)
    const isInView = useInView(ref, { margin: "-50% 0px -50% 0px" }) // Trigger when center of section passes center of screen

    useEffect(() => {
        if (isInView) {
            setActiveSection(id)
        }
    }, [isInView, id, setActiveSection])

    return (
        <div ref={ref} id={id} className={className}>
            {children}
        </div>
    )
}
