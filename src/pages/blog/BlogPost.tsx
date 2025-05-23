import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { setMeta } from '../../utils/seo';

const BlogPost: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  useEffect(() => {
    setMeta({ title: `${slug} – Ballast Blog` });
    window.scrollTo(0, 0);
  }, [slug]);

  return (
    <div className="pt-24 container-custom">
      <h1 className="text-4xl font-bold text-primary-500 mb-4">{slug}</h1>
      <p className="text-primary-500/80">This is a placeholder for the blog post content.</p>
    </div>
  );
};

export default BlogPost;
