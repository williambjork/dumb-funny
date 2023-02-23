import React from "react";
import MobileNav from "./MobileNav";
import Nav from "./Nav"

function NavBar() {
  return (
    <>
      <div className="md:hidden lg:hidden">
        <MobileNav />
      </div>
      <div className="hidden md:block">
        <Nav />
      </div>
    </>
  );
}

export default NavBar;
