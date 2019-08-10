const withPlugins = require("next-compose-plugins");

const withSass = require("@zeit/next-sass");

const withImages = require("next-images");

// next.config.js
module.exports = withPlugins([withImages, withSass], {
	serverRuntimeConfig: {
		// Will only be available on the server side
		mySecret: "secret",
		secondSecret: process.env.SECOND_SECRET // Pass through env variables
	},
	publicRuntimeConfig: {
		// Will be available on both server and client
		staticFolder: "/static"
	},
	module: {
		loaders: [
			{
				test: /.jsx?$/,
				loader: "babel-loader",
				exclude: /node_modules/
			},
			{
				test: /\.css$/,
				loader: "style-loader!css-loader"
			},
			{
				test: /\.(jpe?g|png|gif|woff|woff2|eot|ttf|svg)(\?[a-z0-9=.]+)?$/,
				loader: "url-loader?limit=100000"
			}
		]
	}
});

// module.exports = withCSS(withSass({
//   webpack (config, options) {
//     config.module.rules.push({
//       test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
//       use: {
//         loader: 'url-loader',
//         options: {
//           limit: 100000
//         }
//       }
//     })

//     return config
//   }
// }))
