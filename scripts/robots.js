const fs = require('fs');

const generatedSitemap = `
    User-agent: *
    Allow: /
    Disallow: /redirect*/
    Sitemap: https://cpredirection.com/sitemap.xml
`;

fs.writeFileSync('../public/robots.txt', generatedSitemap, 'utf8');
