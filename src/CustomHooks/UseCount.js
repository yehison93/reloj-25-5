import { useState, useCallback } from 'react'

export const useCount = (val) => {
  const [value, setValue] = useState(val)

  const handleSum = useCallback(() => {
    if (value < 60) {
      setValue(value + 1)
    }
  }, [value])

  const handleRes = useCallback(() => {
    if (value > 1) {
      setValue(value - 1)
    }
  }, [value])

  const handleResetValue = useCallback(() => {
    setValue(val)
  }, [val])

  return [value, handleSum, handleRes, handleResetValue]
}
