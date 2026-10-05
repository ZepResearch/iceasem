module.exports = {
    siteUrl: 'https://icasem.zepresearch.com',
    generateRobotsTxt: true,
    exclude: ['/api/*'],
    robotsTxtOptions: {
      additionalSitemaps: [
        'https://icasem.zepresearch.com/api/sitemap.xml',
      ],
    },
  };