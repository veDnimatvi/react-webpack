const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: "./src/index.js", // Dẫn tới file index.js ta đã tạo
  output: {
    path: path.join(__dirname, "/build"), // Thư mục chứa file được build ra
    filename: "bundle.js", // Tên file được build ra
  },
  module: {
    rules: [
      {
        test: /\.js$/, // Sẽ sử dụng babel-loader cho những file .js
        exclude: /node_modules/, // Loại trừ thư mục node_modules
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
      {
        test: /\.(sa|sc|c)ss$/, // Sử dụng MiniCssExtractPlugin để build css ra 1 file css riêng mà không phải nằm trong bundle, css-loader cho file .css or .scss .sass
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
      {
        test: /\.(jpe|jp|pn|sv)?g$|\.gif$|\.woff$|\.woff2$|\.eot$|\.ttf$|\.wav$|\.mp3$|\.ico$/,
        use: "file-loader",
      },
    ],
  },
  // Chứa các plugins sẽ cài đặt trong tương lai
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
    new MiniCssExtractPlugin({
      filename: "style.css",
    }),
  ],
};
