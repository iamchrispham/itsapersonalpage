import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Retro = () => {
  const [loading, setLoading] = useState(true);
  const [postData, setPostData] = useState('');
  useEffect(() => {
    if (loading) {
      console.log('Loading Retro-Form...')
      setLoading(false);
    }

    return () => {

    }
  })

  const handleSubmit = (e) => {
    e.preventDefault();
    if (postData) {
      axios.post('/api/retro', {
        postData: postData
      })
      .then(({data}) => {
        console.log('Post Response from Server:', data)
        setPostData('');
      })
      .catch((err) => console.log('Err:', err.stack))
    }
  }

  const handleChange = (e) => {
    setPostData(e.target.value);
  }

  return (
    <div className="retro-container">
      <div className="retro-form">
        <form onSubmit={handleSubmit}>
          Simple Test: <input onChange={handleChange} value={postData}>
          </input>
          <button>
            SUBMIT
          </button>
        </form>
      </div>
    </div>
  )
}


export default Retro;