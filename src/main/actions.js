import { apisAreAvailable } from "expo";

export function updateStatus(status) {
    return {
        type: 'UPDATE_STATUS_CARDS',
        status,
    }
}

export function updateRegister(item) {
    return {
        type: "UPDATE_REGISTER",
        item,
    };
}  

export function getCards(card) {
    return async(dispatch) => {
        const token = await AsyncStorage.getItem('token');
        const config = {
            headers: { Authorization: `Bearer ${token}`},
        };
        return api.get(url.getCards, card, config)
            .then(({data}) => {
                dispatch(updateRegister({ cards: data }));
            })
            .catch((error) => console.log(error));
    };
}

export function cardCreate(card) {
    return async(dispatch) => {
        const token = await AsyncStorage.getItem('token');
        const config = {
            headers: { Authorization: `Bearer ${token}`},
        };
        return api.post(url.cardCreate, card, config)
            .then(({data}) => {
                dispatch(updateRegister({ cards: data }));
                dispatch(updateStatus("CARDS_CREATE_SUCCESS"));
            })
            .catch((error) => {
                dispatch(updateStatus("CARDS_CREATE_FAIL"));
            });
    }
}

export function cardDelete(card) {
    return async(dispatch) => {
        const token = await AsyncStorage.getItem('token');
        const config = {
            headers: { Authorization: `Bearer ${token}`},
        };
        return api.delete(`/cards/${cardId}`, config)
            .then(({data}) => {
                dispatch(updateRegister({ cards: data }));
                dispatch(updateStatus("CARDS_CREATE_SUCCESS"));
            })
            .catch((error) => {
                dispatch(updateStatus("CARDS_CREATE_FAIL"));
            });
    }
}

// export function cardUpdate(card) {
//     return async(dispatch) => {
//         const {id, title, content}
//         const token = await AsyncStorage.getItem('token');
//         const config = {
//             headers: { Authorization: `Bearer ${token}`},
//         };
//         return api.get(`/cards/${id}`,{title, content}, config)
//             .then(({data}) => {
//                 dispatch(updateStatus("CARDS_UPDATE_SUCCESS"));
//             })
//             .catch((error) => {
//                 dispatch(updateStatus("CARDS_UPDATE_SUCCESS"));
//             }
//     } 
// }