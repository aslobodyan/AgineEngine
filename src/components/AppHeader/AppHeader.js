import React from 'react';
import css from "./AppHeader.module.css";

const AppHeader = () => {
    return (
        <header className={css.headerWrapper}>
            <h1 className={css.textStyle}>Simple Text Editor</h1>
        </header>
    );
};

export default AppHeader;
