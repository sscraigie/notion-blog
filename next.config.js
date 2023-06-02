// // eslint-disable-next-line @typescript-eslint/no-var-requires
// const withBundleAnalyzer = require('@next/bundle-analyzer')({
//   enabled: process.env.ANALYZE === 'true'
// })

// module.exports = withBundleAnalyzer({
//   staticPageGenerationTimeout: 300,
//   images: {
//     domains: [
//       'www.notion.so',
//       'notion.so',
//       'images.unsplash.com',
//       'pbs.twimg.com',
//       'abs.twimg.com',
//       's3.us-west-2.amazonaws.com',
//       'transitivebullsh.it'
//     ],
//     formats: ['image/avif', 'image/webp'],
//     dangerouslyAllowSVG: true,
//     contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
//   }
// })
/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  output: 'export'
  // Optional: Add a trailing slash to all paths `/about` -> `/about/`
  // trailingSlash: true,
  // Optional: Change the output directory `out` -> `dist`
  // distDir: 'dist',
}

module.exports = nextConfig
