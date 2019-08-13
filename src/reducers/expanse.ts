const expanse = (state = {}, action: any) => {
  switch (action.type) {
    case "SET_EXPANSE_CHARACTER":
      console.log(action);
      return {
        ...state,
        name: action.name,
        maxFortune: action.maxFortune
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
    case "SET_EXPANSE_CURRENT_FORTUNE":
      return {
        ...state,
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
