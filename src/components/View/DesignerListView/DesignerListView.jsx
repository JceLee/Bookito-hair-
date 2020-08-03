import React, {useCallback} from "react";
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
    console.log(newDesigners);

    const ClickEvent = () => {
        dispatch(load_database(newDesigners));
        // setTimeout(function(){ console.log(designers[0]); }, 5000);
        // console.log(newDesigners[0]['works']);
        document.getElementById("babo").src = newDesigners[0]['works'][3];
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
