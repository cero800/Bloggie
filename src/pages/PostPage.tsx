import { useParams, Navigate } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import { getPostBySlug } from "../utils/markdown-parser";

export default function PostPage() {
  const { slug } = useParams<{ slug: string }>();

  if (!slug) {
    return <Navigate to="/" replace />;
  }

  const post = getPostBySlug(slug);

  if (!post) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-20 text-center animate-fade-up">
        <h1 className="text-4xl font-display font-bold text-[#171717] dark:text-[#fafafa] mb-4">
          Post Not Found
        </h1>
        <p className="text-[#737373] dark:text-[#a3a3a3]">
          The article you are looking for does not exist.
        </p>
      </div>
    );
  }

  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 pt-32 pb-16 md:pt-36 animate-fade-up">
      {/* Post Header */}
      <header className="mb-12 text-center">
        {post.frontmatter.category && (
          <span className="text-[11px] font-semibold tracking-widest uppercase text-[#737373] dark:text-[#a3a3a3] mb-4 block">
            {post.frontmatter.category}
          </span>
        )}
        <h1 className="text-4xl md:text-5xl font-display font-bold text-[#171717] dark:text-[#fafafa] mb-6 leading-tight tracking-tight">
          {post.frontmatter.title}
        </h1>
        <div className="flex items-center justify-center space-x-4 text-sm text-[#a3a3a3] dark:text-[#737373]">
          <div className="flex items-center gap-3">
            {post.frontmatter.authorImage && (
              <img
                src={post.frontmatter.authorImage}
                alt={post.frontmatter.author}
                className="h-8 w-8 rounded-full object-cover border border-[#e5e5e5] dark:border-[#333333]"
              />
            )}
            <span className="font-medium text-[#171717] dark:text-[#fafafa]">
              {post.frontmatter.author}
            </span>
          </div>
          <span>•</span>
          <time dateTime={post.frontmatter.date}>
            {new Date(post.frontmatter.date).toLocaleDateString("es-ES", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </time>
        </div>
      </header>

      {/* Featured Image - grayscale con hover */}
      {post.frontmatter.imageUrl && (
        <div className="mb-12 rounded-2xl overflow-hidden border border-[#e5e5e5] dark:border-[#333333]">
          <img
            src={post.frontmatter.imageUrl}
            alt={post.frontmatter.title}
            className="w-full h-auto object-cover max-h-[300px] md:max-h-[400px] aspect-video sm:aspect-auto transition-all duration-500 hover:grayscale-0"
          />
        </div>
      )}

      {/* Markdown Content - líneas finas */}
      <div className="prose prose-lg mx-auto text-[#171717] dark:text-[#fafafa]">
        <ReactMarkdown
          components={{
            code({ node, inline, className, children, ...props }: any) {
              const match = /language-(\w+)/.exec(className || "");
              return !inline && match ? (
                <SyntaxHighlighter
                  {...props}
                  style={vscDarkPlus}
                  language={match[1]}
                  PreTag="div"
                  className="rounded-xl border border-[#e5e5e5] dark:border-[#333333] my-6"
                >
                  {String(children).replace(/\n$/, "")}
                </SyntaxHighlighter>
              ) : (
                <code
                  {...props}
                  className={`${className} bg-[#f5f5f5] dark:bg-[#242424] rounded px-1.5 py-0.5 text-[#171717] dark:text-[#fafafa]`}
                >
                  {children}
                </code>
              );
            },
          }}
        >
          {post.content}
        </ReactMarkdown>
      </div>
    </article>
  );
}