/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    return [
      {
        source: "/services",
        destination: "/#services",
        permanent: false,
      },
      {
        source: "/resume",
        destination: "/#resume",
        permanent: false,
      },
      {
        source: "/work",
        destination: "/#work",
        permanent: false,
      },
      {
        source: "/contact",
        destination: "/#contact",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
