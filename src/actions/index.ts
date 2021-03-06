import store from "..";
import { sendToDiscord } from "../services/discord";
import { Dice } from "dice-typescript";
import { retrieveExpanseData } from "../services/expanse";
import ICharacterStats from "../expanse/ICharacterStats";

export const addRoll = ({
  name,
  roll,
  character,
  description
}: {
  name: string;
  roll: string;
  character: string;
  description: string;
}) => ({
  type: "ADD_ROLL",
  name,
  roll,
  character,
  description
});

export const sendRoll = (id: number) => {
  console.log(store.getState());
  const discord: any = store.getState().discord;
  const rollInd = (store.getState().rolls as any).findIndex(
    (roll: any) => roll.id === id
  );
  if (discord.apiKey && rollInd !== -1) {
    const roll: any = (store.getState().rolls as any)[rollInd];
    let msg = `${roll.description}`;
    if (roll.roll) {
      const dice = new Dice();
      const result = dice.roll(roll.roll);
      msg = `${roll.description}: (${roll.roll}) ${
        result.renderedExpression
      } = ${result.total}`;
    }
    sendToDiscord(discord.apiKey, roll.character, msg);
  }
  return {
    type: "SEND_ROLL",
    id
  };
};

export const removeRoll = (id: number) => ({
  type: "REMOVE_ROLL",
  id
});

export const setDiscord = (apiKey: string) => ({
  type: "SET_DISCORD",
  apiKey
});

export const setExpanseCharacter = (character: ICharacterStats) => ({
  type: "SET_EXPANSE_CHARACTER",
  character
});

export const setExpanseMaxFortune = (maxFortune: number) => ({
  type: "SET_EXPANSE_MAX_FORTUNE",
  maxFortune
});

export const setExpanseCurrentFortune = (currentFortune: number) => ({
  type: "SET_EXPANSE_CURRENT_FORTUNE",
  currentFortune
});

export const setExpanseRoll = (
  roll: number,
  dice: any,
  modifier: number,
  target: number,
  sp: number,
  description: string,
  msg: string
) => {
  const discord: any = store.getState().discord;
  const expanse: any = store.getState().expanse;
  if (discord.apiKey) {
    sendToDiscord(discord.apiKey, expanse.name, msg);
  }
  return {
    type: "SET_EXPANSE_ROLL",
    roll,
    dice,
    modifier,
    target,
    sp,
    description
  };
};

export const setExpanseSpent = (
  roll: number,
  dice: any,
  sp: number,
  currentFortune: number,
  msg: string
) => {
  const discord: any = store.getState().discord;
  const expanse: any = store.getState().expanse;
  if (discord.apiKey) {
    sendToDiscord(discord.apiKey, expanse.name, msg);
  }
  return {
    type: "SET_EXPANSE_FORTUNE_SPENT",
    roll,
    dice,
    sp,
    currentFortune
  };
};

export const setExpanseDataLocation = (dataLocation: string) => {
  return function(dispatch: any) {
    return retrieveExpanseData(dataLocation).then((data: any) => {
      dispatch(setExpanseData(dataLocation, data));
    });
  };
};

export const setExpanseData = (dataLocation: string, data: any) => ({
  type: "SET_EXPANSE_DATA",
  dataLocation,
  data
});
