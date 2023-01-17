/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true, 
  images: {
    domains: ['placeimg.com'],
  }
  // experimental: {
  //   appDir: true,
  // },
  // env: {
  //   customKey: 'customValue',
  // },
  // basePath: '/dist',
  // compress: true,
  // async redirects() {
  //   return [
  //     {
  //       source: '/about',
  //       destination: '/about-us',
  //       permanent: true,
  //     },
  //   ]
  // }
}

module.exports = nextConfig
