const path = require('path');

const mode = process.env.NODE_ENV || 'development';
const prod = mode === 'production';

const sharedConfig = {
	entry: './src/index.js',
	resolve: {
		alias: {
			svelte: path.resolve('node_modules', 'svelte')
		},
		extensions: ['.mjs', '.js', '.svelte'],
		mainFields: ['svelte', 'browser', 'module', 'main']
	},
	mode,
	devtool: prod ? false: 'source-map'
}

const umd = {
	...sharedConfig,
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'fontawesome-svelte.umd.js',
		library: 'fontawesome-svelte',
		libraryTarget: 'umd'
	},
	module: {
		rules: [
			{
				test: /\.svelte$/,
				use: {
					loader: 'svelte-loader',
					options: {
						emitCss: true,
						hotReload: false,
					}
				}
			},
		]
	},
};

module.exports = [umd];
