import React from 'react';
import Icons from '../react-icons/icons.jsx';
import MenuBar from './menubar.jsx';

const Header = (props) =>
<div className="sticky-header">
  <div className="header-content" id="header-content">
    <div className="col1">
      Christopher Pham
    </div>
    <div className="col2">
      <MenuBar />
    </div>
    <div className="col3">
      <Icons />
    </div>
  </div>
</div>

export default Header;