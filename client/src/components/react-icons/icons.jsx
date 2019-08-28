import React from 'react';
import { FaLinkedin, FaBattleNet, FaGithub } from 'react-icons/fa';

const Icons = (props) =>
  <div className="icon-content">
    <div className="icon-item">
      <a href="http://linkedin.com/in/chrismpham/" target="_blank">
        <FaLinkedin />
      </a>
    </div>
    <div className="icon-item">
      <a href="">
        <FaBattleNet />
      </a>
    </div>
    <div className="icon-item">
      <a href="">
        <FaGithub />
      </a>
    </div>
  </div>

export default Icons;