import { Howl } from 'howler'
import { useEffect, useRef } from 'react'

import useInteraction from './useInteraction'

export default function useAudio(options) {
  const hasInteracted = useInteraction()
  const audioRef = useRef()

  useEffect(() => {
    if (!hasInteracted) {
      return
    }

    let audio = new Howl(options)
    audioRef.current = audio

    return () => audio.unload()
  }, [hasInteracted, options])

  const play = () => audioRef.current?.play()

  return { play, hasInteracted }
}
