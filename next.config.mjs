/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "fip6wxdyr5vppwsv.public.blob.vercel-storage.com",
      },
    ],
  },
};

export default nextConfig;
