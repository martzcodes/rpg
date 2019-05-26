import { connect } from "react-redux";
import { sendRoll, removeRoll } from "../actions";
import RollList from "../components/RollList";

const getVisibleRolls = (rolls: any) => {
  return rolls;
};

const mapStateToProps = (state: any) => ({
  rolls: getVisibleRolls(state.rolls)
});

const mapDispatchToProps = (dispatch: any) => ({
  sendRoll: (id: any) => dispatch(sendRoll(id)),
  removeRoll: (id: any) => dispatch(removeRoll(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RollList);
