import { useState, useEffect } from 'react'

const opciones = { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true };

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

  const dateHour = { date: time.toLocaleDateString(), hour: time.toLocaleTimeString('en-US', opciones) }

  return dateHour
}
