import {firebaseStore} from "../config/fbConfig";

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
        const { email, displayName, photoURL, uid } = user;
        const isDesigner = false;
        const fname = displayName;
        const lname = "";
        const location = "Vancouver, BC, Canada";
        const phone = "";
        const gender = "";
        const hours = {
            Mon: [{ tradingHours: [16, 42], closed: false }],
            Tue: [{ tradingHours: [16, 42], closed: false }],
            Wed: [{ tradingHours: [16, 42], closed: false }],
            Thu: [{ tradingHours: [16, 42], closed: false }],
            Fri: [{ tradingHours: [16, 42], closed: false }],
            Sat: [{ tradingHours: [16, 42], closed: false }],
            Sun: [{ tradingHours: [16, 42], closed: false }],
        };
        const services = {
            Cut: [
                {
                    id: 1,
                    service: "Men Cut",
                    price: 35,
                    description: "The price may differ",
                },
                {
                    id: 2,
                    service: "Women Cut",
                    price: 40,
                    description: "The price may differ",
                },
                {
                    id: 3,
                    service: "Kids Cut",
                    price: 15,
                    description: "The price may differ",
                },
            ],
            Style: [
                {
                    id: 4,
                    service: "Men Style",
                    price: 35,
                    description: "The price may differ",
                },
                {
                    id: 5,
                    service: "Women Style",
                    price: 40,
                    description: "The price may differ",
                },
                {
                    id: 6,
                    service: "Kids Style",
                    price: 15,
                    description: "The price may differ",
                },
            ],
            Perms: [
                {
                    id: 7,
                    service: "Men Perms",
                    price: 35,
                    description: "The price may differ",
                },
                {
                    id: 8,
                    service: "Women Perms",
                    price: 40,
                    description: "The price may differ",
                },
                {
                    id: 9,
                    service: "Kids Perms",
                    price: 15,
                    description: "The price may differ",
                },
            ],
            Colors: [
                {
                    id: 10,
                    service: "Men Colors",
                    price: 35,
                    description: "The price may differ",
                },
                {
                    id: 11,
                    service: "Women Colors",
                    price: 40,
                    description: "The price may differ",
                },
                {
                    id: 12,
                    service: "Kids Colors",
                    price: 15,
                    description: "The price may differ",
                },
            ],
            Clinic: [
                {
                    id: 13,
                    service: "Men Clinic",
                    price: 35,
                    description: "The price may differ",
                },
                {
                    id: 14,
                    service: "Women Clinic",
                    price: 40,
                    description: "The price may differ",
                },
                {
                    id: 15,
                    service: "Kids Clinic",
                    price: 15,
                    description: "The price may differ",
                },
            ],
            Promo: [
                {
                    id: 16,
                    service: "Men Promo",
                    price: 35,
                    description: "The price may differ",
                },
                {
                    id: 17,
                    service: "Women Promo",
                    price: 40,
                    description: "The price may differ",
                },
                {
                    id: 18,
                    service: "Kids Promo",
                    price: 15,
                    description: "The price may differ",
                },
            ],
        };
        const works = [];
        try {
            await userRef.set({
                isDesigner,
                displayName,
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
        } catch (error) {
            console.error("Error creating user document", error);
        }
    }
    return getUserDocument(user.uid);
};
