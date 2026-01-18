export interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  link: string;
  repo?: string;
}

export const projects: Project[] = [
  {
    id: "proj1",
    title: "E-Commerce Dashboard",
    description: "A comprehensive dashboard for managing products, orders, and analytics. Features real-time data updates.",
    tech: ["Next.js", "TypeScript", "Prisma", "PostgreSQL"],
    link: "https://demo-ecommerce.example.com",
    repo: "https://github.com/wandriputra/ecommerce-dashboard"
  },
  {
    id: "proj2",
    title: "Task Management API",
    description: "RESTful API for task management with authentication, rate limiting, and swagger documentation.",
    tech: ["Node.js", "Express", "MongoDB", "Redis"],
    link: "https://api-docs.example.com",
    repo: "https://github.com/wandriputra/task-api"
  },
  {
    id: "proj3",
    title: "Terminal Portfolio",
    description: "This very website! A terminal-style personal portfolio built with React and Tailwind.",
    tech: ["React", "Vite", "Tailwind CSS"],
    link: "https://wandriputra.github.io",
    repo: "https://github.com/wandriputra/wandriputra.github.io"
  }
];
