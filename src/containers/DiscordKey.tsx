import { connect } from "react-redux";
import { sendRoll, removeRoll, setDiscord } from "../actions";
import DiscordKeyForm from "../components/DiscordKeyForm";

const mapStateToProps = (state: any) => {
  return {
    apiKey: state.discord.apiKey ? state.discord.apiKey : ""
  };
};

const mapDispatchToProps = (dispatch: any) => ({
  onSave: (apiKey: any) => dispatch(setDiscord(apiKey))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DiscordKeyForm);
