import React from 'react';
import { useNavigate } from 'react-router-dom';
import notfound from '../../assets/404-error-page.jpg';
const Notfound = () => {
  const navigate = useNavigate()
  const notfoundhandler=()=>{
    navigate('/')
  }
  return (
    <div className="relative" >
      
      <img style={{width:'1500px', height:'471px'}} src={notfound} alt=""/>
      <button onClick={notfoundhandler} className="btn btn-wide btn-secondary absolute inset-x-1/2 left-44 top-1/2 h-16">Go to Home</button>
    </div>
  );
}

export default Notfound;
