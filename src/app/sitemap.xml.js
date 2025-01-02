export async function GET() {
    const baseUrl = "https://yourwebsite.com"; // Replace with your website URL
  
    const urls = [
      "",
      "about",
      "contact",
      "privacy-policy",
      "json-formatter", // Add all your page paths here
    ];
  
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${urls
      .map(
        (url) => `
    <url>
      <loc>${baseUrl}/${url}</loc>
      <lastmod>${new Date().toISOString()}</lastmod>
    </url>`
      )
      .join("")}
  </urlset>`;
  
    return new Response(sitemap, {
      headers: {
        "Content-Type": "application/xml",
      },
    });
  }
  