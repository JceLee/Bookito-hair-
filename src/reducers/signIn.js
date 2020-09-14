const initialState = {
  currentUser: null,
};

export default function signIn(state = initialState, action) {
  switch (action.type) {
    case "SIGN_IN_WITH_GOOGLE": {
      return {
        currentUser: action.signedInUser,
      };
    }
    case "SIGN_IN_WITH_FACEBOOK": {
      return {
        currentUser: action.signedInUser,
      };
    }
    case "SIGN_IN_WITH_APPLE": {
      return {
        currentUser: action.signedInUser,
      };
    }
    case "SIGN_OUT": {
      console.log("5");
      return {
        currentUser: action.signedInUser,
      };
    }
    default: {
      return state;
    }
  }
}
