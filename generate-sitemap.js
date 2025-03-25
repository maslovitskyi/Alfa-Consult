import { SitemapStream, streamToPromise } from 'sitemap';
import { createGzip } from 'zlib';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
// Define your website's base URL
const hostname = 'https://yourwebsite.com';

// Define the URLs for your sitemap
const links = [
  { url: '/', changefreq: 'weekly', priority: 1.0 },
  // Add more URLs if needed
  // { url: '/about', changefreq: 'monthly', priority: 0.8 },
  // { url: '/services', changefreq: 'monthly', priority: 0.8 },
];

// Create a sitemap stream
const stream = new SitemapStream({ hostname });

// Write the URLs to the sitemap stream
links.forEach(link => stream.write(link));
stream.end();

// Generate the sitemap XML
streamToPromise(stream)
  .then(data => {
    // Save the sitemap to a file
    fs.writeFileSync(path.resolve(__dirname, 'public/sitemap.xml'), data);
    console.log('Sitemap generated successfully!');
  })
  .catch(error => {
    console.error('Error generating sitemap:', error);
  });