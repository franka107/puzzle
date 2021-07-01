import { Howl } from 'howler'
import { useEffect, useRef } from 'react'

import useInteraction from './useInteraction'

export default function useAudio(soundPath) {
  const hasInteracted = useInteraction()
  const audioRef = useRef()

  useEffect(() => {
    if (!hasInteracted) {
      return
    }

    let audio = new Howl({ src: soundPath })
    audioRef.current = audio

    return () => audio.unload()
  }, [hasInteracted, soundPath])

  const play = () => audioRef.current?.play()

  return { play, hasInteracted }
}
