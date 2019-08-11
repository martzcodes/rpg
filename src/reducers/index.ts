import { combineReducers } from "redux";
import rolls from "./rolls";
import discord from "./discord";
import expanse from "./expanse";

export default combineReducers({
  rolls: rolls as any,
  discord,
  expanse
});
