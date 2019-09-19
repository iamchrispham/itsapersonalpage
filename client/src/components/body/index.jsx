import React, { useState, useEffect } from 'react';
import Home from './home.jsx';

const Body = (props) => {
  const [loading, setLoading] = useState(true);
  useEffect(()=> {
    if (loading) {
      setLoading(false);
    }
  })

  const checkWidth = () => {
    if (props.width < 669) {
      document.querySelector('.body-content').classList.add('body-content-mobile');
    } else {
      document.querySelector('.body-content').classList.remove('body-content-mobile');
    }
  }

  return (
    <div className="body-container">
      <div className="body-content">
        {loading ? null : checkWidth()}
      </div>
    </div>
  )
}
export default Body;