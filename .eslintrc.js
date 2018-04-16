module.exports = {
	root: true,
	parserOptions: {
		"parser": "babel-eslint",
	},
	env: {
		browser: true,
		node: true,
		jest: true,
		"cypress/globals": true
	},
	extends: [
		'xo/esnext',
		'plugin:vue/recommended'
	],
	// required to lint *.vue files
	plugins: ['vue', 'cypress', 'chai-friendly'],
	// add your custom rules here
	rules: {
		"no-unused-expressions": 0,
		"chai-friendly/no-unused-expressions": 2,
		'object-curly-spacing': ['error', 'always'],
		'operator-linebreak': 'off',
		'capitalized-comments': 'off',
		'no-mixed-operators': 'off',
		'vue/no-unused-vars': 'error',
		'vue/valid-v-on': 'error',
		'vue/valid-template-root': 'error',
		'vue/valid-v-show': 'error',
		'vue/html-indent': ['error', 'tab', {
			'attribute': 1,
			'closeBracket': 0,
			'alignAttributesVertically': true,
			'ignores': []
		  }],
		'vue/html-self-closing': ['error', {
			'html': {
			  'void': 'never',
			  'normal': 'always',
			  'component': 'always'
			},
			'svg': 'always'
		  }],
		'vue/no-multi-spaces': 'error',
		"vue/max-attributes-per-line": [2, {
			"singleline": 4,
			"multiline": {
				"max": 1,
				"allowFirstLine": false
			}
		}],
		'vue/attribute-hyphenation': [2, 'always']
	},
	globals: {}
}
