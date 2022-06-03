module.exports = {
  swcMinify: true,
  reactStrictMode: true,
  images: {
    domains: ["res.cloudinary.com"],
  },
  experimental: {
    images: {
      layoutRaw: true,
    },
  },
};
