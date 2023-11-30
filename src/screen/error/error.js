import React from 'react'
import { useNavigate } from 'react-router-dom';
 const Error = () => {
    const navigate= useNavigate()
  return (
    <>
      <div>404: path not found</div>
      <button onClick={()=>{ navigate("/", { key: "value" } )}}>
        Go Back To Home Page
      </button>
    </>
  );
}
export default Error
