const rolls = (state = [], action: any) => {
  switch (action.type) {
    case "ADD_ROLL":
      return [
        ...state,
        {
          id:
            state.length === 0
              ? 0
              : Math.max(
                  ...state.map((val: any) => {
                    console.log(val);
                    return val.id;
                  })
                ) + 1,
          name: action.name,
          roll: action.roll,
          description: action.description,
          character: action.character
        }
      ];
    case "SEND_ROLL":
      return state;

    case "REMOVE_ROLL":
      const newState = Object.assign([], state);
      newState.splice(
        newState.findIndex((val: any) => val.id === action.id),
        1
      );
      return newState;
    default:
      return state;
  }
};

export default rolls;
