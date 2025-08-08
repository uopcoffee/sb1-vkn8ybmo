import { useEffect } from 'react';

interface MetaProps {
  title?: string;
  description?: string;
  image?: string;
  canonicalPath?: string;
  noindex?: boolean;
  structuredData?: Record<string, unknown> | Record<string, unknown>[];
  ogType?: 'website' | 'article' | string;
}

const ensureMetaTag = (selector: string, createAttrs: Record<string, string>) => {
  let el = document.querySelector(selector) as HTMLMetaElement | null;
  if (!el) {
    el = document.createElement('meta');
    Object.entries(createAttrs).forEach(([k, v]) => el!.setAttribute(k, v));
    document.head.appendChild(el);
  }
  return el;
};

const setOrCreateLink = (rel: string, href: string) => {
  let link = document.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement | null;
  if (!link) {
    link = document.createElement('link');
    link.setAttribute('rel', rel);
    document.head.appendChild(link);
  }
  link.setAttribute('href', href);
  return link;
};

/**
 * Builds an absolute URL for meta tags. When running in staging, we want to
 * ensure canonical URLs point to the production host to avoid duplicate content
 * and accidental indexing. The production host can be overridden via
 * VITE_CANONICAL_HOST.
 */
const asAbsoluteUrl = (pathOrUrl?: string) => {
  if (!pathOrUrl) return undefined;

  // Respect absolute URLs as-is
  try {
    const u = new URL(pathOrUrl);
    return u.toString();
  } catch {
    // Continue to build from a base
  }

  const envCanonicalHost = (import.meta as any).env?.VITE_CANONICAL_HOST as string | undefined;
  const viteEnv = (import.meta as any).env?.VITE_ENV as string | undefined;

  const currentHostname = window.location.hostname;
  const canonicalHostname = (() => {
    if (!envCanonicalHost) return undefined;
    try {
      // Allow values like "ballastfinancial.com" or full URLs
      const url = envCanonicalHost.includes('://') ? envCanonicalHost : `https://${envCanonicalHost}`;
      return new URL(url).hostname;
    } catch {
      return undefined;
    }
  })();

  const isPreviewLike = viteEnv === 'preview' || (!!canonicalHostname && currentHostname !== canonicalHostname);

      // When preview-like, force canonical base to the production host if provided
    const base = isPreviewLike && canonicalHostname
    ? `https://${canonicalHostname}`
    : `${window.location.protocol}//${window.location.host}`;

  const normalizedPath = pathOrUrl.startsWith('/') ? pathOrUrl : `/${pathOrUrl}`;
  return `${base}${normalizedPath}`;
};

const Meta: React.FC<MetaProps> = ({ title, description, image, canonicalPath, noindex, structuredData, ogType }) => {
  useEffect(() => {
    const viteEnv = (import.meta as any).env?.VITE_ENV as string | undefined;
    const envCanonicalHost = (import.meta as any).env?.VITE_CANONICAL_HOST as string | undefined;
    const currentHostname = window.location.hostname;
    const canonicalHostname = (() => {
      if (!envCanonicalHost) return undefined;
      try {
        const url = envCanonicalHost.includes('://') ? envCanonicalHost : `https://${envCanonicalHost}`;
        return new URL(url).hostname;
      } catch {
        return undefined;
      }
    })();
    const isPreviewLike = viteEnv === 'preview' || (!!canonicalHostname && currentHostname !== canonicalHostname);

    const absImage = asAbsoluteUrl(image ?? '/ballast-brand-background.svg');
    const canonicalUrl = asAbsoluteUrl(canonicalPath ?? window.location.pathname);

    if (title) {
      document.title = title;
      const ogTitle = ensureMetaTag('meta[property="og:title"]', { property: 'og:title' });
      ogTitle.setAttribute('content', title);

      const twitterTitle = ensureMetaTag('meta[name="twitter:title"]', { name: 'twitter:title' });
      twitterTitle.setAttribute('content', title);
    }

    if (description) {
      const metaDesc = ensureMetaTag('meta[name="description"]', { name: 'description' });
      metaDesc.setAttribute('content', description);

      const ogDesc = ensureMetaTag('meta[property="og:description"]', { property: 'og:description' });
      ogDesc.setAttribute('content', description);

      const twitterDesc = ensureMetaTag('meta[name="twitter:description"]', { name: 'twitter:description' });
      twitterDesc.setAttribute('content', description);
    }

    if (absImage) {
      const ogImage = ensureMetaTag('meta[property="og:image"]', { property: 'og:image' });
      ogImage.setAttribute('content', absImage);

      const twitterCard = ensureMetaTag('meta[name="twitter:card"]', { name: 'twitter:card' });
      twitterCard.setAttribute('content', 'summary_large_image');

      const twitterImage = ensureMetaTag('meta[name="twitter:image"]', { name: 'twitter:image' });
      twitterImage.setAttribute('content', absImage);
    }

    // og:site_name for consistency
    const siteName = ensureMetaTag('meta[property="og:site_name"]', { property: 'og:site_name' });
    siteName.setAttribute('content', 'Ballast Financial');

    // og:type
    const ogTypeTag = ensureMetaTag('meta[property="og:type"]', { property: 'og:type' });
    ogTypeTag.setAttribute('content', ogType ?? 'website');

    // Canonical link
    if (canonicalUrl) {
      setOrCreateLink('canonical', canonicalUrl);
      const ogUrl = ensureMetaTag('meta[property="og:url"]', { property: 'og:url' });
      ogUrl.setAttribute('content', canonicalUrl);
    }

    // Robots (noindex)
    if (noindex || isPreviewLike) {
      const robots = ensureMetaTag('meta[name="robots"]', { name: 'robots' });
      robots.setAttribute('content', 'noindex, nofollow');
    }

    // Structured data (JSON-LD). Remove old ones we added and re-add
    const existingJsonLd = Array.from(document.querySelectorAll('script[data-managed="jsonld"]'));
    existingJsonLd.forEach((s) => s.parentElement?.removeChild(s));

    if (structuredData) {
      const items = Array.isArray(structuredData) ? structuredData : [structuredData];
      items.forEach((obj) => {
        const script = document.createElement('script');
        script.type = 'application/ld+json';
        script.setAttribute('data-managed', 'jsonld');
        script.text = JSON.stringify(obj);
        document.head.appendChild(script);
      });
    }
  }, [title, description, image, canonicalPath, noindex, structuredData]);

  return null;
};

export default Meta;
 