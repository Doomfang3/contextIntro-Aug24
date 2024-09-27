import { createContext, useState } from 'react'

export const CounterContext = createContext()

const CounterContextProvider = ({ children }) => {
  const [count, setCount] = useState(0)

  const handleIncrement = () => {
    setCount(prevCount => prevCount + 1)
  }

  return (
    <CounterContext.Provider value={{ count, handleIncrement }}>{children}</CounterContext.Provider>
  )
}

export default CounterContextProvider
