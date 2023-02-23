import React, { useState } from "react";
import Cart from "./Cart";
import MobileHomeButton from ".//MobileButtons/MobileHomeButton";
import MobileShopButton from ".//MobileButtons/MobileShopButton";
import MobileListenButton from ".//MobileButtons/MobileListenButton";
import MobileWatchButton from ".//MobileButtons/MobileWatchButton";
import MobileMyAccountButton from ".//MobileButtons/MobileMyAccountButton";
import LoginButton from "./LoginButton";
import MyAccountButton from "./MyAccountButton";
import ReadButton from "./ReadButton";
import SignUpButton from "./SignUpButton";
import StoreButton from "./StoreButton";
import WatchButton from "./WatchButton";
import { CgMenuCheese } from "react-icons/cg";
import { VscChromeClose } from "react-icons/vsc";

function HamburgerMenu({ user, loading }) {
  const [open, setOpen] = useState(true);

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
      <div className="ml-16"
      onClick={() => {
        setOpen(!open);
      }}
    >
    <div className="blur-screen flex justify-center items-center">
        <div className="absolute top-5 right-20">
        <VscChromeClose size={35} />
        </div>
      <div className="flex-row">
        <MobileHomeButton url="/" />
        <MobileShopButton url="/store" />
        <MobileListenButton url="https://soundcloud.com/lghthd" />
        <MobileWatchButton url="/watch" />

        {user ? (
            <>
            <MobileMyAccountButton url="/myAccount" />
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
