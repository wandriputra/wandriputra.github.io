---
title: "Building My Portfolio with Gemini CLI & VS Code Theme"
date: "2026-01-18"
description: "A look into the process of building this interactive portfolio using AI-driven CLI tools and why I chose the VS Code aesthetic."
---

# Building My Portfolio with Gemini CLI

Building a personal portfolio is often a long process of indecision. However, this time, I decided to take a different approach by collaborating with **Gemini CLI** to build a unique, developer-centric experience.

## Why the VS Code Theme?

As a fullstack developer, the code editor is where I spend most of my time. I wanted my portfolio to reflect that environment. It's not just a design choice; it's a statement of identity. 

The VS Code theme provides:
- **Familiarity**: Other developers and recruiters immediately recognize the layout.
- **Organization**: The sidebar/explorer metaphor is perfect for organizing "About", "Projects", and "Blog" sections.
- **Technically Impressive**: Implementing a responsive, app-like UI in a browser shows attention to detail.

## The Experience with Gemini CLI

Working with an AI-driven CLI agent felt like having a pair-programmer who never gets tired. We went through several iterations:
1.  **Terminal Theme**: Initial concept, very raw and geeky.
2.  **Glassmorphism**: Sleek and modern, but perhaps too "generic".
3.  **Bento Grid**: Very organized, great for high-level info.
4.  **VS Code Theme**: The final winner.

The most impressive part was how the CLI handled complex tasks like:
- Setting up **Vite + React + Tailwind**.
- Implementing **Markdown parsing** for both the blog and the Home page (`README.md`).
- Ensuring **Mobile Responsiveness** for a layout that is inherently designed for desktop.

## Technical Deep Dive

The site uses `import.meta.glob` to fetch Markdown files at build time, meaning it's blazing fast and easy to maintain. No database, no complex CMS—just pure Markdown files.

```typescript
// How we fetch the blogs
export const getBlogs = async (): Promise<BlogPost[]> => {
  const modules = import.meta.glob('../content/blog/*.md', { query: '?raw', import: 'default' });
  // ... parsing logic
};
```

## Conclusion

This portfolio is a testament to how AI can accelerate development. Instead of fighting with CSS for hours, I focused on the **concept and user experience**, while Gemini CLI handled the heavy lifting of the implementation.

Feel free to explore the "files" in the sidebar to learn more about my work!
