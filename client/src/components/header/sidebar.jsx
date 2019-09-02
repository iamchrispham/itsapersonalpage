import React, { useState } from 'react';
import { FaListUl } from 'react-icons/fa';

function SideBar() {
  
  return (
    <div className="sidebar">
      <span className="sidebar-icon" >
      <FaListUl onClick={() => console.log('Yo, you clicked on the sidebar icon!')} style={{border: 2 + "px", color: "#000"}}/>
      </span>
    </div>
  )
}


export default SideBar;