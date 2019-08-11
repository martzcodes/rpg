const expanse = (state = {}, action: any) => {
  switch (action.type) {
    case "SET_EXPANSE_DATA_LOCATION":
      return {
        dataLocation: action.dataLocation
      };
    case "SET_EXPANSE_DATA":
      return {
        dataLocation: action.dataLocation,
        data: action.data
      };
    default:
      return state;
  }
};

export default expanse;
