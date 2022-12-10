module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'http://test.vienangroup.com/shop',
  generateRobotsTxt: true, // (optional)
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        // allow: '/',
        disallow: ['*/logout', '*/checkout*', '*/404', '*/profile'],
      },
    ],
  },
  exclude: [
    '*/404',
    '*/change-password',
    '*/downloads',
    '*/logout',
    '*/refunds',
    '*/profile',
    '*/checkout*',
    '*/orders*',
  ],
};
