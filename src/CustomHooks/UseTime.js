import { useEffect, useState } from 'react'

export const useTime = (timeBreak, timeSession, handleStartAudio, handleStopAudio) => {
  const timeBreakMinute = timeBreak * 60
  const timeSessionMinute = timeSession * 60
  const [time, setTime] = useState(timeSessionMinute)
  const [isBreak, setIsBreak] = useState(false)
  const [state, setState] = useState(false)

  const handleState = () => {
    setState(!state)
  }

  const handleReset = () => {
    setState(false)
    setTime(timeSessionMinute)
    setIsBreak(false)
    handleStopAudio()
  }

  useEffect(() => {
    const timerID = setInterval(() => {
      if (state) {
        setTime((time) => time - 1)
      }
    }, 1000)
    return () => clearInterval(timerID)
  }, [state])

  useEffect(() => {
    if (time < 0) {
      if (isBreak) {
        setTime(timeSessionMinute)
        handleStartAudio()
      } else {
        setTime(timeBreakMinute)
        handleStartAudio()
      }
      setIsBreak(!isBreak)
    }
  }, [handleStartAudio, isBreak, time, timeBreakMinute, timeSessionMinute])

  useEffect(() => {
    if (!state) {
      setIsBreak(false)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [time])

  useEffect(() => {
    if (!state) {
      setTime(timeSessionMinute)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [timeSessionMinute, timeBreakMinute])

  const minutes = Math.floor(time / 60)
  const seconds = time % 60
  const timer = { minutes: minutes < 10 ? `0${minutes}` : `${minutes}`, seconds: seconds < 10 ? `0${seconds}` : `${seconds}` }
  return [timer, state, isBreak, handleState, handleReset]
}
