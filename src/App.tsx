import React from "react";
import ReactDOM from "react-dom";
// @ts-ignore
import {Increment} from 'mf1/Increment'
// @ts-ignore
import {Decrement} from 'mf2/Decrement'
// @ts-ignore
import {StoreProvider, useStore} from 'store/store'
import {Header} from "./components/Header";
import "./index.css";

const App = () => {
    return (
        <div className="container">
            <Header />
            <div className='counter'>
                <Increment />
                <Decrement />
            </div>
        </div>
    )
};

ReactDOM.render(
    <StoreProvider>
        <App/>
    </StoreProvider>,
    document.getElementById("app"));
