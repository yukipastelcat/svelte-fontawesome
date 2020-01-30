const path = require('path');

const mode = process.env.NODE_ENV || 'development';
const prod = mode === 'production';

const sharedConfig = {
	entry: './src/index.js',
	externals: [
		'@fortawesome/fontawesome-svg-core'
	],
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

const window = {
	...umd,
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'fontawesome-svelte.window.js',
		library: 'fontawesome-svelte',
		libraryTarget: 'window'
	},
}

const webComponents = {
	...sharedConfig,
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'fontawesome-svelte.web-components.js',
		library: 'fontawesome-svelte',
		libraryTarget: 'window',
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
						customElement: true
					}
				}
			},
		]
	},
};

module.exports = [umd, window, webComponents];
