import React from 'react';
import { FaLinkedin, FaBattleNet, FaGithub } from 'react-icons/fa';

const Icons = (props) =>
  <div className="icon-content">
    <div className="icon-item 1">
      <a href="http://linkedin.com/in/chrismpham/" className="active" target="_blank">
        <FaLinkedin />
      </a>
    </div>
    <div className="icon-item 2">
      <a href="" className="active">
        <FaBattleNet />
      </a>
    </div>
    <div className="icon-item 3">
      <a href="" className="active">
        <FaGithub />
      </a>
    </div>
  </div>

export default Icons;