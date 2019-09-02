import React, { useState } from 'react';
import SideBar from './sidebar.jsx';
import MobileHeaderContent from './mobileheadercontent.jsx';

function MobileHeader() {


  return (
    <div className="mobile-header">
      <SideBar />
      <MobileHeaderContent />
    </div>
  )
}


export default MobileHeader;