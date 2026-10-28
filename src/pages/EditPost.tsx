import { useParams, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { getPostBySlug } from '../utils/markdown-parser';

export default function EditPost() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const post = getPostBySlug(slug || '');
  const [form, setForm] = useState(post ? {
    title: post.frontmatter.title,
    excerpt: post.frontmatter.excerpt,
    date: post.frontmatter.date,
    author: post.frontmatter.author,
    category: post.frontmatter.category,
    imageUrl: post.frontmatter.imageUrl,
    content: post.content,
  } : {
    title: '', excerpt: '', date: '', author: '', category: '', imageUrl: '', content: '',
  });

  const handleSave = () => {
    // TODO: conectar a Neon para actualizar
    console.log('Actualizar post:', form);
    navigate(`/post/${slug}`);
  };

  if (!post) {
    return (
      <div className="mx-auto max-w-2xl px-4 pt-24 pb-24 md:pt-32 text-center">
        <h1 className="text-4xl font-display font-bold text-[#171717] dark:text-[#fafafa]">Post no encontrado</h1>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8 pt-24 pb-24 md:pt-32">
      <h1 className="font-display text-4xl md:text-5xl font-bold text-[#171717] dark:text-[#fafafa] mb-10 leading-tight tracking-tight">
        Editar artículo
      </h1>

      <form onSubmit={(e) => { e.preventDefault(); handleSave(); }} className="space-y-8">
        <div className="space-y-2">
          <label className="text-xs font-medium text-[#171717] dark:text-[#fafafa] uppercase tracking-wider">Título</label>
          <input
            className="w-full rounded border border-[#e5e5e5] dark:border-[#333333] bg-transparent px-4 py-2.5 text-sm text-[#171717] dark:text-[#fafafa] focus:border-[#171717] focus:ring-0 transition-colors"
            value={form.title}
            onChange={(e) => setForm({ ...form, title: e.target.value })}
          />
        </div>

        <div className="space-y-2">
          <label className="text-xs font-medium text-[#171717] dark:text-[#fafafa] uppercase tracking-wider">Extracto</label>
          <textarea
            rows={3}
            className="w-full rounded border border-[#e5e5e5] dark:border-[#333333] bg-transparent px-4 py-2.5 text-sm text-[#171717] dark:text-[#fafafa] focus:border-[#171717] focus:ring-0 transition-colors"
            value={form.excerpt}
            onChange={(e) => setForm({ ...form, excerpt: e.target.value })}
          />
        </div>

        <div className="space-y-2">
          <label className="text-xs font-medium text-[#171717] dark:text-[#fafafa] uppercase tracking-wider">Contenido (Markdown)</label>
          <textarea
            rows={20}
            className="w-full rounded border border-[#e5e5e5] dark:border-[#333333] bg-transparent px-4 py-2.5 text-sm text-[#171717] dark:text-[#fafafa] focus:border-[#171717] focus:ring-0 transition-colors font-mono"
            value={form.content}
            onChange={(e) => setForm({ ...form, content: e.target.value })}
          />
        </div>

        <button
          type="submit"
          className="flex items-center gap-2 px-6 py-3 rounded border border-[#171717] dark:border-[#fafafa] bg-[#171717] dark:bg-[#fafafa] text-[#ffffff] dark:text-[#171717] font-medium text-sm transition-colors hover:scale-[1.01] active:scale-95"
        >
          Guardar cambios
        </button>
      </form>
    </div>
  );
}