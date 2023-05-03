import { useEffect } from 'react'
import { useRef }    from 'react'

const useRandomColor = () => {
  const node = useRef(null)
  const { random, floor } = Math
  const colors = ['red', 'green', 'blue']

  useEffect(() => {
    if (node && node.current) {
      (node.current as any).style.color = colors[floor(random() * 3)]
    }
    
  }, [])

  return () => node
}

export { useRandomColor }
