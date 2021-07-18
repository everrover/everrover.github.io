module.exports = {
  reactStrictMode: true,
  images: {
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    domains: ['firebasestorage.googleapis.com'],
    // loader: 'imgix', // this is a hack until the bug is fixed
    // path: ''
  },
  async redirects() {
    return [
      {
        source: '/archive/1',
        destination: '/archive',
        permanent: true,
      },
    ]
  }
}
