module.exports = {
    parser: 'babel-eslint',
    parserOptions: {
        sourceType: 'module',
    },
    plugins: ['prettier', 'svelte3'],
    extends: ['eslint:recommended', 'plugin:prettier/recommended'],
    rules: {
        'prettier/prettier': 'error',
    },
};
