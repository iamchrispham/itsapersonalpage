import React, { useState, useEffect } from 'react';
import axios from 'axios';

// React Hooks -- attempt an axios request to load data

const Repos = () => {
  const [loading, setLoading] = useState(false);
  const [repos, setRepos] = useState(null);
  useEffect(() => {
    if (!loading) {
      axios.get('/api/repos')
        .then(({data}) => {
          setRepos(data);
          setLoading(true);
        })
        .catch((err) => console.log('Error fetching data:', err.stack));
    }
  })

  /*
    TODOS:  Refactor database side to pull persisted data
            Loading PNG
            CSS for rendering Repos
  */
  const renderRepos = () => {

    return(
    <div>
      {repos.map(({name, html_url}, i) => {
        return (
          <div className={`repo-item ${i}`} key={i}>
            <a href={html_url} >
            {name}
            </a>
          </div>
        )
      })}
    </div>
    )
  }

  return (
    <div className="codeblog-container">
      <span>
        Repos and shit...
      </span>
      <div className="repos-container">
        {loading ? renderRepos() : null}
      </div>
    </div>
  )
}

export default Repos;