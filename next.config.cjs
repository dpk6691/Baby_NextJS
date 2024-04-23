module.exports = {
  target: "server", // Set the target option to 'server' to render all pages as SSR

  webpack: (config, { isServer }) => {
    // Grab the existing rule that handles SVG imports
    const fileLoaderRule = config.module.rules.find((rule) =>
      rule.test?.test?.(".svg")
    );

    config.module.rules.push(
      // Reapply the existing rule, but only for svg imports ending in ?url
      {
        ...fileLoaderRule,
        test: /\.svg$/i,
        resourceQuery: /url/, // *.svg?url
      },
      // Convert all other *.svg imports to React components
      {
        test: /\.svg$/i,
        issuer: fileLoaderRule.issuer,
        resourceQuery: { not: [...fileLoaderRule.resourceQuery.not, /url/] }, // exclude if *.svg?url
        use: ["@svgr/webpack"],
      }
    );

    // Modify the file loader rule to ignore *.svg, since we have it handled now.
    fileLoaderRule.exclude = /\.svg$/i;

    if (isServer) {
      // Replace the path below with the `sitemap.js` file location
      require("./sitemap/sitemap");
    }

    return config;
  },
  async redirects() {
    return [
      {
        source: "/indian/baby-name",
        destination: "/indian/all-baby-names",
        permanent: true,
      },
    ];
  },
};
