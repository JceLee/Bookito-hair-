const initialState = {
    firebaseDB: {},
};

export default function firebase(state = initialState, action) {
    switch(action.type) {
        case "LOAD_FIREBASE": {
            return {
                firebaseDB: action.db,
            };
        }
        default: {
            return state;
        }
    }
}
