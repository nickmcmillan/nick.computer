// refactored from https://github.com/camflan/window-size/blob/csb-1540528927344/index.js
import { useState, useEffect, useRef } from 'react'

export default function (debounceMs) {
  const [windowSize, setWindowSize] = useState(window.innerWidth)

  const timeoutId = useRef(null)

  useEffect(() => {
    function handleResize() {
      if (timeoutId) {
        clearTimeout(timeoutId)
      }

      timeoutId.current = setTimeout(function () {
        setWindowSize(window.innerWidth)
      }, debounceMs)
    }

    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [debounceMs])

  return windowSize
}
