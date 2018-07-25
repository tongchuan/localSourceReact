const path = require('path');
// import '!style-loader!css-loader!./styles.css';
module.exports = baseConfig => {
  baseConfig.module.rules.push({
    test: [/\.stories\.tsx?$/, /index\.ts$/],
    loaders: [
      {
        loader: require.resolve('@storybook/addon-storysource/loader'),
        options: {
          parser: 'typescript',
        },
      },
    ],
    include: [path.resolve(__dirname, '../src')],
    enforce: 'pre',
  },{
    test: /\.(css|less|scss)$/,
    loaders: ['to-string-loader', "style-loader", "css-loader", "sass-loader"],
    include: path.resolve(__dirname, "../src")
  });

  return baseConfig;
};