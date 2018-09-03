const Dotenv = require('dotenv-webpack');
console.log(Dotenv);
module.exports = {
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader"
				}
			}

		]
	},
	plugins: [
		new Dotenv()
	]
}
