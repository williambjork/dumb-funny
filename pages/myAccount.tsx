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
    <div className='flex min-h-screen flex-col items-center justify-center pb-12'>
    
    <img className="rounded-full w-30 h-30 filter-green" src={loading ? "Loading" : user?.photoURL} alt="profile" />
    <h3 className='font-spacemono pt-5'>{user?.displayName}</h3>
    <h3 className='font-spacemono'>{user?.email}</h3>
    <button className='mt-6 flex font-spacemono border p-3 border-black
                            hover:border-dashed  hover:border-emerald-500 hover:text-emerald-500' onClick={() => auth.signOut()}>Sign Out</button>
    </div>
  )
}

export default myAccount