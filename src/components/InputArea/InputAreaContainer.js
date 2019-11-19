import {connect} from "react-redux";
import InputArea from "./InputArea";
import { setTextAC, selectTextAC, changeTextAC } from "../../redux/reducers/SelectedTextReducer";

const mapStateToProps = state => {
    return {
        text: state.SelectedTextReducer.text,
        correctedText: state.SelectedTextReducer.correctedText
    }
};

const mapDispatchToProps = dispatch => {
    return {
        setLoadedText: text => {
            dispatch(setTextAC(text))
        },
        changeText: text => {
            dispatch(changeTextAC(text))
        },
        selectText: (selectedActiveStart, selectedActiveEnd) => {
            dispatch(selectTextAC(selectedActiveStart, selectedActiveEnd))
        }
    }
};

const InputAreaContainer = connect(mapStateToProps, mapDispatchToProps)(InputArea);

export default InputAreaContainer;
