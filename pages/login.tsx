import React from 'react'
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth"
import {auth} from "../utils/firebase"

export default function login() {

    const googleProvider = new GoogleAuthProvider();
    const GoogleLogin = async () => {
        try {
            const result = await signInWithPopup(auth, googleProvider);
            console.log(result.user)
        } catch (error) {
            console.log("error")
        }
    }

   
  return (
    <div>
        <div>Login</div>
        <button onClick={GoogleLogin}>Sign in with Google</button>
    </div>
  )
}

