import { connect } from "react-redux";
import { setExpanseCharacter } from "../../actions";
import ExpanseCharacterForm from "./ExpanseCharacterForm";
import ICharacterStats from "../ICharacterStats";

const mapStateToProps = (state: any) => {
  return {
    name: state.expanse.name ? state.expanse.name : "",
    accuracy: state.expanse.accuracy ? state.expanse.accuracy : 0,
    communication: state.expanse.communication
      ? state.expanse.communication
      : 0,
    constitution: state.expanse.constitution ? state.expanse.constitution : 0,
    dexterity: state.expanse.dexterity ? state.expanse.dexterity : 0,
    fighting: state.expanse.fighting ? state.expanse.fighting : 0,
    intelligence: state.expanse.intelligence ? state.expanse.intelligence : 0,
    perception: state.expanse.perception ? state.expanse.perception : 0,
    strength: state.expanse.strength ? state.expanse.strength : 0,
    willpower: state.expanse.willpower ? state.expanse.willpower : 0
  };
};

const mapDispatchToProps = (dispatch: any) => ({
  onSave: (character: ICharacterStats) =>
    dispatch(setExpanseCharacter(character))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ExpanseCharacterForm);
