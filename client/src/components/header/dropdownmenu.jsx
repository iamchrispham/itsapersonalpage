import React, {useState, useEffect, Fragment} from 'react';

function DropDownMenu () {
  const [toggled, isToggled] = useState(false);


  return <Fragment>
    {toggled ? 
    <div className="dropdownmenu-overlay">
      
    </div> : null}
  </Fragment>
}

export default DropDownMenu;