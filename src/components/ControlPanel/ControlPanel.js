import React from 'react';
import css from './ControlPanel.module.css';

const ControlPanel = props => {
    let onBoldHandler = () => {
        props.updateTextBold();
    };

    let onItalicHandler = () => {
        props.updateTextItalic();
    };

    let onUnderlineHandler = () => {
        props.updateTextUnderline();
    };

    return (
        <div className={css.controlPanelWrapper}>
            <div>
                <button className={css.formatBtn} type="button"
                        disabled={!props.selectedText.length}
                        onClick={onBoldHandler}><b>B</b></button>
                <button className={css.formatBtn} type="button"
                        disabled={!props.selectedText.length}
                        onClick={onItalicHandler}><i>I</i></button>
                <button className={css.formatBtn} type="button"
                        disabled={!props.selectedText.length}
                        onClick={onUnderlineHandler}><u>U</u></button>
            </div>
        </div>
    )
};

export default ControlPanel;
