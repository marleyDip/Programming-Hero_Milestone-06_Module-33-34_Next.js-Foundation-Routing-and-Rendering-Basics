/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,

  images: {
    remotePatterns: [
      // https://images.unsplash.com/
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
        pathname: "**",
        search: "",
      },

      // https://plus.unsplash.com/
      {
        protocol: "https",
        hostname: "plus.unsplash.com",
        port: "",
        pathname: "**",
        search: "",
      },

      // https://res-console.cloudinary.com/df4biggtk/thumbnails/v1/image/upload/
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        // The double asterisk must cover the remaining path segments correctly

        // pathname: "/df4biggtk/**",
      },
    ],
  },
};

export default nextConfig;
