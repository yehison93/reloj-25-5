import { useEffect, useState } from 'react'

export const useTimeProgressBar = (timer, isBreak, state) => {
  const timeCurrent = (+(timer.minutes * 60) + (+(timer.seconds)))
  const [timeProgress, setTimeProgress] = useState(timeCurrent)
  const timeProgressBarCurrent = ((timeCurrent * 100) / timeProgress)

  useEffect(() => {
    setTimeProgress(timeCurrent)

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, state ? [isBreak] : [isBreak, timeCurrent])

  return timeProgressBarCurrent
}
