
module.exports = [
    {
        files: ["src/scripts/**/*.js"],
        languageOptions: {
            ecmaVersion: 2022,
            sourceType: "script",
            globals: {
                document: "readonly",
                localStorage: "readonly",
                alert: "readonly"
            }
        },
        rules: {
            "no-unused-vars": "error",
            "no-undef": "error"
        }
    }
];
