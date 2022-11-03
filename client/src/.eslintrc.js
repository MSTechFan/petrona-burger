module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	settings: {
		react: {
			version: 'detected',
		},
	},
	extends: [
		'plugin:react/recommended',
		'plugin:react/jsx-runtime',
		'standard',
		'eslint-config-prettier',
		'plugin:react-hooks/recommended',
	],
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	plugins: [
		'react',
		'react-hooks'
	],
	rules: {
		"react-hooks/rules-of-hooks": "error", // Checks rules of Hooks
    	"react-hooks/exhaustive-deps": "warn" // Checks effect dependencies
	},
}