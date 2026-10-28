import PostCard from '../components/PostCard';
import { getAllPosts } from '../utils/markdown-parser';

export default function Home() {
  const posts = getAllPosts();
  return (
    <>
      {/* HERO SECTION - minimalista B&W */}
      <section id="hero" className="relative w-full px-4 sm:px-8 lg:px-12 pt-40 pb-32 md:pt-48 md:pb-48 flex flex-col items-center">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-5xl font-display font-extrabold text-[#171717] dark:text-[#fafafa] leading-[1.05] tracking-tighter sm:text-6xl md:text-7xl lg:text-8xl">
            <span className="text-[#737373] dark:text-[#a3a3a3]">Bienvenido</span><br />
            <span className="block">a Bloggie</span>
          </h1>

          <p className="mt-10 mx-auto max-w-2xl text-lg sm:text-xl leading-relaxed text-[#737373] dark:text-[#a3a3a3]">
            Espacio editorial minimal. Arte, tecnología y gestión en líneas finas.
          </p>
        </div>
      </section>

      {/* POSTS SECTION */}
      <section id="posts" className="relative w-full px-4 sm:px-8 lg:px-12 pt-24 pb-32 md:pt-32 md:pb-48">
        <div className="w-full max-w-7xl mx-auto">
          <div className="flex flex-col items-start gap-6 mb-8 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="text-4xl font-display font-bold text-[#171717] dark:text-[#fafafa] sm:text-5xl tracking-tighter">
                Todos los artículos
              </h2>
              <p className="mt-2 text-[#737373] dark:text-[#a3a3a3]">
                Un vistazo de lo que estamos desarrollando y compartiendo.
              </p>
            </div>
          </div>

          <div className="stagger mt-16 grid w-full grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:gap-10">
            {posts.map((post, i) => (
              <PostCard key={post.slug} post={post} index={i} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}