import { connect } from "react-redux";
import { setExpanseCharacter } from "../../actions";
import ExpanseCharacterForm from "./ExpanseCharacterForm";

const mapStateToProps = (state: any) => {
  return {
    name: state.expanse.name ? state.expanse.name : "",
    maxFortune: state.expanse.maxFortune ? state.expanse.maxFortune : 0
  };
};

const mapDispatchToProps = (dispatch: any) => ({
  onSave: (name: string, maxFortune: number) =>
    dispatch(setExpanseCharacter(name, maxFortune))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ExpanseCharacterForm);
