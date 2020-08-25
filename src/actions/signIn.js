export const SIGN_IN_WITH_GOOGLE = 'SIGN_IN_WITH_GOOGLE';
export const SIGN_IN_WITH_FACEBOOK = 'SIGN_IN_WITH_FACEBOOK';
export const SIGN_IN_WITH_APPLE = 'SIGN_IN_WITH_APPLE';

export const sign_in_with_google = (signedInUser, token) => ({
    type : 'SIGN_IN_WITH_GOOGLE',
    signedInUser : signedInUser,
    token : token
});

export const sign_in_with_facebook = (signedInUser, token) => ({
    type : 'SIGN_IN_WITH_FACEBOOK',
    signedInUser : signedInUser,
    token : token
});

export const sign_in_with_apple = (signedInUser, token) => ({
    type : 'SIGN_IN_WITH_APPLE',
    signedInUser : signedInUser,
    token : token
});