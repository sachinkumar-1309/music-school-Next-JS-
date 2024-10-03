// /** @type {import('next').NextConfig} */
// const nextConfig = {
// 	images: {
// 		domains: ["images.unsplash.com", "res.clodinary.com"],
// 	},
// };

// export default nextConfig;

// /** @type {import('next').NextConfig} */
// const nextConfig = {
// 	images: {
// 	  remotePatterns: [
// 		{
// 		  protocol: 'https',
// 		  hostname: 'images.unsplash.com',
// 		  pathname: '/**',
// 		},
// 		{
// 		  protocol: 'https',
// 		  hostname: 'res.cloudinary.com',
// 		  pathname: '/**',
// 		},
// 	  ],
// 	},
//   };

//   export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
	eslint: {
		// Warning: This allows production builds to successfully complete even if
		// your project has ESLint errors.
		ignoreDuringBuilds: true,
	},
	images: {
		domains: ["images.unsplash.com"],
	},
};

export default nextConfig;
