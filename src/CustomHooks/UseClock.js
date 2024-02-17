import { useState, useEffect } from 'react'

const optionsHour = { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true }
const optionsDate = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' }
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

  const dateHour = { date: time.toLocaleDateString(undefined, optionsDate), hour: time.toLocaleTimeString(undefined, optionsHour) }

  return dateHour
}
