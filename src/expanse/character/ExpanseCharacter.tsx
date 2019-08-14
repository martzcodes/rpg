import { connect } from "react-redux";
import { setExpanseCharacter } from "../../actions";
import ExpanseCharacterForm from "./ExpanseCharacterForm";

const mapStateToProps = (state: any) => {
  return {
    name: state.expanse.name ? state.expanse.name : ""
  };
};

const mapDispatchToProps = (dispatch: any) => ({
  onSave: (name: string) => dispatch(setExpanseCharacter(name))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ExpanseCharacterForm);
