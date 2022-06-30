import React,{useState,useEffect} from 'react';
import { useNavigate } from 'react-router-dom';


import '../styles/errorpage.css';
function Pagenotfound(props) {
  const history = useNavigate();
  const[winHeight,setwinHeight]=useState()

  useEffect(()=>{
    setwinHeight(window.innerHeight)
  })
  
function goback(){
  history('/')
}
  console.log(window.innerHeight)
    return (
  <>
  <div className="errorMainDiv" style={{height:winHeight}}>
    <h1>404</h1>
    <p>page not found</p>
    <button type='button' onClick={()=>{goback()}}>Go Back</button>

  </div>
  </>
    );
}

export default Pagenotfound;