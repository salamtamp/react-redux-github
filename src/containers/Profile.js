import { connect } from "react-redux";
import Profile from "../components/Profile";

const mapStateToProps = ({ username, profile }) => ({ username, profile });
export default connect(mapStateToProps)(Profile);
