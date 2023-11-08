// react
import React from "react";
import ReactDOM from "react-dom";
// components
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./component/Main";

import App from "./App";
// css
import './style.css';

function App() {
    return (
        <div>
            <Header />
            <Main />
            <Footer />
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById("root"));
