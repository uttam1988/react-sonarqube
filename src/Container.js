import { connect } from "react-redux";
import App from "./components/App";
import { getUserDetails, clearUserDetails } from "./Actions";

export const mapStateToProps = state => ({
  departments: state.departments,
  users: state.users
});

export const mapDispatchToProps = {
  getUserDetails,
  clearUserDetails
};

export const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
