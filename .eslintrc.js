module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "standard-with-typescript",
        "plugin:react/recommended"
    ],
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
    "parserOptions": {
        parser: '@typescript-eslint/parser',
        project: './tsconfig.json',
        tsconfigRootDir: __dirname,
    },
    "plugins": [
        "react"
    ],
    "rules": {
        'react/jsx-indent': [2, 4],
        indent: [2, 4],
        'react/jsx-filename-extension': [2, {extensions: ['.js', '.jsx', '.ts', '.tsx']}],
        'import/no-unresolved': 'off',
        'import/prefer-default-export': 'off',
        "@typescript-eslint/strict-boolean-expressions": "warn",
        '@typescript-eslint/explicit-function-return-type': 'off',
        'no-unused-vars': 'warn',
        "react/react-in-jsx-scope": "off"
    }
}
