/** @type {import('next').NextConfig} */
// next.config.js
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['flickr.com'],
  },
  options: {
    remarkPlugins: [require('remark-prism')],
  },
};
