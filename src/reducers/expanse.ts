const expanse = (state = {}, action: any) => {
  switch (action.type) {
    case "SET_EXPANSE_CHARACTER":
      return {
        ...state,
        name: action.character.name,
        accuracy: action.character.accuracy,
        communication: action.character.communication,
        constitution: action.character.constitution,
        dexterity: action.character.dexterity,
        fighting: action.character.fighting,
        intelligence: action.character.intelligence,
        perception: action.character.perception,
        strength: action.character.strength,
        willpower: action.character.willpower
      };
    case "SET_EXPANSE_MAX_FORTUNE":
      if ((state as any).maxFortune !== action.maxFortune) {
        return {
          ...state,
          maxFortune: action.maxFortune,
          currentFortune: action.maxFortune
        };
      } else {
        return {
          ...state
        };
      }
    case "SET_EXPANSE_CURRENT_FORTUNE":
      return {
        ...state,
        currentFortune: action.currentFortune
      };
    case "SET_EXPANSE_ROLL":
      return {
        ...state,
        roll: action.roll,
        dice: action.dice,
        modifier: action.modifier,
        target: action.target,
        sp: action.sp,
        description: action.description
      };
    case "SET_EXPANSE_FORTUNE_SPENT":
      return {
        ...state,
        roll: action.roll,
        dice: action.dice,
        sp: action.sp,
        currentFortune: action.currentFortune
      };
    case "SET_EXPANSE_DATA_LOCATION":
      return {
        ...state,
        dataLocation: action.dataLocation
      };
    case "SET_EXPANSE_DATA":
      return {
        ...state,
        dataLocation: action.dataLocation,
        data: action.data
      };
    default:
      return state;
  }
};

export default expanse;
