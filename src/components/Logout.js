import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom';


function Logout() {

    useEffect(() => {
      localStorage.clear()
      history.push("/")
        
    }, []);
    const history = useHistory()
  return (
    <div></div>
  )
}

export default Logout