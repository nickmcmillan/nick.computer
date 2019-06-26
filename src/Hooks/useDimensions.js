import { useState, useCallback, useLayoutEffect } from 'react'

function useDimensions() {
  const [dimensions, setDimensions] = useState({})
  const [node, setNode] = useState(null)

  const ref = useCallback(node => {
    setNode(node)
  }, [])

  useLayoutEffect(() => {
    if (node) {
      const measure = () =>
        window.requestAnimationFrame(() =>
          setDimensions(node.getBoundingClientRect())
        )
      measure()

      window.addEventListener('resize', measure)

      return () => {
        window.removeEventListener('resize', measure)
      }
    }
  }, [node])

  return [ref, dimensions, node]
}

export default useDimensions
