import { connect } from "react-redux";
import { setExpanseDataLocation } from "../actions";
import ExpanseDataForm from "../components/ExpanseDataForm";

const mapStateToProps = (state: any) => {
  return {
    dataLocation: state.expanse.dataLocation ? state.expanse.dataLocation : ""
  };
};

const mapDispatchToProps = (dispatch: any) => ({
  onSave: (dataLocation: any) => dispatch(setExpanseDataLocation(dataLocation))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ExpanseDataForm);
