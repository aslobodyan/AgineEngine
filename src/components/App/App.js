import React from 'react';
import css from './App.module.css';
import AppHeader from "../AppHeader/AppHeader";
import AppBody from "../AppBody/AppBody";
import AppFooter from "../AppFooter/AppFooter";

const App = () => {
    return (
        <div className={css.App}>
            <AppHeader />
            <AppBody />
            <AppFooter />
        </div>
    );
};

export default App;
