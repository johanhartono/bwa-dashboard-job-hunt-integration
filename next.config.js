/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "nsuychkxpgaxsrolqevh.supabase.co",
			},
		],
	},

};

module.exports = nextConfig;
