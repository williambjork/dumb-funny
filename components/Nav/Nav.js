import Link from 'next/link'
import React, { useEffect } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import {auth, db} from '../../utils/firebase'
import NavButton from "./NavButton"
import LoginButton from "./LoginButton"
import StoreButton from "./StoreButton"
import SignUpButton from "./SignUpButton"
import ReadButton from "./ReadButton"
import HomeButton from "./HomeButton"
import MyAccountButton from "./MyAccountButton"
import WatchButton from "./WatchButton"
import ListenButton from "./ListenButton"


export default function Nav() {
    
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
        <nav className='flex  justify-center m-auto  py-3 border-b'>
          <div className='absolute left-12 '>Logo</div>
          <div className='flex '>
            <div className="mr-3">
              <HomeButton url="/"/>
            </div>

            <div className='flex'>
              <StoreButton url="/store" />
              <ReadButton url="/read" />
              <WatchButton url="/watch" />
              
            </div>

            {user ? 
            <>
              
            <MyAccountButton url="/myAccount" />
              
            </>
            : 
            <>
            <LoginButton url="/login" />
            <SignUpButton url="/signup" />
            </>
            }
           </div>
        </nav>
    </div>
  )
}

