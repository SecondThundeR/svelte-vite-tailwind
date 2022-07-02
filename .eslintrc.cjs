const config = {
    root: true,
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module'
    },
    env: {
        es2017: true,
        browser: true,
        node: true
    },
    overrides: [
        {
            files: ['*.svelte'],
            parser: 'svelte-eslint-parser',
            parserOptions: {
                parser: '@typescript-eslint/parser'
            },
            env: {browser: true, node: false},
            rules: {
                'no-inner-declarations': 'off',
                'no-unused-vars': 'off',
                'no-self-assign': 'off'
            }
        },
        {
            files: ['src/**/*.ts', 'src/**/*.js'],
            env: {browser: true, node: false}
        }
    ],
    extends: [
        'eslint:recommended',
        'plugin:prettier/recommended',
        'plugin:json/recommended'
    ],
    rules: {
        'json/*': ['error', 'allowComments']
    },
    settings: {}
};

module.exports = config;
