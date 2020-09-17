const initialState = {
  currentUser: {uid: "DO NOT DELETE IT - KANGMIN"},
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
      return {
        currentUser: action.signedInUser,
      };
    }
    default: {
      return state;
    }
  }
}
