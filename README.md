# react-webpack

## Khởi tạo dự án
##### npm init
##### Cài đặt webpack: npm install webpack webpack-cli --save-dev
##### Cài đặt React và React-DOM: npm install react@17.0.2 react-dom@17.0.2 --save
##### Cài đặt Babel: npm install @babel/core babel-loader @babel/preset-env @babel/preset-react --save-dev
##### Tạo index.html: Tại thư mục gốc của dự án hãy tạo file public/index.html
##### Tạo file index.js: Tại thư mục gốc của dự án hãy tạo file src/index.js

## Cấu hình webpack
##### Cài đặt CSS-Loader và Style-Loader: npm install css-loader style-loader --save-dev
##### Tạo webpack.config.js: Tạo file webpack.config.js tại thư mục gốc của dự án
##### Tạo file .babelrc: File .babelrc dùng để cấu hình cho thư viện Babel.
##### Cài đặt html-webpack-plugin: npm install html-webpack-plugin --save-dev
##### Tiếp theo ta đi update cấu hình Webpack để thêm html-webpack-plugin vào dự án.
##### Cài đặt webpack-dev-server: npm install webpack-dev-server --save-dev
##### Thêm scripts cho dự án: "start": "webpack-dev-server --mode development --hot --port 3000", "build": "webpack --mode production"
##### Chạy dự án: npm start
