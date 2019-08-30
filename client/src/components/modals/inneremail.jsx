import React from 'react';
// overlay CSS mostly complete, just needs modal backdrop click to exit, otherwise ESC or clicking on the 'X' button will exit out.

class InnerEmail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  
  render() {
    return (
      <aside aria-modal="true" tabIndex="-1" className="c-modal-cover" onKeyDown={this.props.children.onKeyDown} onClick={() => console.log('inner:', this.props)}>
        <div className="c-modal" >
          <button className="c-modal__close" onClick={this.props.children.toggleOffEmailClick}>
            <span className="u-hide-visually">
              Close
        </span>
            <svg className="c-modal__close-icon" viewBox="0 0 40 40">
              <path d="M 10, 10 L 30, 30 M 30, 10 L 10, 30"></path>
            </svg>
          </button>
          <div className="c-modal__body">
            So, you wanna get in contact?
        <form onSubmit={(e) => console.log('Form Shit', e.target.value)}>
              <fieldset className="contact" style={{ border: 1 + 'px' }}>
                <div className="contact-input">
                  First Name: <input style={{ width: 200 + 'px' }} value=""></input>
                </div>
                <div className="contact-input">
                  Last Name: <input style={{ width: 200 + 'px' }} value=""></input>
                </div>
                <div className="contact-input">
                  E-mail: <input style={{ width: 200 + 'px' }} value=""></input>
                </div>
                <div className="contact-input">
                  Phone: <input style={{ width: 200 + 'px' }} value=""></input>
                </div>
                <div className="contact-input">
                  Company: <input style={{ width: 200 + 'px' }} value=""></input>
                </div>
                <div className="contact-input">
                  Website: <input style={{ width: 200 + 'px' }} value=""></input>
                </div>
                <div className="contact-input">
                  Message: <input style={{ width: 200 + 'px' }} value=""></input>
                </div>
              </fieldset>
            </form>
          </div>
        </div>
      </aside>
    )
  }
}


export default InnerEmail;