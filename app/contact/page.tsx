import { Navbar } from "@/components/sections/navbar"
import { Contact } from "@/components/sections/contact"
import { Footer } from "@/components/sections/footer"

export default function ContactPage() {
    return (
        <main className="flex min-h-screen flex-col">
            <Navbar />
            <div className="pt-20">
                <Contact />
            </div>
            <div className="flex-1" />
            <Footer />
        </main>
    )
}
