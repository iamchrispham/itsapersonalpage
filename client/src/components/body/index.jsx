import React, {useEffect} from 'react';

const Body = (props) => {
  const checkWidth = () => {
    if (props.width < 669) {
      document.querySelector('.body-content').classList.add('body-content-mobile');
    } else {
      document.querySelector('.body-content').classList.remove('body-content-mobile');
    }
  }

  const pseudoAsync = () => {
    setTimeout(() => checkWidth(), 500);
  }
  return (
    <div className="body-content">
      {document.querySelector('.body-content') ? checkWidth() : pseudoAsync()}
    </div>
  )
}
export default Body;