import { connect } from "react-redux";
import * as authActions from "./actions";

function mapStateToProps(state) {
    return {
      cards: state.cards.cards,
    };
  }
  
  function mapDispatchToProps(dispatch) {
    return {
        updateRegister: (item) => dispatch(mainActions.updateRegister(item)),
        updateStatus: (status) => dispatch(mainActions.updateStatus(status)),
        getCards: () => dispatch(mainActions.getCards()),
        cardCreate: (cards) => dispatch(mainActions.cardCreate()),
        cardDelete: (cards) => dispatch(mainActions.cardsDelete()),
    };
  }

export default function cardsConnect(Component) {
    return connect(mapStateToProps, mapDispatchToProps)(Component)
}