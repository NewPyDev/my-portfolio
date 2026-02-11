export function Footer() {
    return (
        <footer className="border-t py-6 md:py-0 bg-background">
            <div className="container flex flex-col items-center justify-between gap-4 md:h-16 md:flex-row">
                <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
                    Built by <span className="font-medium text-foreground">Click</span>. The Designer who Codes.
                </p>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <p>Polyboard & CorelDRAW | Bot Dev & Scraper</p>
                </div>
            </div>
        </footer>
    )
}
