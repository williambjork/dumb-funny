"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../../utils/firebase";
import NavButton from "./NavButton";
import LoginButton from "./LoginButton";
import StoreButton from "./StoreButton";
import SignUpButton from "./SignUpButton";
import ReadButton from "./ReadButton";
import HomeButton from "./HomeButton";
import MyAccountButton from "./MyAccountButton";
import WatchButton from "./WatchButton";
import ListenButton from "./ListenButton";
import Logo from "../Logo";
import Cart from "./Cart"


export default function Nav() {
  const [user, loading] = useAuthState(auth);

  const getData = async () => {
    if (loading) return;
  };

  useEffect(() => {
    getData();
  }, [user, loading]);

  return (
    <div>
      <nav className="grid grid-cols-3  md:top-0 justify-center m-auto  py-3 border-b">
        <div className="flex-initial absolute left-12 ">
          <div className="min-w-12 hidden md:inline ">
            <Logo size={33} />
          </div>
        </div>
        <div className="col-start-2 col-span-2 flex ">
          <div className="mr-3">
            <HomeButton url="/" />
          </div>

          <div className="flex">
            <StoreButton url="/store" />
            <ReadButton url="/listen" />
            <WatchButton url="/watch" />
          </div>

          {user ? (
            <>
              <MyAccountButton url="/myAccount" />
            </>
          ) : (
            <>
              <div className="mx-2">
                <LoginButton url="/login" />
              </div>
              <SignUpButton url="/signup" />
            </>
          )}
        </div>
          <div className="absolute right-12">
            <Cart />
          </div>
       
      </nav>
    </div>
  );
}
