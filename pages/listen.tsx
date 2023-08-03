import React from 'react'
import { AudioPlayer } from "../components/Audio Player/AudioPlayer"

function listen() {
  return (
    <div className='flex min-h-screen flex-col items-center justify-center'>
      <AudioPlayer />
    </div>
  )
}

export default listen