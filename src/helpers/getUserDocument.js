import {firebaseStore} from "../config/fbConfig";
import {designerTypes} from "../constants/designerTypes"

export const getUserDocument = async (uid) => {
  if (!uid) return null;
  try {
    const userDocument = await firebaseStore.doc(`users/${uid}`).get();
    return {
      uid,
      ...userDocument.data(),
    };
  } catch (error) {
    console.error("Error fetching user", error);
  }
};

export const generateUserDocument = async (user) => {
  if (!user) return;
  const userRef = firebaseStore.doc(`users/${user.uid}`);
  const userData = await userRef.get();
  if (!userData.exists) {
    const {email, displayName, photoURL, uid} = user;
    const accountTypes = designerTypes.newClient;
    const fname = displayName;
    const lname = "";
    const location = "";
    const phone = "";
    const gender = "";
    const hours = {};
    const services = {};
    const works = [];
    try {
      await userRef.set({
        accountTypes,
        email,
        photoURL,
        location,
        fname,
        lname,
        phone,
        gender,
        hours,
        services,
        uid,
        works,
      });
      console.log("test");
      console.log(user);
    } catch (error) {
      console.error("Error creating user document", error);
    }
  }
  return getUserDocument(user.uid);
};
