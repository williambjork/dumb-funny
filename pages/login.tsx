import React, { useEffect } from "react";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import Router, { useRouter } from "next/router";
import { SiGoogle } from "react-icons/si";

export default function login() {
  const [user, loading] = useAuthState(auth);
  const router = useRouter();

  const googleProvider = new GoogleAuthProvider();

  const GoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);

      router.push("/myAccount");
    } catch (error) {
      console.log("error");
    }
  };

  useEffect(() => {
    user && router.push("/myAccount");
  }),
    [];

  return (
    <div className="flex min-h-screen flex-col items-center justify-center pb-12">
      <SiGoogle className="mb-6 hover:animate-spin" size={30} />
        <button
          className="flex font-spacemono border p-3 border-black
                            hover:border-dashed  hover:border-emerald-500 hover:text-emerald-500"
          onClick={GoogleLogin}
        >
          Sign in with Google
          
        </button>
     
    </div>
  );
}
