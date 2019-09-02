import React, { Fragment } from 'react';
import { createPortal } from 'react-dom';
import InnerEmail from '../modals/inneremail.jsx';

class ModalEmailForm extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Fragment>
        {this.props.showEmailForm ? createPortal(<InnerEmail children={this.props} role={'dialog'} />, document.querySelector("#modal")) : null}
      </Fragment>
    )
  }
}



export default ModalEmailForm;





















// const modalEmailRoot = document.getElementById('modal-email');

// class ModalEmailForm extends React.Component {
//   constructor(props) {
//     super(props);
//     // this.elem = document.createElement('div');
//   }

//   // componentDidMount() {
//   //   modalEmailRoot.appendChild(this.elem);
//   // }

//   // componentWillUnmount() {
//   //   modalEmailRoot.removeChild(this.elem);
//   // }

//   render() {
//     return createPortal(<InnerEmail children={this.props} />, document.querySelector("#modal-email"));
//     // {this.showEmailForm ? createPortal(<InnerEmail children={this.props} />, document.querySelector("#model-email")) : null}
//   }
// }