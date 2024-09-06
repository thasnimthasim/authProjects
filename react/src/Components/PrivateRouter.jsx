import { useEffect, useState } from "react";


function PrivateRoute() {
//logic goes here
 const [isAuthenticated,setIsAuthenticated] =useState(null)

 useEffect(()=>{
  const checkAuth = ()=>{
    axios.get("http://localhost:3000/checkAuth",{withCredentials: true})
     .then((res)=>{
      if(res.data.authenticated){
        console.log(res.data.authenticated);
        setIsAuthenticated(res.data.authenticated)
        
      }
     })
     .catch((err)=>{
      console.log(err);
     
      
     })
  }
  checkAuth()
},[navigate])
  return (
     <>
      isAuthenticated ? children : <Navigate to="/login" />
     </>
     );
}

export default PrivateRoute;