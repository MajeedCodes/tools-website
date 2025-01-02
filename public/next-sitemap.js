module.exports = {
    siteUrl: 'https://yourwebsite.com',
    generateRobotsTxt: true,
    changefreq: 'daily',
    priority: 0.7,
    sitemapSize: 5000,
    exclude: ['/api/**', '/404', '/500'],
    robotsTxtOptions: {
      additionalSitemaps: [
        'https://yourwebsite.com/sitemap.xml',
      ],
    },
  };
  