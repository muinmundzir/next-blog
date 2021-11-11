import { useContext } from 'react';
import Link from 'next/link';

const categories = [
  { name: 'Server', slug: 'server' },
  { name: 'React', slug: 'react' },
];

const Header = () => {
  return (
    <nav className="container mx-auto px-10 mb-8">
      <div className="border-b w-full inline-block border-blue-400 py-8">
        <div className="block md:float-left">
          <Link href="/">
            <span className="cursor-pointer font-bold text-4xl text-white">
              Next Blog
            </span>
          </Link>
        </div>
        <div className="hidden md:float-left md:contents">
          {categories.map((category) => (
            <Link key={category.slug} href={`/category/${category.slug}`}>
              <span className="mt-2 ml-4 align-middle md:float-right text-white font-semibold cursor-pointer">
                {category.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Header;
