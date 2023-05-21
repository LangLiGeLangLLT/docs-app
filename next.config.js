/** @type {import('nextra').NextraConfig} */
const nextraConfig = {
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '/docs',
}

const withNextra = require('nextra')(nextraConfig)

module.exports = withNextra(nextConfig)
