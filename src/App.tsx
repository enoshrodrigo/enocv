import React from 'react'; 
import './App.css';
import "bootstrap/dist/css/bootstrap.css";
import BottomMenue from './componment/BottomMenue'
import MainBody from './MainBody';
import { Parallax, ParallaxLayer  } from "@react-spring/parallax";
 
function App() { 
  return (
    <div
    style={{scrollBehavior:"smooth"}} 
    className="App">
 
    <MainBody />
    
       <BottomMenue /> 
    
     
    

   
      
  
      
    

    </div>
  );
}

export default App;
