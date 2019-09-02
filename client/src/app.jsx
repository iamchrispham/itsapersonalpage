import React, { useState, useEffect } from 'react';
import Header from './components/header/index.jsx';
import MobileHeader from './components/header/mobileheader.jsx';
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
  
  const renderMobileHeader = () => {
    return (
      <MobileHeader />
    )
  }

  const renderHeader = () => {
    return (
      <Header />
    )
  }
  
  return <div className="main">
    {dimensions.width < 669 ? console.log(`Rendered at ${dimensions.width} x /${dimensions.height}`) : null}
    {dimensions.width < 669 ?  renderMobileHeader() : renderHeader() }
    <Body />
    <Footer />
  </div>
}

export default App;