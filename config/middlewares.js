module.exports = [
  "strapi::logger",
  "strapi::errors",
  "strapi::security",
  "strapi::cors",
  {
    name: "strapi::cors",
    config: {
      enabled: true,
      headers: "*",
      origin: ["https://elmentor-nextjs.vercel.app"], // Add your frontend URL
    },
  },
  {
    name: "strapi::security",
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          "connect-src": ["'self'", "https:"],
          "img-src": [
            "'self'",
            "data:",
            "blob:",
            "market-assets.strapi.io",
            "*.cloudinary.com",
          ],
          "media-src": [
            "'self'",
            "data:",
            "blob:",
            "market-assets.strapi.io",
            "*.cloudinary.com",
          ],
          "script-src": ["'self'", "https:"],
          "frame-src": ["'self'", "https:"],
        },
      },
      referrerPolicy: { policy: "no-referrer" }, // Adds a Referrer-Policy header to responses to prevent leaking referrer information
      xssProtection: { enabled: true, mode: "block" }, // Enables X-XSS-Protection header for preventing XSS attacks
    },
  },
  "strapi::poweredBy",
  "strapi::query",
  "strapi::body",
  "strapi::session",
  "strapi::favicon",
  "strapi::public",
];
