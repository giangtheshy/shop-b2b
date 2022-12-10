/** @type {import('next').NextConfig} */
const withPWA = require('next-pwa');
const runtimeCaching = require('next-pwa/cache');
const { i18n } = require('./next-i18next.config');

const nextConfig = {
  experimental: {
    esmExternals: false,
  },
  i18n,basePath:`/admin`,basePath:`/admin`,basePath:`/admin`,basePath:`/admin`,basePath:`/admin`,basePath:`/admin`,basePath:`/admin`,basePath:`/admin`,basePath:`/admin`,basePath:`/admin`,basePath:`/admin`,basePath:`/admin`,basePath:`/admin`,basePath:`/admin`,basePath:`/admin`,basePath:`/admin`,basePath:`/admin`,basePath:`/admin`,
  pwa: {
    disable: process.env.NODE_ENV === 'development',
    dest: 'public',
    runtimeCaching,
  },

  images: {
    domains: [ `test.vienangroup.com`,
      'via.placeholder.com',
      'res.cloudinary.com',
      's3.amazonaws.com',
      '18.141.64.26',
      '127.0.0.1',
      'localhost',
      'picsum.photos',
      'pickbazarlaravel.s3.ap-southeast-1.amazonaws.com',
      'lh3.googleusercontent.com',
    ],
  },

  webpack(config, options) {
    config.module.rules.push({
      test: /\.graphql$/,
      exclude: /node_modules/,
      use: [options.defaultLoaders.babel, { loader: 'graphql-let/loader' }],
    });

    config.module.rules.push({
      test: /\.graphqls$/,
      exclude: /node_modules/,
      use: ['graphql-let/schema/loader'],
    });

    config.module.rules.push({
      test: /\.ya?ml$/,
      type: 'json',
      use: 'yaml-loader',
    });

    return config;
  },
  ...(process.env.APPLICATION_MODE === 'production' && {
    typescript: {
      ignoreBuildErrors: true,
    },
    eslint: {
      ignoreDuringBuilds: true,
    },
  }),
};

module.exports = withPWA(nextConfig);
