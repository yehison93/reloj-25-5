import { useState, useEffect } from 'react'

export const UseClock = () => {
  const [time, setTime] = useState(new Date())

  useEffect(() => {
    const timerID = setInterval(() => {
      setTime(new Date())
    }, 1000)
    return function cleanup () {
      clearInterval(timerID)
    }
  }, [])
  return time
}
