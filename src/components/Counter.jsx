import { useContext } from 'react'
import { CounterContext } from '../contexts/CounterContext'

const Counter = () => {
  const { count } = useContext(CounterContext)

  return <p>{count}</p>
}

export default Counter
