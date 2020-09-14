// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint',
  },
  env: {
    browser: true,
  },
  // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
  // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended`
  // for stricter rules.
  extends: ['plugin:vue/essential', 'airbnb-base'],
  // required to lint *.vue files
  plugins: [
    'vue',
  ],
  settings: {
    'import/extensions': [
      '.vue',
      '.js',
    ],
    'import/resolver': {
      node: {
        extensions: ['.js', '.vue'],
      },
    },
  },
  rules: {
    // don't require .vue extension when importing
    'import/extensions': ['error', 'always',
      {
        js: 'never',
        vue: 'never',
      },
    ],
    // disallow reassignment of function parameters
    // disallow parameter object manipulation except for specific exclusions
    'no-param-reassign': ['error', {
      props: true,
      ignorePropertyModificationsFor: [
        'state', // for vuex state
        'acc', // for reduce accumulators
        'e', // for e.returnvalue
      ],
    }],
    // allow optionalDependencies
    'import/no-extraneous-dependencies': ['error', {
      optionalDependencies: ['test/unit/index.js'],
    }],
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    // disable invalid first character of tag name since it also throws an
    // error when using <> in mustaches.
    // https://github.com/vuejs/eslint-plugin-vue/issues/370
    'vue/no-parsing-error': [2, {
      'invalid-first-character-of-tag-name': false,
    }],
  },
};

