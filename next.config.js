/** @type {import('next').NextConfig} */
const nextConfig = {
    typescript: {
        ignoreBuildErrors: true,
    },
    env: {
        GITHUB_CLIENT_ID: process.env.GITHUB_CLIENT_ID,
        PRODUCTION: process.env.PRODUCTION,
        FERNET_SALT: process.env.FERNET_SALT,
    },
    images: {
        domains: ["github.com", "media.discordapp.net", "avatars.githubusercontent.com"],
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'cdn.discordapp.com',
                port: '',
                pathname: "/attachments/**/**/**"
            },
        ],
    },

};

module.exports = nextConfig;
