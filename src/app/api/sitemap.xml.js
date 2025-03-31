import { getServerSideSitemap } from 'next-sitemap';

export default async function sitemap(req, res) {
  // Base URL of your website
  const baseUrl = 'https://www.icasem.org';
  
  // List all your routes based on your folder structure
  const routes = [
    '',
    '/legal-links/cancellation-policy',
    '/legal-links/privacy-policy',
    '/legal-links/terms-&-condition',
    '/about-conference',
    '/about-organizers',
    '/awards',
    '/committee',
    '/contact',
    '/mode-of-presentation',
    '/papers-format',
    '/payment',
    '/registration',
    '/schedule',
    '/sponsorship',
    '/submission',
    '/theme-and-topics',
    '/venue',
    '/api/cravenue',
    '/api/paper-submission',
    '/api/payment-notification',
    '/api/send'
  ];

  // Create sitemap items
  const fields = routes.map(route => ({
    loc: `${baseUrl}${route}`, // URL
    lastmod: new Date().toISOString(), // Last modified date
    changefreq: 'daily', // How frequently the page is likely to change
    priority: route === '' ? 1.0 : 0.7 // Priority relative to other URLs
  }));

  // Generate sitemap
  return getServerSideSitemap(req, res, fields);
}

// Important: Disable body parsing
export const config = {
  api: {
    bodyParser: false,
  },
};