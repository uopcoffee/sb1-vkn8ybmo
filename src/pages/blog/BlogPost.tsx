import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { setMeta } from '../../utils/seo';
import HeroSection from '../../components/common/HeroSection';

const BlogPost: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  useEffect(() => {
    setMeta({ title: `${slug} \u2013 Ballast Blog` });
    window.scrollTo(0, 0);
  }, [slug]);

  return (
    <div className="pt-24">
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
