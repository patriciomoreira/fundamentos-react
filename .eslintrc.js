module.exports = {
	env: {
		node: true,
		commonjs: true,
		browser: true,
	},
	extends: ['eslint:recommended'],
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	plugins: ['react', 'react-hooks', 'testing-library'],
	rules: {
		'no-console': 0,
		'react/jsx-filename-extension': [{ extensions: ['.jsx', '.js'] }],
		'import/prefer-default-export': 'off',
	},
};
