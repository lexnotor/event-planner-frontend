module.exports = {
    extends: ["next", "turbo", "prettier"],
    rules: {
        "@next/next/no-html-link-for-pages": "off",
        "react/no-unescaped-entities": 0,
        "no-unused-vars": "warn",
    },
    parserOptions: {
        babelOptions: {
            presets: [require.resolve("next/babel")],
        },
    },
};
