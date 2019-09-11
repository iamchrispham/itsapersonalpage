import React from 'react';
import { render } from 'react-dom';
import About from '../body/about.jsx';
import Applications from '../body/applications.jsx';
import CodeBlog from '../body/codeblog.jsx';
import Repos from '../body/repos.jsx';


const MenuBar = (props) => {
  function toggleTransition () {
    if(document.querySelector('.body-content').classList.contains('body-content-transition-in')) {
      document.querySelector('.body-content').classList.toggle('body-content-transition-in');
    }
  }

  function renderAbout() {
      render(<About />, document.querySelector('.body-content'))
      document.querySelector('.body-content').classList.toggle('body-content-transition-in');
  }

  function renderApplications() {
    render(<Applications />, document.querySelector('.body-content'))
    document.querySelector('.body-content').classList.toggle('body-content-transition-in');
  }

  function renderCodeBlog() {
    render(<CodeBlog />, document.querySelector('.body-content'))
    document.querySelector('.body-content').classList.toggle('body-content-transition-in');
  }

  function renderRepos() {
    render(<Repos />, document.querySelector('.body-content'))
    document.querySelector('.body-content').classList.toggle('body-content-transition-in');
  }

  return (
    <div className="menubar">
      <ul>
        <li>
          <a href="./index.html">
            Home
            </a>
        </li>
        <li>
          <a style={{ minWidth: 171.2 + 'px' }} onClick={
            () => {
              toggleTransition();
              setTimeout(() => renderAbout(), 300)
            }}>
            About this CodeNinja
          </a>
        </li>
        <li>
          <a onClick={
            () => {
              toggleTransition();
              setTimeout(() => renderApplications(), 300)
            }}>
            Applications
          </a>
        </li>
        <li>
          <a onClick={
            () => {
              toggleTransition();
              setTimeout(() => renderCodeBlog(), 300);
            }}>
            Code Blog
          </a>
        </li>
        <li>
          <a onClick={
            () => {
              toggleTransition();
              setTimeout(() => renderRepos(), 300);
            }
          }>
            Repos
          </a>
        </li>
      </ul>
    </div>
  )
}

export default MenuBar;