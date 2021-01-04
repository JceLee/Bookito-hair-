import React from 'react';

export default function SelfIntro(props) {
    const { id, introduction } = props;
    return(
        <div id={id}>
            <h2 id="SelfIntroTitle">Greeting</h2>
            <p id="selfIntroContent">{introduction}</p>
        </div>
    )
}