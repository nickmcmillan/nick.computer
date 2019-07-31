// https://usehooks.com/useOnScreen/
import { useState, useEffect } from 'react'

export default function useOnScreen(ref, rootMargin = '0px') {
  // State and setter for storing whether element is visible
  const [isIntersecting, setIntersecting] = useState(false)

  useEffect(() => {
    const newRef = ref.current
    const observer = new IntersectionObserver(([entry]) => {
      // Update our state when observer callback fires
      // only if its actually visible
      if (entry.isIntersecting) {
        setIntersecting(entry.isIntersecting)
        // and then stop observing (only fire once)
        observer.unobserve(entry.target)
      }
    }, { rootMargin })

    if (newRef) {
      observer.observe(newRef)
    }

    return () => {
      observer.unobserve(newRef)
    }
  }, [ref, rootMargin]) // Empty array ensures that effect is only run on mount and unmount

  return isIntersecting
}
