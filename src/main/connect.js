import { connect } from "react-redux";
import * as authActions from "./actions";

function mapStateToProps(state) {
    return {
      status: state.cards.status,
      cards: state.cards.cards
    };
  }
  
  function mapDispatchToProps(dispatch) {
    return {
        updateRegister: (item) => dispatch(authActions.updateRegister(item)),
        updateStatus: (status) => dispatch(authActions.updateStatus(status)),
        getCards: () => dispatch(mainActions.getCards()),
        cardCreate: (cards) => dispatch(mainActions.cardCreate()),
        cardDelete: (cards) => dispatch(mainActions.cardsDeletee()),
    };
  }

export default function cardsConnect(Component) {
    return connect(mapStateToProps, mapDispatchToProps)(Component)
}