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
  
  const renderMobile = () => {
    return (
      <MobileHeader />
    )
  }

  const renderWeb = () => {
    return (
      <Header />
    )
  }
  
  return <div className="main">
    {/* {dimensions.width < 669 ? console.log(`Rendered at ${dimensions.width} x /${dimensions.height}`) : null} */}
    {dimensions.width < 669 ?  renderMobile() : renderWeb() }
    <Body width={dimensions.width} height={dimensions.height}/>
    <Footer />
  </div>
}

export default App;