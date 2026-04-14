"use client"

import { motion } from "framer-motion"
import { testimonials } from "@/lib/data"
import { Star, Quote } from "lucide-react"

export function Testimonials() {
    return (
        <section id="testimonials" className="py-24 sm:py-32">
            <div className="container space-y-16">
                {/* Section Header */}
                <div className="flex flex-col items-center justify-center space-y-6 text-center">
                    <div className="inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-sm font-medium text-muted-foreground">
                        <span className="relative flex h-2 w-2">
                            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber-400 opacity-75" />
                            <span className="relative inline-flex h-2 w-2 rounded-full bg-amber-500" />
                        </span>
                        Testimonials
                    </div>
                    <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl bg-gradient-to-r from-foreground via-foreground/80 to-foreground/60 bg-clip-text text-transparent">
                        What Clients Say
                    </h2>
                    <p className="max-w-[600px] text-muted-foreground text-lg">
                        Don&apos;t take my word for it — here&apos;s what people I&apos;ve worked with have to say.
                    </p>
                </div>

                {/* Testimonial Cards */}
                <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={testimonial.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="group relative"
                        >
                            <div className="relative h-full overflow-hidden rounded-2xl border border-border/50 bg-card p-6 transition-all duration-300 hover:border-border hover:shadow-xl hover:shadow-black/5 dark:hover:shadow-black/20">
                                {/* Quote Icon */}
                                <div className="mb-4">
                                    <Quote className="h-8 w-8 text-muted-foreground/20" />
                                </div>

                                {/* Stars */}
                                <div className="mb-4 flex gap-0.5">
                                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                                        <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                                    ))}
                                </div>

                                {/* Quote Text */}
                                <blockquote className="mb-6 text-sm text-foreground/80 leading-relaxed">
                                    &ldquo;{testimonial.quote}&rdquo;
                                </blockquote>

                                {/* Author */}
                                <div className="flex items-center gap-3 border-t pt-4">
                                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-emerald-500 to-cyan-500 text-white text-sm font-bold">
                                        {testimonial.initials}
                                    </div>
                                    <div>
                                        <p className="font-semibold text-sm text-foreground">{testimonial.name}</p>
                                        <p className="text-xs text-muted-foreground">{testimonial.role} • {testimonial.location}</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
