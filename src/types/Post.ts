/**
 * Represents a single blog post in Bloggie.
 * Sincronizado con utils/markdown-parser.ts y pages/*.tsx
 */
export interface Post {
  /** Unique identifier for the post (slug) */
  id: string;

  /** Title of the blog post */
  title: string;

  /** Short excerpt / summary shown on cards */
  excerpt: string;

  /** Publication date in ISO 8601 format (e.g. "2026-05-10") */
  date: string;

  /** Author information */
  author: Author;

  /** Author image URL */
  authorImage?: string;

  /** Optional cover image URL */
  coverImage?: string;

  /** Category / tag */
  category?: string;

  /** Array of tag labels */
  tags: string[];

  /** Estimated reading time in minutes */
  readingTime?: number;
}

/**
 * Author metadata attached to a Post.
 */
export interface Author {
  name: string;
  avatar?: string;
}
