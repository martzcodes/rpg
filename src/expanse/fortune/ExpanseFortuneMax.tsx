import { connect } from "react-redux";
import { setExpanseMaxFortune, setExpanseCurrentFortune } from "../../actions";
import ExpanseFortuneMaxForm from "./ExpanseFortuneMaxForm";

const mapStateToProps = (state: any) => {
  return {
    currentFortune: state.expanse.currentFortune
      ? state.expanse.currentFortune
      : 0,
    maxFortune: state.expanse.maxFortune ? state.expanse.maxFortune : 0
  };
};

const mapDispatchToProps = (dispatch: any) => ({
  onSave: (maxFortune: number, currentFortune: number) => {
    dispatch(setExpanseMaxFortune(maxFortune));
    dispatch(setExpanseCurrentFortune(currentFortune));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ExpanseFortuneMaxForm);
