import React, { useEffect } from 'react';
import Hero from "./components/Hero"
import { initLenis } from './lenis'

function App() {
  useEffect(() => {
    initLenis();
  }, []);

 return (
    <>
<Hero />
    </>
  )
}

export default App
