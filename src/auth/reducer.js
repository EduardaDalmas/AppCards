const estadoInicial = {
    status: "NOT_INITIALIZED",
    authenticated: false,
    token: null,
    credentials: {
        email: "",
        password: ""
    },
    credentialsErro: false,
    authenticated: false,
    formAccountErro: false,
    profile: {
        email: '',
        name: '',
    }
};

function account (state = estadoInicial, action) {
    switch (action.type) {
        case "UPDATE_CREDENTIALS":
            return {
                ...state,
                credentials: action.credentials
            };
        case "UPDATE_REGISTER": 
            return {
                ...state,
                ...action.item,
            };
        case "SIGN_IN":
            return {
                ...state,
                authenticated: true,
            }
        case "UPDATE_STATUS": 
            return{
                ...state,
                status: action.status,
            };
        default:
            return state;
    }
}

export default account;