import { connect } from "react-redux";
import { setVisibilityFilter } from "../actions";
import Link from "../components/Link";

const mapStateToProps = (state: any, ownProps: { filter: string }) => ({
  active: ownProps.filter === state.visibilityFilter,
  filter: ownProps.filter
});

const mapDispatchToProps = (dispatch: any, ownProps: any) => ({
  onClick: () => dispatch(setVisibilityFilter(ownProps.filter))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Link);
