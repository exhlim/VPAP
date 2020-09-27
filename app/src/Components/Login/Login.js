import React from 'react'
import './Login.css'
import { Button } from '@material-ui/core'
import { auth, provider } from "../../firebase"
function Login() {
    const signIn=()=> {
        auth.signInWithPopup(provider)
        .then(result=> [
            console.log(result)
        ]).catch((error)=> {
            alert(error.message)
        })
    }
    return (
        <div className="login">
            <div className="login__container">
                <img src="https://cdn.mos.cms.futurecdn.net/SDDw7CnuoUGax6x9mTo7dd-1024-80.jpg.webp" alt="" />
                <h1>Sign in to my Slack Clone</h1>
                <p>slack-clone.com</p>
                <Button onClick={signIn}>Sign In with Google</Button>
            </div>
        </div>
    )
}

export default Login
