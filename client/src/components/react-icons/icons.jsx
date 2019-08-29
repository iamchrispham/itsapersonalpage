import React from 'react';
import { FaLinkedin, FaBattleNet, FaGithub, FaFacebook } from 'react-icons/fa';
import { TiMail } from 'react-icons/ti';
import ModalEmailForm from '../modals/email.jsx';

class Icons extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showEmailForm: false,
    }
    this.toggleOffEmailClick = this.toggleOffEmailClick.bind(this);
    this.toggleOnEmailClick = this.toggleOnEmailClick.bind(this);
  }

  toggleOffEmailClick() {
    this.setState({
      showEmailForm: false,
    }, () => console.log('toggleOff post setstate:', this.state.showEmailForm))
  }

  toggleOnEmailClick() {
    this.setState({
      showEmailForm: true,
    }, () => console.log('toggleOn post setstate:', this.state.showEmailForm))
  }

  render() {
    return (
      <div className="icon-content">
        <div className="icon-item 1">
          <a href="http://linkedin.com/in/chrismpham/" className="active" target="_blank">
            <FaLinkedin />
          </a>
        </div>
        <div className="icon-item 2">
          <a href="" className="active">
            <FaFacebook />
          </a>
        </div>
        <div className="icon-item 3">
          <a href="" className="active">
            <FaGithub />
          </a>
        </div>
        <div className="icon-item 4">
          <a href="" className="active">
            <FaBattleNet />
          </a>
        </div>
        <div className="icon-item-email">
            <a className="active" onClick={this.toggleOnEmailClick}>
              <TiMail />
            </a>
          <ModalEmailForm showEmailForm={this.state.showEmailForm} toggleOffEmailClick={this.toggleOffEmailClick} />
        </div>
      </div>
    )
  }
}




export default Icons;