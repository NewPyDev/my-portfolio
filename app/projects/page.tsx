import { Navbar } from "@/components/sections/navbar"
import { Gallery } from "@/components/sections/gallery"
import { Testimonials } from "@/components/sections/testimonials"
import { Footer } from "@/components/sections/footer"

export default function ProjectsPage() {
    return (
        <main className="flex min-h-screen flex-col">
            <Navbar />
            <div className="pt-8">
                {/* CTA Banner */}
                <div className="container">
                    <div className="rounded-2xl border bg-gradient-to-r from-emerald-500/5 via-cyan-500/5 to-blue-500/5 p-8 text-center mb-8">
                        <p className="text-lg font-semibold text-foreground mb-2">Need something built?</p>
                        <p className="text-sm text-muted-foreground mb-4">From web scrapers to custom bots — I ship fast and reliable.</p>
                        <a
                            href="/#contact"
                            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-emerald-600 to-cyan-600 px-6 py-2.5 text-sm font-medium text-white shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5"
                        >
                            Get in Touch →
                        </a>
                    </div>
                </div>
                <Gallery />
                <Testimonials />
            </div>
            <div className="flex-1" />
            <Footer />
        </main>
    )
}
