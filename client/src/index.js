import React from 'react';
import {createRoot} from 'react-dom/client'
import {store} from "./reducers";
import {Provider} from "react-redux";
import App from "./components/App";



const root = createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <App/>,
    </Provider>
);
