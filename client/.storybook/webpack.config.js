// load the default config generator.
const genDefaultConfig = require('@storybook/react/dist/server/config/defaults/webpack.config.js');
const path = require('path');

module.exports = (baseConfig, env) => {
	const config = genDefaultConfig(baseConfig, env);
	
	// For example, add typescript loader:
	config.module.rules.push({
		test: /\.(ts|tsx)$/,
		include: [
			path.resolve(__dirname, '../src'),
			path.resolve(__dirname, '../stories'),
			],
		loader: require.resolve('ts-loader'),
	});
	config.resolve.extensions.push('.ts', '.tsx');
	
	return config;
};