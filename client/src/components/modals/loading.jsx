import React, {useEffect} from 'react';

const LoadingAnimation = (props) => {

  useEffect(() => {

      document.querySelector('.c-modal-loading').classList.toggle('modal-transition-in');
      document.querySelector('.c-modal-cover').classList.toggle('modal-cover-transition-in')

    return () => {
        document.querySelector('.c-modal-loading').classList.toggle('modal-transition-out')
        document.querySelector('.c-modal-cover').classList.toggle('modal-cover-transition-out')
    }
  })

  return (
  <aside aria-modal="true" tabIndex="-1" className="c-modal-cover">
    <div className="c-modal-loading">
      <img src="https://media.giphy.com/media/lf9PrYyjFOQta/giphy.gif" style={{width: 300+'px', height:200+'px'}}/>
    </div>
  </aside>
  )
}

export default LoadingAnimation;