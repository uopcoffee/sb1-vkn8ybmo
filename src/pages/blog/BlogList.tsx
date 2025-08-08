import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Meta from '../../components/Meta';
import HeroSection from '../../components/common/HeroSection';
import Breadcrumbs from '../../components/layout/Breadcrumbs';

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
      <Meta title="Blog – Ballast Financial" canonicalPath="/blog" ogType="website" structuredData={{
        '@context': 'https://schema.org',
        '@type': 'Blog',
        name: 'Ballast Financial Blog',
        url: 'https://ballastfinancial.com/blog'
      }} />
      {/* Prefetch likely blog posts */}
      <link rel="prefetch" href="/blog/welcome" />
      <link rel="prefetch" href="/blog/outsourced-cfo" />
      <div className="container-custom mt-4">
        <Breadcrumbs />
      </div>
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
