const baseConfig = require('@eclipse-scout/cli/scripts/webpack-defaults');
const {GenerateSW} = require("workbox-webpack-plugin");

module.exports = (env, args) => {
  args.resDirArray = [
    './res',
    './node_modules/@eclipse-scout/core/res',
    './node_modules/@eclipse-scout/core/dist/locales.json',
    './node_modules/@eclipse-scout/core/dist/texts.json'
  ];
  const config = baseConfig(env, args);
  config.entry = {
    'helloworld': './src/helloworld.js',
    'helloworld-theme': './src/helloworld.less'
  };

  let generateSWPlugin = new GenerateSW({
    maximumFileSizeToCacheInBytes: 10485760,
    clientsClaim: true,
    skipWaiting: true,
    swDest: 'sw.js',
    exclude: [/-theme.js$/, /\.map$/, /^manifest.*\.js$/],
    ignoreURLParametersMatching: [
      /^utm_/,
      /^fbclid$/
    ]
  });
  config.plugins.push(generateSWPlugin);

  config.experiments = {
    topLevelAwait: true
  }
  return config;
};
