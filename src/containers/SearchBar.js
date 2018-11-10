import { connect } from "react-redux";
import SearchBar from "../components/SearchBar";
import { setUsername, fetchProfile } from "../actions/profile";

const mapStateToProps = state => ({
  username: state.username,
  profile: state.profile
});

const mapDispatchToProps = dispatch => ({
  setUsername: username => dispatch(setUsername(username)),
  fetchProfile: username => dispatch(fetchProfile(username))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchBar);
