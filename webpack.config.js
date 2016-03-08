module.exports = {
	entry: "./vsreact.js",
	output: {
		path: __dirname,
		filename: "./js/vsreact.bundle.js"
	},
	module: {
		loaders: [
			{ test: /\.scss$/, loaders: ["style", "css", "sass"] },
			{ test: /.(png|woff(2)?|eot|ttf|svg)(\?[a-z0-9=\.]+)?$/, loader: 'url-loader?limit=100000' }
		]
	}
};
