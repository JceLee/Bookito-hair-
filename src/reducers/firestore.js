const initialState = {
    users: [],
    designers: ["Babo"],
    appointments: [],
    reviews: []
};

export default function firestore(state = initialState, action) {
    console.log("babo1");
    console.log(action.database);
    console.log("babo2");
        switch(action.type) {
            case "ADD_DESIGNERS": {
                return state
                ;
            }
            case "LOAD_DESIGNERS": {
                return {
                    designers: action.database,
                };
            }
            default: {
                return state;
            }
        }
}