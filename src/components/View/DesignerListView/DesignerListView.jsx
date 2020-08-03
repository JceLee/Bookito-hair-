import React, {useCallback, useEffect} from "react";
import { useSelector, useDispatch } from 'react-redux'
import {load_database} from "../../../actions/firebaseAction";
import {firebaseDB} from "../../../config/fbConfig";


export default function DesignerListView() {

    const designers = useSelector(state => state.firestore.designers);
    const dispatch = useDispatch();
    const newDesigners = [];
    firebaseDB.firestore().collection('designers').get()
        .then(querySnapshot => {
            querySnapshot.docs.forEach(doc => {
                newDesigners.push(doc.data());
            });
        });

    useEffect(() => {
        dispatch(load_database(newDesigners))
    }, [dispatch]);
    console.log(designers);


    const ClickEvent = () => {
        document.getElementById("babo").src = designers[0]['works'][3];
    };

    const storage = firebaseDB.storage().ref();
    const storageRef  = firebaseDB.storage().ref('0002.jpg');
    let imgRef = storage.child('0002.jpg').getDownloadURL();
    let imgRef2 ="";
    storageRef.getDownloadURL().then(function(url) {
        imgRef2 = url;
    });


    return (
        <div>
            <button onClick={ClickEvent}>
                LoadData
            </button>
            <img id="babo" src={imgRef2}/>
        </div>
    )

}
