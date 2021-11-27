const withPlugins = require("next-compose-plugins");

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
    swcMinify: true,
    experimental: {        
        styledComponents: true,
    },

    // 
    reactStrictMode: true,

    // 
    i18n: {
        locales: ['en',],
        defaultLocale: 'en',
      },
    
};

module.exports = withPlugins([], nextConfig);
