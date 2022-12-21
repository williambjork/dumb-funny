import React from 'react'
import {auth, db} from '../utils/firebase'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useRouter} from 'next/router'
import { useEffect } from 'react';

function myAccount() {

  const router = useRouter();

  const [user, loading] = useAuthState(auth);

  const getData = async () => {
    if (loading) return;
    if(!user) {
      router.push("/login")
    }
  }

  useEffect(() => {
    getData();
  }, [user, loading]);
  
  return (
    <div>
    <div>My Account</div>
    <h3>Name: {user?.displayName}</h3>
    <h3>Email: {user?.email}</h3>
    <button onClick={() => auth.signOut()}>Sign Out</button>
    </div>
  )
}

export default myAccount