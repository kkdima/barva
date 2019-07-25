const withSass = require('@zeit/next-sass')
module.exports = withSass()

const withImages = require('next-images')
module.exports = withImages()

module.exports = {
    serverRuntimeConfig: {
      // Will only be available on the server side
      mySecret: 'secret',
      secondSecret: process.env.SECOND_SECRET, // Pass through env variables
    },
    publicRuntimeConfig: {
      // Will be available on both server and client
      staticFolder: '/static',
    },
  }

  module.exports = withCSS(withSass({
    webpack (config, options) {
      config.module.rules.push({
        test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 100000
          }
        }
      })
  
      return config
    }
  }))

  module.exports = {
    module: {
      rules: [
        {
          test: /\.(png|jpe?g|gif)$/,
          use: [
            {
                loader: 'file-loader',
                options: {
//                 outputPath: (url, resourcePath, context) => {
//                 // `resourcePath` is original absolute path to asset
//                 // `context` is directory where stored asset (`rootContext`) or `context` option

//                 // To get relative path you can use
//                 // const relativePath = path.relative(context, resourcePath);

//                 if (/my-custom-image\.png/.test(resourcePath)) {
//                     return `other_output_path/${url}`;
//                 }

//                 if (/images/.test(context)) {
//                     return `image_output_path/${url}`;
//                 }

//                 return `output_path/${url}`;
// },
                regExp: /\/([a-z0-9]+)\/[a-z0-9]+\.png$/,
                publicPath: 'images',
                emitFile: false,
                name: '[sha512:hash:base64:7].[ext]',
              },
            },
          ],
        },
      ],
    },
  };