import React from 'react'
import {auth, db} from '../utils/firebase'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useRouter} from 'next/router'
import { useEffect } from 'react';

function myAccount() {

  const [user, loading] = useAuthState(auth);

  const getData = async () => {
    if (loading) return;
    if(!user) console.log("noUser")
  }

  useEffect(() => {
    getData();
  }, [user, loading]);
  
  return (
    <div>My Account</div>
  )
}

export default myAccount