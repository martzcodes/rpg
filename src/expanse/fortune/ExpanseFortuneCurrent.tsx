import { connect } from "react-redux";
import { setExpanseCurrentFortune } from "../../actions";
import ExpanseFortuneCurrentForm from "./ExpanseFortuneCurrentForm";

const mapStateToProps = (state: any) => {
  return {
    currentFortune: state.expanse.currentFortune
      ? state.expanse.currentFortune
      : 0,
    maxFortune: state.expanse.maxFortune ? state.expanse.maxFortune : 0
  };
};

const mapDispatchToProps = (dispatch: any) => ({
  onSave: (currentFortune: number) =>
    dispatch(setExpanseCurrentFortune(currentFortune))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ExpanseFortuneCurrentForm);
