import React from 'react'

function intro() {
    return (
        <div className="intro">
            <h1>Welcome to my slack clone</h1>
            <p>Functionalities include:</p>
            <ul>
                <li>Google auth sign in.</li>
                <li>Adding of channels (Add channel).</li>
                <li>Switching between the added channels.</li>
                <li>Chatting functionality from real time database(Firebase).</li>
                <li>Chat information of users pulled after google auth.</li>
                <li>Rendering of google account image and name in header</li>
            </ul>
            <br/>
            <hr />
            <br/>
            <h1>Technologies:</h1>
            <ul>
                <li>React</li>
                <li>Firebase</li>
                <li>Google user authentication</li>
                <li>React Context API</li>
                <li>CSS variables</li>
                <li>Material UI</li>
                <li>Deployed on firebase</li>
            </ul>
        </div>
    )
}

export default intro
