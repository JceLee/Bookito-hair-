const initialState = {
    user: null
};

export default function signIn(state = initialState, action) {
    switch(action.type) {
        case "SIGN_IN_WITH_GOOGLE": {
            return state;
        }
        default: {
            return state;
        }
    }
}