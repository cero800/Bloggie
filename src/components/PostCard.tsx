import { Link } from 'react-router-dom';
import type { Post } from '../utils/markdown-parser';

interface PostCardProps {
  post: Post;
  index: number;
}

export default function PostCard({ post, index }: PostCardProps) {
  const { title, excerpt, date, author, authorImage, imageUrl } = post.frontmatter;

  const formattedDate = new Intl.DateTimeFormat('es-ES', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  }).format(new Date(date));

  return (
    <article
      id={`post-card-${post.slug}`}
      className="group relative flex flex-col rounded-2xl border border-[#e5e5e5] dark:border-[#333333] bg-[#fafafa] dark:bg-[#171717] backdrop-blur-sm transition-all duration-500 hover:border-[#171717] dark:hover:border-[#fafafa] hover:shadow-[0_0_12px_rgba(23,23,23,0.1)]"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {/* Top accent bar - 1px line */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#e5e5e5] to-transparent transition-all duration-500 group-hover:via-[#171717] z-10" />

      {/* Post Image - grayscale con hover */}
      {imageUrl && (
        <div className="relative h-48 w-full overflow-hidden rounded-t-2xl">
          <img
            src={imageUrl}
            alt={title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      )}

      <div className="flex flex-1 flex-col p-6">
        {/* Title - líneas finas */}
        <h3 className="text-lg font-bold font-display leading-snug text-[#171717] dark:text-[#fafafa] transition-colors duration-300 group-hover:text-[#fafafa]">
          <Link to={`/post/${post.slug}`} className="after:absolute after:inset-0">
            {title}
          </Link>
        </h3>

        {/* Excerpt */}
        <p className="mt-3 flex-1 text-sm leading-relaxed text-[#737373] dark:text-[#a3a3a3]">
          {excerpt}
        </p>

        {/* Meta row - líneas finas */}
        <div className="mt-6 flex items-center justify-between border-t border-[#e5e5e5] dark:border-[#333333] pt-4">
          <div className="flex items-center gap-2">
            <div className="flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-[#e5e5e5] to-[#171717] dark:from-[#333333] dark:to-[#fafafa] text-[10px] font-bold text-[#fafafa] dark:text-[#171717] overflow-hidden">
              {authorImage ? (
                <img src={authorImage} alt={author} className="h-full w-full object-cover" />
              ) : (
                author
                  .split(' ')
                  .map((n: string) => n[0])
                  .join('')
              )}
            </div>
            <span className="text-xs font-medium text-[#a3a3a3] dark:text-[#fafafa]">
              {author}
            </span>
          </div>

          <div className="flex items-center gap-3 text-xs text-[#737373] dark:text-[#fafafa]">
            <time dateTime={date}>{formattedDate}</time>
          </div>
        </div>
      </div>

      {/* Hover glow - línea fina que se expande */}
      <div className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-gradient-to-b from-[#171717]/50 to-transparent" />
    </article>
  );
}