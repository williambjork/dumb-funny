import React, { useEffect } from "react";
import Logo from "../Logo";
import Cart from "./Cart";
import HomeButton from "./HomeButton";
import LoginButton from "./LoginButton";
import MyAccountButton from "./MyAccountButton";
import ReadButton from "./ReadButton";
import SignUpButton from "./SignUpButton";
import StoreButton from "./StoreButton";
import WatchButton from "./WatchButton";
import HamburgerMenu from "./HamburgerMenu";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../../utils/firebase";

function MobileNav() {
  const [user, loading] = useAuthState(auth);

  const getData = async () => {
    if (loading) return;
  };

  useEffect(() => {
    getData();
  }, [user, loading]);

  return (
    <div>
      <nav className="grid py-6 grid-cols-3 md:hidden ">
        <div className="col-span-1 mr-16 sm:mr-6 flex justify-end">
          <Cart />
        </div>
        <div className="col-span-1 flex justify-center">
          <Logo />
        </div>

        <div className="col-span-1 ml-6  flex justify-start">
          <HamburgerMenu user={user} loading={loading} />
        </div>
      </nav>
     
      
    </div>
  );
}

export default MobileNav;
