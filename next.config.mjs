/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
    domains: ['res.cloudinary.com','illustrations.popsy.co', 'images.unsplash.com','plus.unsplash.com','illustrations.popsy.co','icasem-robotechsummit.pockethost.io'],
  },
  experimental: {
    serverActions: true,
  },
  
};

export default nextConfig;