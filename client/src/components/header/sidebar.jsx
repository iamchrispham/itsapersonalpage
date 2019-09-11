import React, { useState, useEffect, Fragment } from 'react';
import { FaListUl } from 'react-icons/fa';
import DropDownMenu from './dropdownmenu.jsx';

function SideBar() {
  const [toggled, setToggle] = useState(false);
  useEffect(() => {
    if (toggled) {
      console.log('sidebar set to render');
    }
  })
  
  const handleClick = () => {
    setToggle(!toggled);
  }

  return (
    <div className="sidebar">
      <span>
      <FaListUl className="sidebar-icon" onClick={() => handleClick()} />
      { toggled ? <DropDownMenu /> : null}
      </span>
    </div>
  )
}


export default SideBar;