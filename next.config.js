/** @type {import('next').NextConfig} */
const nextConfig = {
    images : {
        domains: ["github.com", "media.discordapp.net", "avatars.githubusercontent.com"],
        remotePatterns : [
            {
                protocol : 'https',
                hostname : 'cdn.discordapp.com',
                port : '',
                pathname : "/attachments/**/**/**"
            },
        ],
    },

};

module.exports = nextConfig;
