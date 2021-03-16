import {createStore} from "redux";

import {colorsReducer} from "../reducers/ColorChanger";

export const store=createStore(colorsReducer);