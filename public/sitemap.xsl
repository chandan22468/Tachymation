<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="2.0"
  xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
  xmlns:sitemap="http://www.sitemaps.org/schemas/sitemap/0.9">

  <xsl:output method="html" version="1.0" encoding="UTF-8" indent="yes"/>

  <xsl:template match="/">
    <html lang="en">
      <head>
        <title>Sitemap – Iterate First</title>
        <meta charset="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <style>
          body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
            background: #0a0a0a;
            color: #e5e5e5;
            margin: 0;
            padding: 40px 24px;
          }
          h1 {
            font-size: 1.5rem;
            font-weight: 600;
            margin-bottom: 8px;
            color: #ffffff;
          }
          p.subtitle {
            color: #888;
            font-size: 0.9rem;
            margin-bottom: 32px;
          }
          table {
            width: 100%;
            max-width: 900px;
            border-collapse: collapse;
          }
          thead tr {
            background: #1a1a1a;
            text-align: left;
          }
          th {
            padding: 12px 16px;
            font-size: 0.75rem;
            text-transform: uppercase;
            letter-spacing: 0.08em;
            color: #888;
            border-bottom: 1px solid #2a2a2a;
          }
          td {
            padding: 12px 16px;
            border-bottom: 1px solid #1e1e1e;
            font-size: 0.875rem;
          }
          tbody tr:hover {
            background: #141414;
          }
          a {
            color: #a78bfa;
            text-decoration: none;
          }
          a:hover {
            text-decoration: underline;
          }
          .badge {
            display: inline-block;
            padding: 2px 8px;
            border-radius: 999px;
            font-size: 0.75rem;
            background: #1e1e2e;
            color: #a78bfa;
            border: 1px solid #2e2e4e;
          }
        </style>
      </head>
      <body>
        <h1>Iterate First Sitemap</h1>
        <p class="subtitle">
          <xsl:value-of select="count(sitemap:urlset/sitemap:url)"/> URLs indexed
        </p>
        <table>
          <thead>
            <tr>
              <th>URL</th>
              <th>Last Modified</th>
              <th>Change Frequency</th>
              <th>Priority</th>
            </tr>
          </thead>
          <tbody>
            <xsl:for-each select="sitemap:urlset/sitemap:url">
              <tr>
                <td>
                  <a href="{sitemap:loc}">
                    <xsl:value-of select="sitemap:loc"/>
                  </a>
                </td>
                <td><xsl:value-of select="sitemap:lastmod"/></td>
                <td><span class="badge"><xsl:value-of select="sitemap:changefreq"/></span></td>
                <td><xsl:value-of select="sitemap:priority"/></td>
              </tr>
            </xsl:for-each>
          </tbody>
        </table>
      </body>
    </html>
  </xsl:template>

</xsl:stylesheet>
