const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const VENDOR_LIBS = ["react", "react-dom"]; // những dependencies libs không thay đổi

module.exports = {
  entry: {
    bundle: "./src/index.js",
    vendor: VENDOR_LIBS,
  },
  // Dẫn tới file index.js ta đã tạo, lần đầu vào trang web => tiến hành tải bandle.js và vendor.js về và lưu cache.
  // Các lần sau bundle.js chứa các component nội dung thay đổi => luôn tải về để cập nhật lại nội dung, vendor: chứa các thư viện luôn giữ nguyên , lưu cache và lấy trong cache ra dùng.
  output: {
    path: path.join(__dirname, "/build"), // Thư mục chứa file được build ra
    filename: "[name].js", // Tên file được build ra
  },
  module: {
    rules: [
      {
        test: /\.js$|\.jsx$/, // Sẽ sử dụng babel-loader cho những file .js
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
    new MiniCssExtractPlugin({
      filename: "style.css",
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
  // optimize để bundle.js không load các thư viện của vendor một lần nữa. gây nặng file bundle
  optimization: {
    splitChunks: {
      chunks: "all",
    },
  },
};
