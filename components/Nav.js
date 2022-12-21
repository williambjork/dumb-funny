import Link from 'next/link'
import React, { useEffect } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import {auth, db} from '../utils/firebase'


function Nav() {
    
    const [user, loading] = useAuthState(auth);

    const getData = async () => {
        if (loading) return;
        if(!user) console.log("noUser")
      }
    
      useEffect(() => {
        getData();
      }, [user, loading]);
      

  return (
    <div>
        <nav className='flex justify-center m-auto gap-12'>
            <Link href="/">Home</Link>
            <Link href="/store">Store</Link>
            <Link href="/">About</Link>
            {user ? 
            <Link href="/myAccount">My Account</Link>
            : <Link href="/login">Log In</Link>
            }
        </nav>
    </div>
  )
}

export default Nav