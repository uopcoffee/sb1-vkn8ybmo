import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Meta from '../../components/Meta';
import HeroSection from '../../components/common/HeroSection';

const posts = [
  { slug: 'welcome', title: 'Welcome to the Ballast Blog' },
  { slug: 'outsourced-cfo', title: 'Do You Need an Outsourced CFO?' }
];

const BlogList: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-24">
      <Meta title="Blog – Ballast Financial" />
      <HeroSection title="Blog" />
      <section className="py-20">
        <div className="container-custom">
          <ul className="space-y-4">
            {posts.map(({ slug, title }) => (
              <li key={slug}>
                <Link to={`/blog/${slug}`} className="text-accent-500 hover:underline">
                  {title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
};

export default BlogList;
