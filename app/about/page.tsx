import { Navbar } from "@/components/sections/navbar"
import { About } from "@/components/sections/about"
import { Footer } from "@/components/sections/footer"

export default function AboutPage() {
    return (
        <main className="flex min-h-screen flex-col">
            <Navbar />
            <div className="pt-8">
                <About />
                {/* Services CTA */}
                <div className="container pb-16">
                    <div className="rounded-2xl border bg-gradient-to-r from-violet-500/5 via-purple-500/5 to-indigo-500/5 p-8 text-center">
                        <p className="text-lg font-semibold text-foreground mb-2">See What I Build</p>
                        <p className="text-sm text-muted-foreground mb-4">Check out my services and pricing — from web scraping to furniture design.</p>
                        <a
                            href="/#services"
                            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-violet-600 to-indigo-600 px-6 py-2.5 text-sm font-medium text-white shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5"
                        >
                            View Services →
                        </a>
                    </div>
                </div>
            </div>
            <div className="flex-1" />
            <Footer />
        </main>
    )
}
