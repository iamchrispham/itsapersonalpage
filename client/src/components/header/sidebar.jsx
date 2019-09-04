import React, { useState, useEffect, Fragment } from 'react';
import { FaListUl } from 'react-icons/fa';

function SideBar() {
  const [toggled, setToggle] = useState(false);
  useEffect(() => {
    
  })
  const handleClick = () => {
    setToggle({
      toggled: !toggled,
    })
  }

  return (
    <div className="sidebar">
      <span>
      <FaListUl className="sidebar-icon" onClick={() => handleClick()} />
      {/* { toggled ? console.log('true') : console.log('false') } */}
      </span>
    </div>
  )
}


export default SideBar;