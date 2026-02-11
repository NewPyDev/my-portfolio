import { Navbar } from "@/components/sections/navbar"
import { About } from "@/components/sections/about"
import { Footer } from "@/components/sections/footer"

export default function AboutPage() {
    return (
        <main className="flex min-h-screen flex-col">
            <Navbar />
            <div className="pt-20">
                <About />
            </div>
            <div className="flex-1" />
            <Footer />
        </main>
    )
}
