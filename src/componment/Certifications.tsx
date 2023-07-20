import React ,{ useEffect, useRef }from "react";
import { motion, useAnimation , useInView } from "framer-motion"; 
import '../assets/css/certifications.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {   faCertificate, faFileCode, faTable, faGraduationCap, faUserGraduate, faSave,  faMouse } from '@fortawesome/free-solid-svg-icons'
 
export default function Certifications() {
  const certifyBox = useRef(null);
  const animate = useAnimation();
  const viewBox1 = useInView(certifyBox, { amount: 0, once: true });
  useEffect(()=>{
    if (viewBox1) {
      animate.start("headend");
    }
  },[viewBox1])

 
  return (
 
      <motion.div
      ref={certifyBox}
        variants={{
          start: { opacity: 0, x: -333 },
          headend: { opacity: 1, x: 0 },
        }}
        initial="start"
        animate={animate}
        transition={{ delay: 0.2, duration: 3,type:"spring" }}
      className="  ">
        <div className="certificates position-absolute  p-2 z-2  mt-2  ">
          <h1 className="">Certifications</h1>
          
           </div> 
          
          
           <div className="certificatesBox   p-3 m-2 rounded-3  d-flex" id="Certifications">  
           
           
          <div className= "d-flex justify-content-center   rounded-4 w-100 certificatesRight">
         <p className="certificatesBox"> 
             <div>
            <h1 className="m-1 mb-4" ><FontAwesomeIcon icon={faCertificate} style={{color: "#3f7bca",}} /> About My Certifications</h1>
            <ul className="list  mx-0 list-unstyled"> 
        <li><FontAwesomeIcon icon={faUserGraduate} size="lg" style={{color: "#a03131",}} /><b><span> BSc in Information Technology (Expected Graduation: 2025)</span> </b>BCI Campus Negombo, <a href="https://www.bci.lk/course/bachelor-of-science-honours-in-information-technology/" style={{ textDecoration:"none",color:"#00dcff"}} target="_blank"> Credential ID: BSCIT21008  </a></li>
        <li><FontAwesomeIcon icon={faFileCode} size="lg" style={{color: "#24602e",}} /><b><span> Programming in Python (2022)</span> </b>University of Moratuwa, <a href="https://open.uom.lk/lms/mod/customcert/verify_certificate.php?contextid=4776&code=SGG4nf7BN0&qrcode=1" style={{ textDecoration:"none",color:"#00dcff"}} target="_blank"> Credential ID: SGG4nf7BN0  </a></li>
        <li><FontAwesomeIcon icon={faTable} size="lg" style={{color: "#775a28",}} /><b><span> Data Entry(2022 /6months)</span> </b>SearchSpace GEO- British Columbia, Canada (Online), <a href="https://www.searchspacegeo.com/" style={{ textDecoration:"none",color:"#00dcff"}} target="_blank"> Credential ID: BSCIT21008  </a></li>
        <li><FontAwesomeIcon icon={faGraduationCap} size="lg" style={{color: "#6a7f1f",}} /><b><span> BRIDGE – University Preparation Programme (2021)</span> </b>BCI Campus Negombo, <a href="https://benedictxvi-my.sharepoint.com/:i:/g/personal/enosh_rodrigo_it_bci_lk/EXueSRMzKB1MpABFfu9Sxy4BcgU7cLxHqYzLTxCftoQeUg?e=ldfe9V" style={{ textDecoration:"none",color:"#00dcff"}} target="_blank"> Credential ID: 2020185363  </a></li>
        <li><FontAwesomeIcon icon={faSave} size="lg" style={{color: "#870e9d",}} /><b><span> Certificate in Information & Communication Technology (2018)</span> </b>BCI Campus Negombo, <a href="https://www.bci.lk/course/certificate-in-ict/" style={{ textDecoration:"none",color:"#00dcff"}} target="_blank"> Credential ID: 200122100685  </a></li>
        <li><FontAwesomeIcon icon={faMouse} size="lg" style={{color: "#4d39f3",}} /><b><span> Certificate in Computing (Aug 2013)</span> </b>Institute of Business and
Technological Studies, <a href="https://benedictxvi-my.sharepoint.com/:i:/g/personal/enosh_rodrigo_it_bci_lk/EXkm43XGvmJGr3bgHtusRcQBSOYJJ9FSBF7ZAdn3qnSVVQ?e=JJcfWQ" style={{ textDecoration:"none",color:"#00dcff"}} target="_blank"> Credential ID: MBK110007  </a></li>
      
      </ul>
 
     </div>
     </p>
      </div>
      </div>

      </motion.div>
 
  );
}
