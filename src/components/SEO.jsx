import { Helmet } from 'react-helmet-async';

const SEO = ({
  title,
  description,
  canonical,
  ogImage = '/favicon.png',
  ogType = 'website',
  twitterHandle = '@tachymation',
}) => {
  const siteName = 'Tachymation';
  const fullTitle = `${title} | ${siteName}`;
  const url = `https://tachymation.vercel.app${canonical}`;

  return (
    <Helmet>
      {/* Basic Metadata */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content={siteName} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:site" content={twitterHandle} />
      <meta name="twitter:creator" content={twitterHandle} />

      {/* Additional SEO tags */}
      <meta name="robots" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
      <meta name="theme-color" content="#050505" />
    </Helmet>
  );
};

export default SEO;
