import { useCallback, useRef } from 'react'

export const useAudio = () => {
  const audioRef = useRef()
  const audio = audioRef.current

  const handleStartAudio = useCallback(() => {
    audio.volume = 1
    audio.play()
  }, [audio])

  const handleStopAudio = useCallback(() => {
    audio.volume = 1
    audio.pause()
    audio.currentTime = 0
  }, [audio])

  return [audioRef, handleStartAudio, handleStopAudio]
}
