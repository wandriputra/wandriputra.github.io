export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  description: string;
  content: string;
}

export const parseFrontmatter = (fileContent: string): { data: any; content: string } => {
  const frontmatterRegex = /---\s*([\s\S]*?)\s*---/;
  const match = frontmatterRegex.exec(fileContent);
  const data: any = {};
  let content = fileContent;

  if (match) {
    const frontmatterBlock = match[1];
    content = fileContent.replace(match[0], '').trim();
    const frontmatterLines = frontmatterBlock.split('\n');
    frontmatterLines.forEach((line) => {
      const [key, ...value] = line.split(':');
      if (key && value) {
        data[key.trim()] = value.join(':').trim().replace(/^['"](.*)['"]$/, '$1');
      }
    });
  }

  return { data, content };
};

export const getBlogs = async (): Promise<BlogPost[]> => {
  const modules = import.meta.glob('../content/blog/*.md', { query: '?raw', import: 'default' });
  const blogs: BlogPost[] = [];

  for (const path in modules) {
    const rawContent = await modules[path]() as string;
    const { data, content } = parseFrontmatter(rawContent);
    const slug = path.split('/').pop()?.replace('.md', '') || '';
    
    blogs.push({
      slug,
      title: data.title || 'Untitled',
      date: data.date || '',
      description: data.description || '',
      content
    });
  }

  return blogs.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
};
