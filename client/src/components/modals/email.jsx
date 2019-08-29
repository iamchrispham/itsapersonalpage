import React from 'react';
import {createPortal, render} from 'react-dom';

const modalEmailRoot = document.getElementById('modal-email');
const Test = () => (
  <div>
    Test Func!
  </div>
);

class ModalEmailForm extends React.Component {
  constructor(props) {
    super(props);
    this.elem = document.createElement('div');
  }

  componentDidMount() {
    modalEmailRoot.appendChild(this.elem);
  }

  componentWillUnmount() {
    modalEmailRoot.removeChild(this.elem);
  }

  render() {
    return createPortal(this.props.children, document.querySelector("#modal-email"));
  }
}

export default ModalEmailForm;
