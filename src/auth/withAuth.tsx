import React from "react";
import { connect } from "react-redux";
import { checkAuth } from "../redux/actions/auth";
// import LoadingIndicator from "./LoadingIndicator";
import Login from "../pages/common/Login";

function withAuth(WrappedComponent: JSX.Element) {
  class Wrapper extends React.Component {
    componentDidMount() {
      this.props.checkAuth().then((result) => console.log(result));
    }

    render() {
      if (!this.props.authChecked) {
        // return <LoadingIndicator />;
      } else if (!this.props.loggedIn && this.props.protected) {
        return (
          <>
            <Login />
            <p>You need to login to view this page.</p>
          </>
        );
      } else {
        return <WrappedComponent {...this.props} />;
      }
    }
  }

  const mapStateToProps = ({ authorization: { authChecked, loggedIn, currentUser } }) => ({
    authChecked,
    loggedIn,
    currentUser,
  });

  const mapDispatchToProps = (dispatch) => ({
    checkAuth: () => dispatch(checkAuth()),
  });

  return connect(mapStateToProps, mapDispatchToProps)(Wrapper);
}

export default withAuth;
