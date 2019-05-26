const discord = (state = {}, action: any) => {
  switch (action.type) {
    case "SET_DISCORD":
      return {
        apiKey: action.apiKey
      };
    default:
      return state;
  }
};

export default discord;
