// https://gist.github.com/morajabi/523d7a642d8c0a2f71fcfa0d8b3d2846
import { useLayoutEffect, useState } from 'react'

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

export default (ref) => {
  const [rect, setRect] = useState(getRect(ref ? ref.current : null))

  useLayoutEffect(() => {
    const element = ref.current
    if (!element) return

    const tit = getRect(ref.current)

    setRect(tit)
  }, [ref])

  return rect
}