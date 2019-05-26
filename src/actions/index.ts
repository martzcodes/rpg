import store from "..";
import { sendToDiscord } from "../services/discord";
import { Dice } from "dice-typescript";

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
      msg = `${roll.description}: ${result.renderedExpression} = ${
        result.total
      }`;
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
