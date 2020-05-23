import { connect } from "react-redux";
import * as authActions from "./actions";

function mapStateToProps(state) {
    return {
      credentials: state.auth.credentials,
      credentialsErro: state.auth.credentialsErro,
      authenticated: state.auth.status === "SESSION_STARTED",
      formAccountErro: state.auth.formAccountErro,
    };
  }
  
  function mapDispatchToProps(dispatch) {
    return {
      initSession: () => (dispatch(authActions.initSession())),
      updateCredentials: (credentials) => dispatch(authActions.updateCredentials(credentials)),
      updateRegister: (item) => dispatch(authActions.updateRegister(item)),
      updateStatus: (status) => dispatch(authActions.updateStatus(status)),
      signIn: () => dispatch(authActions.signIn()),
      createAccount: (newAccountForm) => dispatch(authActions.createAccount(newAccountForm)),
    };
  }

export default function accountConnect(Component) {
    return connect(mapStateToProps, mapDispatchToProps)(Component)
}