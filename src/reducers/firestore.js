const initialState = {
  users: [],
  designers: [],
  appointments: [],
  reviews: [],
};

export default function firestore(state = initialState, action) {
  switch (action.type) {
    case "ADD_DESIGNERS": {
      return state;
    }
    case "LOAD_DESIGNERS": {
      return {
        designers: action.database,
      };
    }
    case "UPDATE_DESIGNERS": {
      return {
        designers: action.database,
      };
    }
    default: {
      return state;
    }
  }
}
