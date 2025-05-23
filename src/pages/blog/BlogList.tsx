import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { setMeta } from '../../utils/seo';

const posts = [
  { slug: 'welcome', title: 'Welcome to the Ballast Blog' },
  { slug: 'outsourced-cfo', title: 'Do You Need an Outsourced CFO?' }
];

const BlogList: React.FC = () => {
  useEffect(() => {
    setMeta({ title: 'Blog – Ballast Financial' });
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-24 container-custom">
      <h1 className="text-4xl font-bold text-primary-500 mb-8">Blog</h1>
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
  );
};

export default BlogList;
