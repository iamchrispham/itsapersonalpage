import React, { useState, useEffect } from 'react';
import axios from 'axios';

// React Hooks -- attempt an axios request to load data

const Repos = () => {
  const [loading, setLoading] = useState(true);
  const [repos, setRepos] = useState(null);
  const [error, setError] = useState(null);
  let source = axios.CancelToken.source();

  useEffect(() => {
    if (loading && !repos) {
      axios.get('/api/repos', { cancelToken: source.token })
        .then(({ data }) => {
          setRepos(data);
          setLoading(false);
        })
        .catch(({message}) => console.log(message));
    }

    return () => {
      if (loading){
        source.cancel("(=^.^=)");
      }
    }
  }, [])

  /*
    TODOS:  Refactor database side to pull persisted data
            Loading PNG
            CSS for rendering Repos
  */
  const renderRepos = () => {

    return (
      <div>
        {repos.map(({ name, html_url }, i) => {
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
        {!loading ? renderRepos() : null}
      </div>
    </div>
  )
}

export default Repos;