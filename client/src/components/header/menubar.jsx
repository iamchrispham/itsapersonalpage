import React from 'react';
import { createPortal } from 'react-dom';

const MenuBar = (props) => {
  return (
    <div className="menubar">
      <ul>
        <li>
          <a href="./index.html">
            Home
            </a>
        </li>
        <li>
          <a style={{ minWidth: 171.2 + 'px'}} onClick={() => console.log('bodystuff')}>
            About this CodeNinja
          </a>
        </li>
        <li>
          <a href="">
            Applications
          </a>
        </li>
      </ul>
    </div>
  )
}

export default MenuBar;