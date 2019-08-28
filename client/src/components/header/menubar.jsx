import React from 'react';

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
          <a href="">
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