const initialState = {
  selectedDesigner: {}
};

export default function selectedDesigner(state = initialState, action) {
  switch (action.type) {
    case "SELECT_DESIGNER": {
      return {
        selectedDesigner: action.designer,
      };
    }
    case "CLEAR_DESIGNER": {
      return {
        selectedDesigner: action.designer,
      };
    }
    default: {
      return state;
    }
  }
}
