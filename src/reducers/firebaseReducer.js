const initialState = {
    database: [
        {id: "1", name: "kangmin"},
        {id: "2", name: "kangmin"},
        {id: "3", name: "kangmin"},
    ],
    clients: [],
    designers: [],
    appointments: [],
    reviews: []
};

export default function firebaseReducer(state = initialState, action) {
    return state
}