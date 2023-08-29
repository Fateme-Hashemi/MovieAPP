import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from 'react-redux';

//ReduxStore
import {store} from "../src/features/store"
ReactDOM.render(
        <Provider store={store}>
                
                <App /> 

        </Provider>
     
, document.getElementById('root'));

