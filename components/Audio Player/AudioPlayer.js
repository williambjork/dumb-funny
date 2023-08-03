import { React, useState } from "react";
import { HiPlay, HiPause } from "react-icons/Hi";
import { TbRewindBackward10, TbRewindForward10 } from "react-icons/Tb";

function AudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  return (
    <div>
      <audio src="https%3A//api.soundcloud.com/tracks/615648570"></audio>
      <button>
        <TbRewindBackward10 size={25} className="mb-4 mr-1 hover:fill-emerald-500" />
      </button>
      <button
        onClick={() => {
          setIsPlaying(!false);
        }}
      >
        {isPlaying ? <HiPause size={50} className="hover:fill-emerald-500" /> : <HiPlay size={50} />}
      </button>
      <button>
        <TbRewindForward10 size={25} className="mb-4 ml-1" />
      </button>
    </div>
  );
}

export { AudioPlayer };
