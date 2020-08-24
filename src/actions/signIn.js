export const SIGN_IN_WITH_GOOGLE = 'SIGN_IN_WITH_GOOGLE';
export const SIGN_IN_WITH_FACEBOOK = 'SIGN_IN_WITH_FACEBOOK';
export const SIGN_IN_WITH_APPLE = 'SIGN_IN_WITH_APPLE';

export const sign_in_with_google = (signedInUser) => ({
    type : 'SIGN_IN_WITH_GOOGLE',
    signedInUser : signedInUser
});

export const sign_in_with_facebook = (signedInUser) => ({
    type : 'SIGN_IN_WITH_FACEBOOK',
    signedInUser : signedInUser
});

export const sign_in_with_apple = (signedInUser) => ({
    type : 'SIGN_IN_WITH_APPLE',
    signedInUser : signedInUser
});