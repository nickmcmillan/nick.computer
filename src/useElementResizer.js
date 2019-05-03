// https://gist.github.com/morajabi/523d7a642d8c0a2f71fcfa0d8b3d2846
import { useLayoutEffect, useCallback, useState } from 'react'

export default (ref) => {
  const [rect, setRect] = useState(getRect(ref ? ref.current : null))

  const handleResize = useCallback(() => {
    if (!ref.current) {
      return
    }

    // Update client rect
    setRect(getRect(ref.current))
  }, [ref])

  useLayoutEffect(() => {
    const element = ref.current
    if (!element) {
      return
    }

    handleResize()

    let resizeObserver = new ResizeObserver(() => handleResize())
    resizeObserver.observe(element)

    return () => {
      if (!resizeObserver) {
        return
      }

      resizeObserver.disconnect()
      resizeObserver = null
    }
  
  }, [ref, handleResize])

  return rect
}

function getRect(element) {
  if (!element) {
    return {
      bottom: 0,
      height: 0,
      left: 0,
      right: 0,
      top: 0,
      width: 0,
      x: 0,
      y: 0,
    }
  }

  return element.getBoundingClientRect()
}