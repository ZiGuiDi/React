import React from "react";
import ReactDOM from 'react-dom/client';
import App from "./App";
import store from "./redux/store";
import { Provider } from "react-redux"
const root = ReactDOM.createRoot(document.getElementById("root"));
//Provider可以将App中的所有容器组件都传入store
root.render(<Provider store={store}><App /></Provider>);


