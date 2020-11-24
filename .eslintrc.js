module.exports = {
    parser: 'babel-eslint',
    parserOptions: {
        ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
        sourceType: 'module', // Allows for the use of imports
    },
    env: {
        es6: true,
        browser: true,
    },
    extends: [
        'eslint:recommended',
        'plugin:prettier/recommended',
    ],
    plugins: ['prettier', 'svelte3'],
    overrides: [
        {
            files: ['**/*.svelte'],
            processor: 'svelte3/svelte3',
        },
    ],
    rules: {
        "indent": ["error", 4],
        "no-console": ["error", { "allow": ["error", "warn"]}],
        'prettier/prettier': 'error',
    },
};
