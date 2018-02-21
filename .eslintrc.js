module.exports = {
	root: true,
	parserOptions: {
		"parser": "babel-eslint",
	},
	env: {
		browser: true,
		node: true
	},
	extends: [
		'xo',
		'xo/esnext',
		'plugin:vue/essential',
		'plugin:vue/strongly-recommended',
		'plugin:vue/recommended',
		'prettier'
	],
	// required to lint *.vue files
	plugins: ['vue'],
	// add your custom rules here
	rules: {
		'no-tabs': 'off',
		indent: ['error', 'tab'],
		'object-curly-spacing': ['error', 'always'],
		'operator-linebreak': 'off',
		'capitalized-comments': 'off',
		'no-irregular-whitespace': 'off',
		'max-statements-per-line': ["error", { "max": 2 }],
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
		'vue/attribute-hyphenation': [2, 'never']
	},
	globals: {}
}
