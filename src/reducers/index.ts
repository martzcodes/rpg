import { combineReducers } from "redux";
import rolls from "./rolls";
import discord from "./discord";

export default combineReducers({
  rolls: rolls as any,
  discord
});
