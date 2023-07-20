import React, { useRef, useEffect } from "react";
import "../assets/css/bottom.css";
import { motion, useInView, useAnimation } from "framer-motion";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCertificate, faHome, faLightbulb, faTasks } from '@fortawesome/free-solid-svg-icons'

export default function BottomMenue() {
     const contact = useRef(null);
  const checkInView = useInView(contact);
  const hover = useAnimation();
 
  useEffect(() => {
    const interval = setInterval(() => {
      if (checkInView) {
        hover.start({ rotate: 360 }).then(() => {
          hover.set({ rotate: 0 });
        });
       
      }
    }, 8000);

    return () => clearInterval(interval);
  }, [checkInView,contact]);


  return (
    <div >
    <motion.div
     variants={{
        start: {opacity:0, y:333},
        end: { opacity: 1, y: 0},
      }}
      initial="start"
      animate="end"
      transition={{ delay: 0.2, duration: 2 }}
     className=" footer  d-flex justify-content-center     fixed-bottom  m-0">
      
      <div className="footer-class  rounded-5" >
        <ul className="m-4 d-flex" style={{padding:0}} ref={contact}>
        <motion.a
            href="#"
            transition={{ type: "spring", duration: 3.8,delay:0 }}
             
           
            className=" link-body-emphasis"
          >
            {" "}
            <li className="  d-flex" style={{marginRight:"16px"}}>
            <FontAwesomeIcon icon={faHome} size="lg" style={{color:"black",scale:"1.84"}} className="" />
            </li>{" "}
          </motion.a>

          <motion.a
            href="#SkillBox"
            transition={{ type: "spring", duration: 3.8,delay:0 }}
            animate={hover}
           
            className=" link-body-emphasis contactIcon"
          >
            {" "}
            <li className="mx-4 d-flex">
            <FontAwesomeIcon icon={faLightbulb} size="lg" style={{color:"yellow",scale:"1.85"}}  />
            </li>{" "}
          </motion.a>

          <motion.a
            transition={{ type: "spring", duration:3.8,delay:0.3 }}
            animate={hover}
            href="#Myprojects"
          
            className=" link-body-emphasis contactIcon"
          >
            <li className="mx-4 d-flex  ">
            <FontAwesomeIcon icon={faTasks} size="lg" style={{color:"#0066ff",scale:"1.85"}}  />

            </li>
          </motion.a>
          <motion.a
            transition={{ type: "spring", duration: 4.9,delay:0.55 }}
            animate={hover}
            href="#Certifications"
           
            className=" link-body-emphasis contactIcon"
          >
            <li className="mx-4 d-flex  ">
            <FontAwesomeIcon icon={faCertificate} size="lg" style={{color: "#3f7bca",scale:"1.85"}}   />
            </li>
          </motion.a>

          <motion.a
            transition={{ type: "spring", duration:3.8,delay:0.9 }}
            animate={hover}
            href="https://www.linkedin.com/in/enosh-rodrigo"
            target="window"
            className=" link-body-emphasis contactIcon"
          >
            <li className="mx-4 d-flex  ">
            <svg   xmlns="http://www.w3.org/2000/svg" style={{scale:"1.8"}} width="18" height="18"   className="bi bi-linkedin" viewBox="0 0 16 16"> <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" fill="white"></path> </svg>
              </li>
          </motion.a>

          <motion.a
            transition={{ type: "spring", duration:3.8,delay:1.2 }}
            animate={hover}
            href="https://github.com/enoshrodrigo"
            target="window"
            className=" link-body-emphasis contactIcon"
          >
            <li className="mx-4 d-flex  ">
            <svg   xmlns="http://www.w3.org/2000/svg" style={{scale:"1.8"}} width="18" height="18" fill="#ffffff" className="bi bi-github" viewBox="0 0 16 16"> <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" fill="white"></path> </svg>
            </li>
          </motion.a>

          
        </ul>
      </div>
      
    </motion.div>
     </div>
  );
}
