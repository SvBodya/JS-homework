import * as constants from "../constants"

const initialState = {
    style: {
        background: ""
    }
}

export const colorsReducer = (state=initialState, action) => {
    switch (action.type) {
        case constants.COLOR_RED: {
            return {
                style: {
                    background: "red"
                }
            }
        }
        case constants.COLOR_GREEN: {
            return {
                style: {
                    background: "green"
                }
            }
        }
        case constants.COLOR_BLUE: {
            return {
                style: {
                    background: "blue"
                }
            }
        }
        default: return state;
    }
}