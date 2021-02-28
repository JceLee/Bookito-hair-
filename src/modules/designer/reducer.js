const initialState = { designerList: [], error: null };

export default function designersReducer(state = initialState, action) {
  switch (action.type) {
    case "designers/LOAD_SUCCESS": {
      return { ...state, designerList: action.payload };
    }
    case "designers/LOAD_FAILURE": {
      return {
        ...state,
        error: action.payload,
      };
    }
    case "designers/UPDATE_DATA": {
      return { ...state, designerList: action.payload };
    }
    default: {
      return state;
    }
  }
}
