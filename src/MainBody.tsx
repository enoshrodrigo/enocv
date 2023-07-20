import React  from "react";
import BodyOne from "./componment/BodyOne"; 
import Skills from "./componment/BodyTwo";
import Objectives from "./componment/BodyThree";
 import Boxes from "./componment/boxes";
import Certifications from "./componment/Certifications";
import Result from "./componment/Myresults";
import Footer from "./componment/Footer";
export default function MainBody() {
 
  return (
    <div  
   
    >

     <BodyOne />
      <Objectives />
      <Skills />
      <Boxes />
      <Certifications />
      <Result />
      <Footer />
 
 </div>
  );
}
