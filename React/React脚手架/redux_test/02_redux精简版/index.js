import React from "react";
import ReactDOM from 'react-dom/client';
import App from "./App";
import store from "./redux/store";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
//subscribe当reducer中值发生改变时subscribe方法就会被调用
store.subscribe(() => {
    root.render(<App />);

})