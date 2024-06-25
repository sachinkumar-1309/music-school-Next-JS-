// /** @type {import('next').NextConfig} */
// const nextConfig = {
// 	images: {
// 		domains: ["images.unsplash.com", "res.clodinary.com"],
// 	},
// };

// export default nextConfig;
/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
	  remotePatterns: [
		{
		  protocol: 'https',
		  hostname: 'images.unsplash.com',
		  pathname: '/**',
		},
		{
		  protocol: 'https',
		  hostname: 'res.cloudinary.com',
		  pathname: '/**',
		},
	  ],
	},
  };
  
  export default nextConfig;
  