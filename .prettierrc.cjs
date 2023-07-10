const config = {
    arrowParens: 'avoid',
    bracketSpacing: false,
    singleQuote: true,
    printWidth: 80,
    svelteSortOrder: 'options-scripts-markup-styles',
    trailingComma: 'none',
    plugins: ['prettier-plugin-svelte'],
    overrides: [
        {
            files: ['*.svelte', '*.html'],
            options: {
                printWidth: 120
            }
        },
        {
            files: [
                '*.json',
                'postcss.config.cjs',
                'vite.config.ts',
                'svelte.config.js',
                'tailwind.config.cjs',
                'stylelint.config.cjs'
            ],
            options: {
                printWidth: 150
            }
        },
        {
            files: ['*.json'],
            options: {
                parser: 'json'
            }
        }
    ]
};

module.exports = config;
