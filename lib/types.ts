export type Category = "Design" | "Code";

export interface Project {
    id: string;
    title: string;
    description: string;
    category: Category;
    tags: string[];
    imageUrl?: string;
    repoUrl?: string;
    demoUrl?: string;
}

export interface Service {
    id: string;
    title: string;
    description: string;
    icon: string;
    price: string;
    features: string[];
    gradient: string;
}

export interface Testimonial {
    id: string;
    name: string;
    role: string;
    location: string;
    quote: string;
    rating: number;
    initials: string;
}
