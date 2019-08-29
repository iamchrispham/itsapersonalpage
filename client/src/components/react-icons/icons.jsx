import React from 'react';
import { FaLinkedin, FaBattleNet, FaGithub, FaFacebook } from 'react-icons/fa';
import { TiMail } from 'react-icons/ti';
import { render } from 'react-dom';
import ModalEmailForm from '../modals/email.jsx';

class Icons extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showEmailForm: false,
    }
    this.toggleEmailModal = this.toggleEmailModal.bind(this);
    this.testPlug = this.testPlug.bind(this);
  }

  toggleEmailModal() {
    this.setState({
      showEmailForm: !this.state.showEmailForm,
    }, console.log('showEmailForm:', this.state.showEmailForm))
  }

  testPlug () {
    return (
      <div>
        <ModalEmailForm showEmailForm={this.showEmailForm} toggleEmailModal={this.toggleEmailModal}>
          Funk
        </ModalEmailForm>
      </div>
    )
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
          <a className="active" onClick={this.toggleEmailModal}>
            <TiMail />
          {this.state.showEmailForm ? this.testPlug() : console.log('brah')}
          </a>
        </div>
      </div>
    )
  }
}




export default Icons;