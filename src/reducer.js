import { combineReducers } from 'redux';
import auth from './auth/reducer';
import main from './main/reducer';

const reducer = combineReducers({
    auth,
    main,
});

export default reducer;