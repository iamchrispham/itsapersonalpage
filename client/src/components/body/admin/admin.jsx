import React, {useState, useEffect} from 'react';

const Admin = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  useEffect(() => { 
    if(loading) {
      console.log('Admin page loading..')
      setLoading(false);
    }
    return ()=> {

    }
  })
  return (
    <div className="admin-container">
      <div className="admin-content">
        Admin content
      </div>
    </div>
  )

}

export default Admin;