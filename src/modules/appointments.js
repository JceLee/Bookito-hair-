const initialState = {
  conformed: [],
  pending: [],
  declined: [],
  done: [],
};

export default function firestore(state = initialState, action) {
  switch (action.type) {
    case "UPDATE_CONFORMED": {
      return {
        conformed: action.updateData,
      };
    }
    case "UPDATE_PENDING": {
      return {
        pending: action.updateData,
      };
    }
    case "UPDATE_DECLINED": {
      return {
        declined: action.updateData,
      };
    }
    case "UPDATE_DONE": {
      return {
        done: action.updateData,
      };
    }
    default: {
      return state;
    }
  }
}
