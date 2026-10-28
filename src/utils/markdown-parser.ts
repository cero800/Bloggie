// Custom frontmatter parser to avoid Node.js buffer errors in the browser
// Usa gray-matter si está disponible, fallback a parser manual

// @ts-ignore: gray-matter no tiene tipos integrados perfectamente en tsconfig estricto
import matter from 'gray-matter';

export interface PostFrontmatter {
  title: string;
  excerpt: string;
  date: string;
  author: string;
  authorImage?: string;
  imageUrl?: string;
  category?: string;
}

export interface Post {
  slug: string;
  frontmatter: PostFrontmatter;
  content: string;
  id?: string;
  readingTime?: number;
}

const postFiles = import.meta.glob('/content/*.md', { query: '?raw', import: 'default', eager: true });

export function getAllPosts(): Post[] {
  const posts: Post[] = [];

  for (const path in postFiles) {
    // Extract slug from path, e.g., '/content/hello-world.md' -> 'hello-world'
    const slug = path.split('/').pop()?.replace(/\.md$/, '') || '';

    const rawContent = postFiles[path] as string;

    // Parse frontmatter con gray-matter
    let frontmatter: Record<string, string> = {};
    let content = rawContent;

    try {
      const parsed = matter(rawContent);
      frontmatter = parsed.data as Record<string, string>;
      content = parsed.content;
    } catch {
      // Fallback a parser manual
      const match = rawContent.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
      if (match) {
        const yamlStr = match[1];
        content = match[2];
        yamlStr.split('\n').forEach(line => {
          const colonIdx = line.indexOf(':');
          if (colonIdx > -1) {
            const key = line.slice(0, colonIdx).trim();
            let value = line.slice(colonIdx + 1).trim();
            if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))) {
              value = value.slice(1, -1);
            }
            frontmatter[key] = value;
          }
        });
      }
    }

    posts.push({
      slug,
      frontmatter: frontmatter as unknown as PostFrontmatter,
      content,
    });
  }

  // Sort posts by date descending
  return posts.sort((a, b) => new Date(b.frontmatter.date).getTime() - new Date(a.frontmatter.date).getTime());
}

export function getPostBySlug(slug: string): Post | undefined {
  const posts = getAllPosts();
  return posts.find((post) => post.slug === slug);
}