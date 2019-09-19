import React, { useState, useEffect } from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import Home from '../body/home.jsx';
import About from '../body/about.jsx';
import Applications from '../body/applications.jsx';
import CodeBlog from '../body/codeblog.jsx';
import Repos from '../body/repos.jsx';


const MenuBar = (props) => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (loading) {
      setLoading(false);
    }
    return () => {
    }
  })


  function toggleTransition() {
    if (document.querySelector('.body-content').classList.contains('body-content-transition-in')) {
      document.querySelector('.body-content').classList.toggle('body-content-transition-in');
    }
  }

  function renderHome() {
    render(<Home />, document.querySelector('.body-content'))
    document.querySelector('.body-content').classList.toggle('body-content-transition-in')
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
    <Router>
      <div className="menubar">
        <ul>
          <li>
            <Link to="/" onClick={
              () => {
                toggleTransition();
                setTimeout(() => renderHome(), 300)
              }
            }>
              Home
          </Link>
          </li>
          <li>
            {/* <a style={{ minWidth: 171.2 + 'px' }} onClick={
            () => {
              toggleTransition();
              setTimeout(() => renderAbout(), 300)
            }}>
            About this CodeNinja
          </a> */}
            <Link to="/about" onClick={
              () => {
                toggleTransition();
                setTimeout(() => renderAbout(), 300)
              }
            }>
              About
          </Link>
          </li>
          <li>
            <Link to="/apps" onClick={
              () => {
                toggleTransition();
                setTimeout(() => renderApplications(), 300)
              }}>
              Applications
          </Link>
          </li>
          <li>
            <Link to="/blog" onClick={
              () => {
                toggleTransition();
                setTimeout(() => renderCodeBlog(), 300);
              }}>
              Code Blog
          </Link>
          </li>
          <li>
            <Link to="/repos" onClick={
              () => {
                toggleTransition();
                setTimeout(() => renderRepos(), 300);
              }
            }>
              Repos
          </Link>
          </li>
        </ul>
      </div>

    </Router>
  )
}

export default MenuBar;