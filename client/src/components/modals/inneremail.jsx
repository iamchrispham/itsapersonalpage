import React from 'react';
// overlay CSS mostly complete, just needs modal backdrop click to exit, otherwise ESC or clicking on the 'X' button will exit out.

class InnerEmail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      message: '',
    }
    this.node = React.createRef();
    this.handleClick = this.handleClick.bind(this);
    this.handleInputFirstName = this.handleInputFirstName.bind(this);
    this.handleInputLastName = this.handleInputLastName.bind(this);
    this.handleInputEmail = this.handleInputEmail.bind(this);
    this.handleInputMessage = this.handleInputMessage.bind(this);
    this.handleButtonClose = this.handleButtonClose.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.transitionIn = this.transitionIn.bind(this);
    this.transitionOut = this.transitionOut.bind(this);
  }

  transitionIn() {
    document.querySelector('.c-modal').classList.toggle('modal-transition-in');
    document.querySelector('.c-modal-cover').classList.toggle('modal-cover-transition-in')
  }

  transitionOut() {
    document.querySelector('.c-modal').classList.toggle('modal-transition-out')
    document.querySelector('.c-modal-cover').classList.toggle('modal-cover-transition-out')
  }

  handleClick(e) {
    if (this.node.current === e.target) {
      this.transitionOut();
      setTimeout(() => {
        this.props.children.toggleOffEmailClick()
      }, 401);
    }
    return;
  }

  handleInputFirstName(e) {
    if (e.target.className = 'firstName') {
      this.setState({
        firstName: e.target.value
      }, console.log(this.state.firstName))
    }
  }

  handleInputLastName(e) {
    if (e.target.className = 'lastName') {
      this.setState({
        lastName: e.target.value
      })
    }
  }

  handleInputEmail(e) {
    if (e.target.className = 'email') {
      this.setState({
        email: e.target.value
      })
    }
  }

  handleInputMessage(e) {
    if (e.target.className = 'message') {
      this.setState({
        message: e.target.value
      })
    }
  }

  handleButtonClose() {
    this.transitionOut();
    setTimeout(() => {
      this.props.children.toggleOffEmailClick()
    }, 401);
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.firstName === '') {
      console.log('Empty field at firstname')
    } else if (this.state.lastName === '') {
      console.log('Empty field at lastname')
    } else if (this.state.email === '') {
      console.log('Empty field at email')
    } else if (this.state.message === '') {
      console.log('Empty field at message')
    } else { // (!this.state.email.includes('@')) 
      if (!validateEmail(this.state.email)) {
        console.log('invalid email:', this.state.email);
      } else {
        // post to database on successful info validation
        console.log('fields filled: ', this.state)
        this.handleButtonClose();
      }
    }
  }

  componentDidMount() {
    setTimeout(() => this.transitionIn(), 249);
  }

  render() {
    return (
      <aside aria-modal="true" tabIndex="-1" className="c-modal-cover" onKeyDown={this.props.children.onKeyDown} ref={this.node} onClick={this.handleClick}>
        <div className="c-modal" >
          <button className="c-modal__close" onClick={this.handleButtonClose}>
            <span className="u-hide-visually">
              Close
        </span>
            <svg className="c-modal__close-icon" viewBox="0 0 40 40">
              <path d="M 10, 10 L 30, 30 M 30, 10 L 10, 30"></path>
            </svg>
          </button>
          <div className="c-modal__body">

            <form onSubmit={this.handleSubmit}>
              <fieldset className="contact" style={{ border: 1 + 'px' }}>
                <div className="contact-input" style={{ paddingTop: 0 + 'px' }}>
                  So, you wanna get in contact?
                </div>
                <div className="contact-input">
                  <input value={this.state.firstName} className="firstName" onChange={this.handleInputFirstName} placeholder="First Name"></input>
                </div>
                <div className="contact-input">
                  <input value={this.state.lastName} onChange={this.handleInputLastName} placeholder="Last Name"></input>
                </div>
                <div className="contact-input">
                  <input value={this.state.email} onChange={this.handleInputEmail} placeholder="E-mail"></input>
                </div>
                <div className="contact-input">
                  <textarea value={this.state.message} onChange={this.handleInputMessage} placeholder="Send me a message!" style={{ height: 180 + 'px' }}></textarea>
                </div>
                <div className="contact-input">
                  <button className="modalEmailSubmitBtn">
                    Submit
                </button>

                </div>
              </fieldset>
            </form>
          </div>
        </div>
      </aside>
    )
  }
}

const validateEmail = (email) => {
  return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email) ? true : false;
}

export default InnerEmail;