import React from "react";
import Hello from "./Component/Hello";
import Login from "./Component/Login";

class App extends React.Component {
    render() {
        return (
            <div>
                <Hello />
                <Login />

            </div>
        )
    }
}
export default App