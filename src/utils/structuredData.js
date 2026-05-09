export const getOrganizationSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Tachymation",
  "url": "https://tachymation.vercel.app",
  "logo": "https://tachymation.vercel.app/favicon.png",
  "sameAs": [
    "https://twitter.com/tachymation",
    "https://linkedin.com/company/tachymation",
    "https://github.com/tachymation"
  ],
  "description": "Tachymation is an AI automation platform that helps businesses and startups automate workflows, websites, and enterprise systems."
});

export const getWebsiteSchema = () => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Tachymation",
  "url": "https://tachymation.vercel.app",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://tachymation.vercel.app/search?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
});

export const getBreadcrumbSchema = (items) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": items.map((item, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": item.name,
    "item": `https://tachymation.vercel.app${item.path}`
  }))
});
