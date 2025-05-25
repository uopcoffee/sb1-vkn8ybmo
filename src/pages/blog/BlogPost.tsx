import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Meta from '../../components/Meta';
import HeroSection from '../../components/common/HeroSection';

const BlogPost: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  return (
    <div className="pt-24">
      <Meta title={`${slug ?? ''} – Ballast Blog`} />
      <HeroSection title={slug ?? ''} />
      <section className="py-20">
        <div className="container-custom">
          <p className="text-primary-500/80">This is a placeholder for the blog post content.</p>
        </div>
      </section>
    </div>
  );
};

export default BlogPost;
