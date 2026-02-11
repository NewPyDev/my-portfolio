import { Navbar } from "@/components/sections/navbar"
import { Gallery } from "@/components/sections/gallery"
import { Footer } from "@/components/sections/footer"

export default function ProjectsPage() {
    return (
        <main className="flex min-h-screen flex-col">
            <Navbar />
            <div className="pt-20">
                <Gallery />
            </div>
            <div className="flex-1" />
            <Footer />
        </main>
    )
}
