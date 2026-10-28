import { Link } from 'react-router-dom';
import { getAllPosts } from '../utils/markdown-parser';

export default function Feed() {
  const posts = getAllPosts();
  return (
    <section className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 pt-28 pb-24 md:pt-36">
      <header className="mb-12 border-b border-[#e5e5e5] pb-8 dark:border-[#333333]">
        <h1 className="font-display text-5xl md:text-7xl font-bold tracking-tighter text-[#171717] dark:text-[#fafafa] leading-[0.95]">
          Feed
        </h1>
        <p className="mt-4 max-w-xl text-base text-[#737373] dark:text-[#a3a3a3] leading-relaxed">
          Artículos ordenados cronológicamente. Línea editorial minimal, sin distracciones.
        </p>
      </header>

      <div className="stagger flex flex-col gap-0">
        {posts.map((post) => (
          <article
            key={post.slug}
            className="group relative flex flex-col md:flex-row md:items-baseline gap-3 md:gap-8 py-7 border-t border-[#e5e5e5] dark:border-[#333333] transition-colors hover:border-[#171717] dark:hover:border-[#fafafa]"
          >
            <time className="shrink-0 text-xs font-medium tracking-widest uppercase text-[#a3a3a3] w-24">
              {new Date(post.frontmatter.date).toLocaleDateString('es-ES', { day: 'numeric', month: 'short', year: 'numeric' })}
            </time>
            <div className="flex-1">
              <Link
                to={`/post/${post.slug}`}
                className="block font-display text-2xl md:text-3xl font-bold text-[#171717] dark:text-[#fafafa] leading-tight tracking-tight group-hover:underline underline-offset-[3px] decoration-1"
              >
                {post.frontmatter.title}
              </Link>
              <p className="mt-2 text-sm text-[#737373] dark:text-[#a3a3a3] leading-relaxed max-w-2xl">
                {post.frontmatter.excerpt}
              </p>
              <div className="mt-3 text-[11px] uppercase tracking-widest text-[#a3a3a3]">
                {post.frontmatter.author} · {post.frontmatter.category}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
