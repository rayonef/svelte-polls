module.exports = {
    semi: true,
    trailingComma: 'all',
    singleQuote: true,
    tabWidth: 4,
    svelteSortOrder: 'scripts-markup-styles',
    svelteBracketNewLine: true,
    svelteAllowShorthand: false,
    overrides: [
        {
            files: ['.prettierrc', '.eslintrc', '.babelrc', '.stylelintrc'],
            options: {
                parser: 'json',
            },
        },
        {
            files: ['*.svelte'],
            processor: 'svelte3/svelte3',
        },
        {
            files: ['package.json'],
            options: {
                printWidth: 180,
            },
        },
    ],
};
