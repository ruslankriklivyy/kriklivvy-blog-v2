/** @type {import('next').NextConfig} */
// next.config.js
// const withMDX = require('@next/mdx')({
//   extension: /\.mdx?$/,
// });

// module.exports = withMDX({
//   pageExtensions: ['js', 'jsx', 'mdx'],
//   reactStrictMode: true,
//   images: {
//     domains: ['flickr.com'],
//   },
// });
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['flickr.com'],
  },
  options: {
    remarkPlugins: [require('remark-prism')],
  },
};
