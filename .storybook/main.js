const path = require('path');

module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  webpackFinal: config => {
    config.resolve.modules = [
      path.resolve(__dirname, '..', 'src'),
      'node_modules',
    ];

    const fileLoaderRule = config.module.rules.find(
      rule => rule.test && rule.test.test('.svg')
    );
    fileLoaderRule.exclude = /\.svg$/;

    config.module.rules.push({
      test: /\.svg$/,
      enforce: 'pre',
      loader: require.resolve('@svgr/webpack'),
    });

    return config;
  },
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
};
