import React from 'react';
// now implement overlay CSS
const InnerEmail = (props) => (
  <aside className="c-modal-cover">
    <div className="c-modal">
      <button className="c-modal__close" onClick={() => {
        // console.log(props.children.toggleOffEmailClick)
        props.children.toggleOffEmailClick();
        // console.log(props.children.showEmailForm)
      }
      }>
        <span className="u-hide-visually">
          Close
        </span>
        <svg className="c-modal__close-icon" viewBox="0 0 40 40">
          <path d="M 10, 10 L 30, 30 M 30, 10 L 10, 30"></path>
        </svg>
      </button>
      <div className="c-modal__body">
        Modal Overlay Content
        <form>
          <fieldset>
            Test:<input style={{ width: 50 + 'px' }}></input>
          </fieldset>
        </form>
      </div>
    </div>
  </aside>

);

export default InnerEmail;

// <div onClick={props.children.toggleEmailModal}>
//   Shiet
//   {console.log('InnerEmail props:', props)}
// </div>