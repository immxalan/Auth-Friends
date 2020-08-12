import React from "react";

const Logout = (props)  => {
const logoff = () => {
    localStorage.removeItem("token")
    props.history.push("/login")
}

   return(
       <div>
        <button onClick={logoff}>Logout</button>
       </div>
   ) 
}
export default Logout;