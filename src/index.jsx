import React from "react"; // nạp thư viện react
import ReactDOM from "react-dom"; // nạp thư viện react-dom
import "./index.css";
import "./index.sass";
import faceIcon from "./assets/icons/icons-facebook.png";
// Tạo component App
function App() {
  return (
    <div>
      <h1>Thực hành webpack!</h1>
      <h1>web server dev!</h1>
      <img src={faceIcon} alt="faceicon" />
    </div>
  );
}

// Render component App vào #root element
ReactDOM.render(<App />, document.getElementById("root"));
