let siteUrl = "https://winestore.vercel.app";
if (process.env.NODE_ENV === "development") {
    siteUrl = "http://localhost:3000";
}

module.exports = {
    siteUrl,
    generateRobotsTxt: true,
    robotsTxtOptions: {
        policies: [
            {
                userAgent: "*",
                disallow: ["/protected"],
            },
            {
                userAgent: "*",
                allow: "/",
            },
        ],
        additionalSitemaps: [
            `${siteUrl}/sitemap-0.xml`,
            `${siteUrl}/drinksitemap.xml`,
        ],
    },
    exclude: ["/drinksitemap.xml"],
};
