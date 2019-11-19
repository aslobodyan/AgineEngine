const SET_TEXT = 'SET-TEXT';
const SELECT_TEXT = 'SELECT-TEXT';
const CHANGE_TEXT = 'CHANGE-TEXT';
const UPDATE_BOLD = 'UPDATE-BOLD';
const UPDATE_ITALIC = 'UPDATE-ITALIC';
const UPDATE_UNDERLINE = 'UPDATE-UNDERLINE';

let initialState = {
    text: '',
    correctedText: '',

    selectedActiveText: '',
    selectedActiveStart: null,
    selectedActiveEnd: null,

    allTextBeforeSelectionArr: [],
    allTextAfterSelectionArr: [],

    allTextBeforeSelection: '',
    allTextAfterSelection: '',

    wordBeforeSelection: '',
    wordAfterSelection: '',

    isBold: true,
    isItalic: true,
    isUnderline: true
};

const SelectedTextReducer = (state = initialState, action) => {
    const getTextWithoutFormatting = marker => {
        return  state.allTextBeforeSelection + ' ' + state.wordBeforeSelection.replace('[' + marker + ']', '') +
                state.selectedActiveText +
                state.wordAfterSelection.replace('[/' + marker + ']', '') + ' ' + state.allTextAfterSelection;
    };

    const getTextWithFormatting = marker => {
        return  state.allTextBeforeSelection + ' ' + state.wordBeforeSelection +
                '[' + marker + ']' + state.selectedActiveText + '[/' + marker + ']' +
                state.wordAfterSelection + ' ' + state.allTextAfterSelection;
    };

    switch (action.type) {
        case SET_TEXT:
            return {
                ...state,
                text: action.text,
                correctedText: action.text
            };

        case SELECT_TEXT:
            let allTextBeforeSelection = state.text.substring(0, action.selectedActiveStart);
            let allTextBeforeSelectionArr = allTextBeforeSelection.split(' ');
            let wordBeforeSelection = allTextBeforeSelectionArr[ allTextBeforeSelectionArr.length - 1 ];

            //  Delete last Element in Arr
            allTextBeforeSelectionArr.length--;

            let allTextAfterSelection = state.text.substring(action.selectedActiveEnd);
            let allTextAfterSelectionArr = allTextAfterSelection.split(' ');
            let wordAfterSelection = allTextAfterSelectionArr[ 0 ];

            //  Delete first Element in Arr
            allTextAfterSelectionArr.splice(0, 1);

            return {
                ...state,

                allTextBeforeSelection: allTextBeforeSelectionArr.join(' '),
                allTextAfterSelection: allTextAfterSelectionArr.join(' '),

                wordBeforeSelection: wordBeforeSelection,
                wordAfterSelection: wordAfterSelection,

                selectedActiveText: state.text.slice(action.selectedActiveStart, action.selectedActiveEnd),
                selectedActiveStart: action.selectedActiveStart,
                selectedActiveEnd: action.selectedActiveEnd,

                isBold: wordBeforeSelection.includes('[b]'),
                isItalic: wordBeforeSelection.includes('[i]'),
                isUnderline: wordBeforeSelection.includes('[u]')
            };

        case CHANGE_TEXT:
            return {
                ...state,
                text: action.text,
                selectedActiveText: '',
                correctedText: action.text
            };

        case UPDATE_BOLD:
            let textBold = state.isBold ? getTextWithoutFormatting('b') : getTextWithFormatting('b');
            let modifiedTextBold = textBold.replace(/\[/g, '<').replace(/\]/g, '>');

            return {
                ...state,
                text: textBold,
                correctedText: modifiedTextBold
            };

        case UPDATE_ITALIC:
            let textItalic = state.isItalic ? getTextWithoutFormatting('i') : getTextWithFormatting('i');
            let modifiedTextItalic = textItalic.replace(/\[/g, '<').replace(/\]/g, '>');

            return {
                ...state,
                text: textItalic,
                correctedText: modifiedTextItalic
            };

        case UPDATE_UNDERLINE:
            let textUnderline = state.isUnderline ? getTextWithoutFormatting('u') : getTextWithFormatting('u');
            let modifiedTextUnderline = textUnderline.replace(/\[/g, '<').replace(/\]/g, '>');

            return {
                ...state,
                text: textUnderline,
                correctedText: modifiedTextUnderline
            };

        default: break;
    }

    return state;
};

export const setTextAC = text => ({ type: SET_TEXT, text: text});
export const selectTextAC = (selectedActiveStart, selectedActiveEnd) => ({
    type: SELECT_TEXT,
    selectedActiveStart: selectedActiveStart,
    selectedActiveEnd: selectedActiveEnd
});
export const changeTextAC = text => ({ type: CHANGE_TEXT, text: text});
export const updateTextBoldAC = () => ({ type: UPDATE_BOLD });
export const updateTextItalicAC = () => ({ type: UPDATE_ITALIC });
export const updateTextUnderlineAC = () => ({ type: UPDATE_UNDERLINE });

export default SelectedTextReducer;
