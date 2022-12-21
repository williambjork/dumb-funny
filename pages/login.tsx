import React, { useEffect } from 'react'
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth"
import {auth} from "../utils/firebase"
import { useAuthState } from 'react-firebase-hooks/auth';
import Router, { useRouter } from 'next/router';

export default function login() {

    const [user, loading] = useAuthState(auth);
    const router = useRouter();

    const googleProvider = new GoogleAuthProvider();
    const GoogleLogin = async () => {
        try {
            const result = await signInWithPopup(auth, googleProvider);
            console.log(result.user)
        } catch (error) {
            console.log("error")
        }
    }

   useEffect(() => {
    user && router.push("/")
   }), [];

  return (
    <div>
        <div>Login</div>
        <button onClick={GoogleLogin}>Sign in with Google</button>
    </div>
  )
}

