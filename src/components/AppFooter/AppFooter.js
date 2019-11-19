import React from 'react';
import css from "./AppFooter.module.css";

const AppFooter = () => {
    let currentYear =  (new Date()).getFullYear();

    return (
        <footer className={css.footerWrapper}>
            <span className={css.footerText}>{currentYear} - Agile Engine. All rights reserved.</span>
        </footer>
    );
};

export default AppFooter;
