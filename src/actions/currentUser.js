const SIGN_IN_WITH_GOOGLE = "SIGN_IN_WITH_GOOGLE";
const SIGN_IN_WITH_FACEBOOK = "SIGN_IN_WITH_FACEBOOK";
const SIGN_IN_WITH_APPLE = "SIGN_IN_WITH_APPLE";
const REFRESH = "SIGN_IN_WITH_APPLE";
const SIGN_OUT = "SIGN_OUT";

export const sign_in_with_google = (signedInUser) => ({
  type: SIGN_IN_WITH_GOOGLE,
  signedInUser: signedInUser,
});

export const sign_in_with_facebook = (signedInUser) => ({
  type: SIGN_IN_WITH_FACEBOOK,
  signedInUser: signedInUser,
});

export const sign_in_with_apple = (signedInUser) => ({
  type: SIGN_IN_WITH_APPLE,
  signedInUser: signedInUser,
});

export const refresh = (signedInUser) => ({
  type: REFRESH,
  signedInUser: signedInUser,
});

export const sign_out = (signedInUser) => ({
  type: SIGN_OUT,
  signedInUser: signedInUser,
});
