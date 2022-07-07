/** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
// };

// module.exports = nextConfig;

const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

module.exports = withBundleAnalyzer({
  compress: true,
  reactStrictMode: true,
  // env: {
  //   BASE_URL: process.env.BASE_URL,
  // },
  /*
    set next.js to ONLY build /page dir's filename end with these strings
    ex) index.page.ts -> builds as page
        index.test.ts -> DOES NOT build as page
  */
  compiler: {
    styledComponents: true, // enable swc's styled-component support
  },
});
