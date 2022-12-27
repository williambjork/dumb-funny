import Link from 'next/link'
import React, { useEffect } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import {auth, db} from '../utils/firebase'
import NavButton from "./NavButton"


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
            <NavButton title={"Home"} url={'/index'}/>
            <NavButton title={"Store"} url={'/store'}/>
            <NavButton className='mr-12' title={"Write"} url={'/write'}/>
            
            {user ? 
            <div>
              
              <NavButton title={"My Account"} url={'/myAccount'}/>
              
            </div>
            : 
            <Link href="/login">Log In</Link>
            }
        </nav>
    </div>
  )
}

export default Nav