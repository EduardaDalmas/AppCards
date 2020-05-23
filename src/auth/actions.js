import { AsyncStorage } from 'react-native';
import api from '../services/api';
import config from '../services/config';

const { url } = config;

export function updateCredentials(credentials) {
    return {
        type: "UPDATE_CREDENTIALS", 
        credentials,
    };
}

export function updateRegister(item) {
    return {
        type: "UPDATE_REGISTER",
        item,
    };
}

export function updateStatus(status) {
    return {
        type: 'UPDATE_STATUS',
        status,
    }
}

export function signIn() {
    return (dispatch, getState) => {
        const { credentials } = getState().auth;
        return api.post(url.signIn, credentials)
        .then(({ data }) => {
            const { name, email } = data.user;
            dispatch(updateRegister({ profile: { name, email }}));
            AsyncStorage.setItem('token', data.token); 
            dispatch(updateStatus("SESSION_STARTED"));
        })
        .catch((Error) => {
            dispatch(updateRegister({ credentialsErro: true }));
            dispatch(updateStatus("NO_SESSION"));
        });
    };
}

export function initSession() {
    return (dispatch) => {
        return AsyncStorage.getItem('token')
            .then(token => dispatch(checkAuth(token)))
            .catch(error => dispatch(updateStatus('NO_SESSION')));
    };
}

export function checkAuth(token) {
    return (dispatch) => {
        setTimeout(() => {
            dispatch(updateStatus('NO_SESSION'))
        }, 2000);
    };
}

export function createAccount(newAccountForm) {
    return (dispatch) => {
        return api.post(url.createAccount, newAccountForm)
            .then(({ data }) => {
                console.log('foi', data);
                const {name, email } = data;
                dispatch(updateRegister({ profile: { name, email }}));
                dispatch(updateStatus("CREATE_SUCCESS"));
            })
            .catch(error => {
                dispatch(updateStatus("CREATED_FAIL"));
                console.log('n foi', error);
            });
    };
}
