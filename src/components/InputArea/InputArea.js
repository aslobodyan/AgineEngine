import React from 'react';
import ReactHtmlParser from 'react-html-parser';
import css from './InputArea.module.css';
import getMockText from "../../text.service";

class InputArea extends React.Component {
    componentDidMount() {
        getMockText().then( response => {
            this.props.setLoadedText(response);
        });
    };

    onTextChangeHandler = event => {
        let selectedText = event.currentTarget.value;

        this.props.changeText(selectedText);
    };

    onTextSelectHandler = event => {
        let selectionStart = event.currentTarget.selectionStart;
        let selectionEnd = event.currentTarget.selectionEnd;

        this.props.selectText(selectionStart, selectionEnd);
    };

    render() {
        const props = {
            value: this.props.text,
            className: css.InputArea,
            onChange: this.onTextChangeHandler,
            onDoubleClick: this.onTextSelectHandler
        };
        return (
            <div className={css.InputAreaContainer}>
                <textarea {...props} />
                <div className={css.preview}>{ReactHtmlParser(this.props.correctedText)}</div>
            </div>
        )
    }
}

export default InputArea;
