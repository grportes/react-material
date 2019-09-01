const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {

	mode: 'development',

	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'index_bundle_[contenthash].js',
		publicPath: '/'
	}, 

	devtool: 'inline-source-map',

	devServer: {
		index: 'index.html',
		contentBase: path.resolve(__dirname, 'dist'),
		historyApiFallback: true,
	 	inline: true,
		open: true,
		port: 8080
	},	

	plugins: [
		new CleanWebpackPlugin(),
		new HtmlWebpackPlugin({
			title: 'Teste',
			template: 'src/index.html',
			filename: 'index.html'
		})
	],

	module: {
		rules: [
			{
				test: /\.css$/,
				use: [ 'style-loader', 'css-loader' ]
			},
			{
				test: /\.(png|svg|jpg|gif)$/,
				use: [ 'file-loader' ]
			},
			{
				test: /\.(woff|woff2|eot|ttf|otf)$/,
				use: [ 'file-loader' ]
			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: [ 'babel-loader']
			}
		]
	}
};
