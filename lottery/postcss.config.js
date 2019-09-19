module.exports = {
  plugins: {
    autoprefixer: {},
    "postcss-px2rem-exclude": {
        remUnit: 64,  //750的设计稿
        exclude: /node_modules|folder_name/i
    }
}
}
