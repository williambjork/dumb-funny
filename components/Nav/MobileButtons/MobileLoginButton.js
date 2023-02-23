import { useRouter } from "next/router";
import React from "react";

function MobileLogin({url}) {
  const router = useRouter();

  const handleClick = (e) => {
    e.preventDefault;
    router.push({url});
  };
  return (
    <div className="">
      <div className="border-t border-black my-3"></div>
      <button
        onClick={handleClick}
        className="font-syne hover:bg-black hover:text-white border-black mr-3
                rounded-full px-4 mt-3 py-1 text-2xl font-bold  border"
      >
        LOGIN
      </button>
    </div>
  );
}

export default MobileLogin;
