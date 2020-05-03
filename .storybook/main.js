module.exports = {
  stories: ['../src/**/**/*.stories.tsx'],
  addons: [
    '@storybook/preset-create-react-app',
    '@storybook/addon-actions',
    '@storybook/addon-links',
  ],
  webpackFinal: (config) => {
    config.module.rules.push({
      test: /\.tsx?$/,
      use: [{
        loader: require.resolve('react-docgen-typescript-loader'),
        options: {
          shouldExtractLiteralValuesFromEnum: true,
          propFilter: (prop) => {
            if (prop.parent) {
              return !prop.parent.fileName.includes('node_modules')
            }
            return true
          }
        }
      }]
    });
    return config;
  },
};
