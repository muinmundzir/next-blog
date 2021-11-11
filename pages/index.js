import Head from 'next/head';
import { PostWidget, PostCard, Categories } from '../components';

const posts = [
  { title: 'Hello Next.js', excerpt: 'This is my first post using Next.js' },
  {
    title: 'Learn Tailwind',
    excerpt: 'Learn tailwind with creating some templates',
  },
];

export default function Home() {
  return (
    <div className="container mx-auto px-10 mb-8">
      <Head>
        <title>Next Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <main className="col-span-1 lg:col-span-8">
          {posts.map((post, index) => (
            <PostCard post={post} key={post.title} />
          ))}
        </main>
        <aside className="col-span-1 lg:col-span-4">
          <div className="relative lg:sticky top-8">
            <PostWidget />
            <Categories />
          </div>
        </aside>
      </div>
    </div>
  );
}
