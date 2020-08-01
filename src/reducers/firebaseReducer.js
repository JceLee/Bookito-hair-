const initialState = {
    users: [],
    designers: ["Babo"],
    appointments: [],
    reviews: []
};

export default function firebaseReducer(state = initialState, action) {
        switch(action.type) {
            case "ADD_DESIGNERS": {
                return state
                ;
            }
            case "LOAD_DESIGNERS": {
                return {
                    designers: action.db,
                };
            }
            default: {
                return state;
            }
        }
}