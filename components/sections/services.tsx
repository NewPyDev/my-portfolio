"use client"

import { motion } from "framer-motion"
import { services } from "@/lib/data"
import { Database, MessageSquare, Zap, Layers, ArrowRight } from "lucide-react"

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
    Database,
    MessageSquare,
    Zap,
    Layers,
}

export function Services() {
    return (
        <section id="services" className="py-24 sm:py-32">
            <div className="container space-y-16">
                {/* Section Header */}
                <div className="flex flex-col items-center justify-center space-y-6 text-center">
                    <div className="inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-sm font-medium text-muted-foreground">
                        <span className="relative flex h-2 w-2">
                            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-75" />
                            <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-500" />
                        </span>
                        Services
                    </div>
                    <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl bg-gradient-to-r from-foreground via-foreground/80 to-foreground/60 bg-clip-text text-transparent">
                        What I Build
                    </h2>
                    <p className="max-w-[600px] text-muted-foreground text-lg">
                        From automated data pipelines to custom bots and precision furniture design — here&apos;s what I can do for you.
                    </p>
                </div>

                {/* Service Cards Grid */}
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {services.map((service, index) => {
                        const Icon = iconMap[service.icon] || Database
                        return (
                            <motion.div
                                key={service.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="group relative"
                            >
                                <div className="relative h-full overflow-hidden rounded-2xl border border-border/50 bg-card p-6 transition-all duration-300 hover:border-border hover:shadow-xl hover:shadow-black/5 dark:hover:shadow-black/20 hover:-translate-y-1">
                                    {/* Gradient Glow on Hover */}
                                    <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500 rounded-2xl`} />

                                    {/* Icon */}
                                    <div className={`relative mb-5 inline-flex rounded-xl bg-gradient-to-br ${service.gradient} p-3 text-white shadow-lg`}>
                                        <Icon className="h-6 w-6" />
                                    </div>

                                    {/* Price Badge */}
                                    <div className="mb-4">
                                        <span className={`inline-flex items-center rounded-full bg-gradient-to-r ${service.gradient} px-3 py-1 text-xs font-bold text-white`}>
                                            {service.price}
                                        </span>
                                    </div>

                                    {/* Title */}
                                    <h3 className="relative mb-2 text-lg font-bold text-foreground">
                                        {service.title}
                                    </h3>

                                    {/* Description */}
                                    <p className="relative mb-5 text-sm text-muted-foreground leading-relaxed">
                                        {service.description}
                                    </p>

                                    {/* Features */}
                                    <ul className="relative mb-6 space-y-2">
                                        {service.features.map((feature) => (
                                            <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                                                <span className={`h-1.5 w-1.5 rounded-full bg-gradient-to-r ${service.gradient} shrink-0`} />
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>

                                    {/* CTA */}
                                    <a
                                        href="#contact"
                                        className={`relative inline-flex items-center gap-2 text-sm font-semibold transition-all duration-300 group-hover:gap-3`}
                                    >
                                        <span className={`bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent`}>
                                            Get Started
                                        </span>
                                        <ArrowRight className={`h-4 w-4 text-muted-foreground group-hover:text-foreground transition-colors`} />
                                    </a>
                                </div>
                            </motion.div>
                        )
                    })}
                </div>

                {/* Bottom CTA */}
                <div className="text-center">
                    <p className="text-sm text-muted-foreground">
                        Need something custom? Every project is different. <a href="#contact" className="font-medium text-foreground underline underline-offset-4 hover:text-primary transition-colors">Let&apos;s talk about yours →</a>
                    </p>
                </div>
            </div>
        </section>
    )
}
