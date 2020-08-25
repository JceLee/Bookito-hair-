const initialState = {
    signedInUser: null,
    token: null
};

export default function signIn(state = initialState, action) {
    switch(action.type) {
        case "SIGN_IN_WITH_GOOGLE": {
            return {
                signedInUser: action.signedInUser,
                token: action.token,
            };
        }
        case "SIGN_IN_WITH_FACEBOOK": {
            return {
                signedInUser: action.signedInUser,
                token: action.token,
            };
        }
        case "SIGN_IN_WITH_APPLE": {
            return {
                signedInUser: action.signedInUser,
                token: action.token,
            };
        }
        default: {
            return state;
        }
    }
}