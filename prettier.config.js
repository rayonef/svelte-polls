module.exports = {
    semi: true,
    trailingComma: 'all',
    singleQuote: true,
    tabWidth: 4,
    // svelteSortOrder: 'scripts-markup-styles',
    overrides: [
        {
            files: [
                '.prettierrc',
                '.eslintrc',
                '.babelrc',
                '.tern-project',
                '.stylelintrc',
                '.lighthouserc',
            ],
            options: {
                parser: 'json',
            },
        },
        {
            files: ['package.json'],
            options: {
                printWidth: 180,
            },
        },
    ],
};
