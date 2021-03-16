import React from "react";
import {connect} from "react-redux";
import {actionGreen, actionBlue, actionRed} from "../actions/chngcolors";
import * as constants from "../constants"


const Colors = (props) => {
    return (
        <div>
            <button onClick={props.actionGreen} style={{background: props.background || constants.COLOR_GREEN}}>Green
            </button>
            <button onClick={props.actionRed} style={{background: props.background || constants.COLOR_RED}}>Red</button>
            <button onClick={props.actionBlue} style={{background: props.background || constants.COLOR_BLUE}}>Blue
            </button>
        </div>
    );
};

const mapStateToProps = (state) => ({
background: state.style.background
});

const mapDispatchToProps =
{
    actionGreen,
        actionBlue,
        actionRed
}

export const ColorContainer = connect(mapStateToProps, mapDispatchToProps)(Colors);
