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
  const snapshot = await userRef.get();
  if (!snapshot.exists) {
    const {email, displayName, photoURL, uid} = user;
    const accountTypes = designerTypes.client;
    const fname = displayName;
    const lname = "";
    const location = "Vancouver, BC, Canada";
    const phone = "";
    const gender = "";
    const hours = {
    };
    const services = {
    };
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
