module.exports = {
  plugins: ["react"],
  rules: {
    // コンポーネントで使用可能な拡張子として、tsxとjsxを許可する
    "react/jsx-filename-extension": ["error", { "extensions": [".tsx", ".jsx"] }],
    // 関数コンポーネントの宣言にアロー関数を使用する
    "react/function-component-definition": [2, { "namedComponents": "arrow-function" }]
  }
}
