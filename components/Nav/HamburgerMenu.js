import React, { useState } from "react";
import Cart from "./Cart";
import HomeButton from "./HomeButton";
import LoginButton from "./LoginButton";
import MyAccountButton from "./MyAccountButton";
import ReadButton from "./ReadButton";
import SignUpButton from "./SignUpButton";
import StoreButton from "./StoreButton";
import WatchButton from "./WatchButton";
import { CgMenuCheese } from "react-icons/cg";
import { VscChromeClose } from "react-icons/vsc";

function HamburgerMenu({ user, loading }) {
  const [open, setOpen] = useState(false);

  return (
    <>
  {open ? (
    <div className="ml-16"
      onClick={() => {
        setOpen(!open);
      }}
    >
      <CgMenuCheese size={30} />
    </div>
  ) : (
    <div className="blur-screen flex justify-center items-center">
      <div className="flex-row">
      <div className="ml-16"
      onClick={() => {
        setOpen(!open);
      }}
    >
        <VscChromeClose size={25} />
        <HomeButton url="/" />
        <StoreButton url="/store" />
        <ReadButton url="/read" />
        <WatchButton url="/watch" />

        {user ? (
            <>
            <MyAccountButton url="/myAccount" />
          </>
        ) : (
            <>
            <LoginButton url="/login" />
            <SignUpButton url="/signup" />
          </>
        )}
        </div>
      </div>
    </div>
  )}
</>
  );
}

export default HamburgerMenu;
