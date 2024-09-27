import { useContext } from 'react'
import { CounterContext } from '../contexts/CounterContext'

const IncrementBtn = () => {
  const { handleIncrement } = useContext(CounterContext)

  return (
    <button type='button' onClick={handleIncrement}>
      Increment
    </button>
  )
}

export default IncrementBtn
