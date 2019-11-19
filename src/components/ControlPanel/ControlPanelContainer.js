import {connect} from "react-redux";
import ControlPanel from "./ControlPanel";
import {
    updateTextBoldAC,
    updateTextItalicAC,
    updateTextUnderlineAC
} from "../../redux/reducers/SelectedTextReducer";

const mapStateToProps = state => {
    return {
        selectedText: state.SelectedTextReducer.selectedActiveText
    }
};

const mapDispatchToProps = dispatch => {
    return {
        updateTextBold: () => {
            dispatch(updateTextBoldAC())
        },
        updateTextItalic: () => {
            dispatch(updateTextItalicAC())
        },
        updateTextUnderline: () => {
            dispatch(updateTextUnderlineAC())
        }
    }
};

const ControlPanelContainer = connect(mapStateToProps, mapDispatchToProps)(ControlPanel);

export default ControlPanelContainer;