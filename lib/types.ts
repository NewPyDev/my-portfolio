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
