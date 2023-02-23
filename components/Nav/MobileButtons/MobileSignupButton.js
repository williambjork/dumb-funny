import { useRouter } from "next/router";
import React from "react";

function MobileSignupButton() {
  const router = useRouter();

  const handleClick = (e) => {
    e.preventDefault;
    router.push(url);
  };
  return (
    <div className="">
      <button
        onClick={handleClick}
        className="font-syne hover:bg-teal-500 hover:border-teal-500 
                    border rounded-full border-black bg-black text-white px-3 mt-2 py-1 font-bold text-2xl "
      >
        SIGN UP
      </button>
    </div>
  );
}

export default MobileSignupButton;
