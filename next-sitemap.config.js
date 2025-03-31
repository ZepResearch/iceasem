module.exports = {
    siteUrl: 'https://www.icasem.org',
    generateRobotsTxt: true,
    exclude: ['/api/*'],
    robotsTxtOptions: {
      additionalSitemaps: [
        'https://www.icasem.org/api/sitemap.xml',
      ],
    },
  };