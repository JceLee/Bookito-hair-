import React, { useState } from 'react';


export default function AddData() {
    const [name, setName] = useState();
    const [location, setLocation] = useState();
    const [gender, setGender] = useState();
    const [rate, setRate] = useState();
    const [profilePicture, setProfilePicture] = useState();
    const [appointment, setAppointment] = useState([]);

    const clickEvent = () => {
        setName("babo");
        setLocation("vancouver");
        let designer = {
            'name' : name,
            'location' : location,
            'gender' : gender,
            'rate' : rate,
            'profilePicture' : profilePicture,
            'appointment' : appointment
        };
        console.log(designer)
    };


    return (
        <>
            <form>
                <div>
                    <h1> {name} </h1>
                    <button onClick={clickEvent}>
                        Create
                    </button>
                </div>
            </form>
        </>
    );
}