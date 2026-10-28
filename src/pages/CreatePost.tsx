import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function CreatePost() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    slug: '',
    title: '',
    excerpt: '',
    date: '',
    author: 'Admin',
    category: '',
    imageUrl: '',
    content: '',
  });

  const handleSave = () => {
    // TODO: conectar a Neon / clerk para persistir
    console.log('Nuevo post:', form);
    navigate(`/post/${form.slug}`);
  };

  return (
    <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8 pt-24 pb-24 md:pt-32">
      <h1 className="font-display text-4xl md:text-5xl font-bold text-[#171717] dark:text-[#fafafa] mb-10 leading-tight tracking-tight">
        Nuevo artículo
      </h1>

      <form onSubmit={(e) => { e.preventDefault(); handleSave(); }} className="space-y-8">
        <div className="space-y-2">
          <label className="text-xs font-medium text-[#171717] dark:text-[#fafafa] uppercase tracking-wider">Título</label>
          <input
            className="w-full rounded border border-[#e5e5e5] dark:border-[#333333] bg-transparent px-4 py-2.5 text-sm text-[#171717] dark:text-[#fafafa] focus:border-[#171717] focus:ring-0 transition-colors"
            placeholder="Título del post"
            value={form.title}
            onChange={(e) => setForm({ ...form, title: e.target.value })}
          />
        </div>

        <div className="space-y-2">
          <label className="text-xs font-medium text-[#171717] dark:text-[#fafafa] uppercase tracking-wider">Slug</label>
          <input
            className="w-full rounded border border-[#e5e5e5] dark:border-[#333333] bg-transparent px-4 py-2.5 text-sm text-[#171717] dark:text-[#fafafa] focus:border-[#171717] focus:ring-0 transition-colors"
            placeholder="mi-nuevo-post"
            value={form.slug}
            onChange={(e) => setForm({ ...form, slug: e.target.value })}
          />
        </div>

        <div className="space-y-2">
          <label className="text-xs font-medium text-[#171717] dark:text-[#fafafa] uppercase tracking-wider">Extracto</label>
          <textarea
            rows={3}
            className="w-full rounded border border-[#e5e5e5] dark:border-[#333333] bg-transparent px-4 py-2.5 text-sm text-[#171717] dark:text-[#fafafa] focus:border-[#171717] focus:ring-0 transition-colors"
            placeholder="Breve resumen..."
            value={form.excerpt}
            onChange={(e) => setForm({ ...form, excerpt: e.target.value })}
          />
        </div>

        <div className="grid grid-cols-2 gap-8">
          <div className="space-y-2">
            <label className="text-xs font-medium text-[#171717] dark:text-[#fafafa] uppercase tracking-wider">Autor</label>
            <input
              className="w-full rounded border border-[#e5e5e5] dark:border-[#333333] bg-transparent px-4 py-2.5 text-sm text-[#171717] dark:text-[#fafafa] focus:border-[#171717] focus:ring-0 transition-colors"
              value={form.author}
              onChange={(e) => setForm({ ...form, author: e.target.value })}
            />
          </div>
          <div className="space-y-2">
            <label className="text-xs font-medium text-[#171717] dark:text-[#fafafa] uppercase tracking-wider">Categoría</label>
            <input
              className="w-full rounded border border-[#e5e5e5] dark:border-[#333333] bg-transparent px-4 py-2.5 text-sm text-[#171717] dark:text-[#fafafa] focus:border-[#171717] focus:ring-0 transition-colors"
              placeholder="Tecnología"
              value={form.category}
              onChange={(e) => setForm({ ...form, category: e.target.value })}
            />
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-xs font-medium text-[#171717] dark:text-[#fafafa] uppercase tracking-wider">Contenido (Markdown)</label>
          <textarea
            rows={20}
            className="w-full rounded border border-[#e5e5e5] dark:border-[#333333] bg-transparent px-4 py-2.5 text-sm text-[#171717] dark:text-[#fafafa] focus:border-[#171717] focus:ring-0 transition-colors font-mono"
            placeholder="# Título\n\nTu contenido aquí..."
            value={form.content}
            onChange={(e) => setForm({ ...form, content: e.target.value })}
          />
        </div>

        <button
          type="submit"
          className="flex items-center gap-2 px-6 py-3 rounded border border-[#171717] dark:border-[#fafafa] bg-[#171717] dark:bg-[#fafafa] text-[#ffffff] dark:text-[#171717] font-medium text-sm transition-colors hover:scale-[1.01] active:scale-95"
        >
          Publicar artículo
        </button>
      </form>
    </div>
  );
}