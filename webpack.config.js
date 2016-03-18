module.exports = {
	entry: "./vsreact.js",
	output: {
		path: __dirname,
		filename: "./vsreact.bundle.js"
	},
	devServer: {
		inline: true
	},
	module: {
		loaders: [
			{
				test: /\.scss$/,
				loaders: ["style", "css", "sass"]
			},
			{
				test: /.(png|woff(2)?|eot|ttf|svg)(\?[a-z0-9=\.]+)?$/,
				loader: 'url-loader?limit=100000'
			},
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				loader: 'babel',
				query: {
					presets: ['react', 'es2015']
				}
			}
		]
	}
};
