import { useEffect } from 'react'
import { useState } from 'react'
import axios from './util/axios.customize'

function App() {
  
  useEffect(() => {
    const fetchHelloWorld = async() => {
      const res = await axios.get(`/v1/api`)
      console.log("checkres >>", res);
    }

    fetchHelloWorld();
  }, [])

  return (
    <>
      Hello world
    </>
  )
}

export default App
