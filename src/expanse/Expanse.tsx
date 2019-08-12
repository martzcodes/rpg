import { connect } from "react-redux";
import { setExpanseDataLocation } from "../actions";
import ExpanseMain from "./ExpanseMain";

const mapStateToProps = (state: any) => {
  return {
    dataLocation: state.expanse.dataLocation ? state.expanse.dataLocation : "",
    data: state.expanse.data ? state.expanse.data : {}
  };
};

const mapDispatchToProps = (dispatch: any) => ({
  onSave: (dataLocation: any) => dispatch(setExpanseDataLocation(dataLocation))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ExpanseMain);
