import { Project } from "@/lib/types";

export const projects: Project[] = [
    {
        id: "polyboard-kitchen",
        title: "Modern Parametric Kitchen",
        description: "Complete manufacturing-ready kitchen design. Includes cut lists and CNC files generated via Polyboard.",
        category: "Design",
        tags: ["Polyboard", "CNC", "Interior"],
        imageUrl: "/kitchen-placeholder.jpg",
    },
    {
        id: "telegram-scraper-bot",
        title: "Crypto Signal Scraper Bot",
        description: "High-speed Telegram bot that scrapes signals from 50+ channels and aggregates them in real-time.",
        category: "Code",
        tags: ["Telegram API", "Python", "Scraping"],
        repoUrl: "https://github.com",
    },
    {
        id: "corel-vector-art",
        title: "Technical Machinery Illustration",
        description: "High-precision vector illustration for an industrial manual, created in CorelDRAW.",
        category: "Design",
        tags: ["CorelDRAW", "Vector", "Illustration"],
        imageUrl: "/machinery-placeholder.jpg",
    },
    {
        id: "discord-mod-bot",
        title: "Community Guard Bot",
        description: "AI-powered Discord bot for moderation, welcome messages, and spam filtering.",
        category: "Code",
        tags: ["Discord.js", "AI", "Node.js"],
        repoUrl: "https://github.com",
    },
    {
        id: "polyboard-closet",
        title: "Walk-in Closet System",
        description: "Custom closet design with optimized material usage reports.",
        category: "Design",
        tags: ["Polyboard", "Furniture", "Layout"],
        imageUrl: "/closet-placeholder.jpg",
    },
    {
        id: "linkedin-scraper",
        title: "LinkedIn Lead Gen Scraper",
        description: "Undetectable scraper for extracting leads based on complex criteria. Handles rotation and captchas.",
        category: "Code",
        tags: ["Selenium", "Puppeteer", "Vibe Code"],
        repoUrl: "https://github.com",
    },
];
