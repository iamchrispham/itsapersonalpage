import React, { useState, useEffect } from 'react';
import Header from './components/header/index.jsx';
import Body from './components/body/index.jsx';
import Footer from './components/footer/index.jsx';

function App() {
  const [dimensions, setDimensions] = useState({
    height: window.innerHeight,
    width: window.innerWidth
  })
  useEffect(() => {
    function handleResize() {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth
      })
    }


    window.addEventListener('resize', handleResize)

    return _ => {
      window.removeEventListener('resize', handleResize)
    }
  })
  return <div className="main">
    {dimensions.width < 669 ? console.log(`Rendered at ${dimensions.width} x /${dimensions.height}`) : null}
    <Header />
    <Body />
    <Footer />
  </div>
}

export default App;