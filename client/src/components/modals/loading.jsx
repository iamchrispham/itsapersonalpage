import React, {useEffect} from 'react';

const LoadingAnimation = (props) => {

  useEffect(() => {
    if (props.loading) {

      document.querySelector('.c-modal-loading').classList.toggle('modal-transition-in');
      document.querySelector('.c-modal-cover').classList.toggle('modal-cover-transition-in')
    } 

    return () => {
        document.querySelector('.c-modal-loading').classList.toggle('modal-transition-out')
        document.querySelector('.c-modal-cover').classList.toggle('modal-cover-transition-out')
    }
  })
  // TODO: Loading PNG here
  return (
  <aside aria-modal="true" tabIndex="-1" className="c-modal-cover">
    <div className="c-modal-loading">
      Loading...
    </div>
  </aside>
  )
}

export default LoadingAnimation;