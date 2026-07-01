export const getOrganizationSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Iterate First",
  "url": "https://iteratefirst.xyz",
  "logo": "https://iteratefirst.xyz/favicon.png",
  "sameAs": [
    "https://twitter.com/iteratefirst",
    "https://linkedin.com/company/iteratefirst",
    "https://github.com/iteratefirst"
  ],
  "description": "Iterate First is an AI automation platform that helps businesses and startups automate workflows, websites, and enterprise systems."
});

export const getWebsiteSchema = () => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Iterate First",
  "url": "https://iteratefirst.xyz",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://iteratefirst.xyz/search?q={search_term_string}",
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
    "item": `https://iteratefirst.xyz${item.path}`
  }))
});
