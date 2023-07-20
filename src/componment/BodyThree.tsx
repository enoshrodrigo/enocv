import React from "react";
import { motion } from "framer-motion"; 
import "../assets/css/bodyThree.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; 
import {
  faCode,
  faCodeBranch,
  faCodeMerge,
  faDatabase,
  faLanguage,
  faMicrochip,
  faSkull,
  faUserSecret,
  faWindowRestore,
} from "@fortawesome/free-solid-svg-icons";

export default function Objectives() {
  return (
    <motion.div className="">
      <div className="myObjectives position-absolute p-2 z-2 mt-2">
        <h1 className="text-center">Objectives</h1>
      </div>

      <div className="ObjectiveBox bg-light p-3 m-2 mt-3 rounded-3 d-flex">
        <div className="d-flex justify-content-center w-100">
          <div>
            <h1 className="m-1 mb-4 text-center  ">🌟Hello</h1>

            <div className="text-center">
              <p className="para">
                I am a passionate developer with a focus on web development. I enjoy creating innovative solutions and working on exciting projects. Currently, I am a student and constantly expanding my skills in various technologies.
              </p>
              <p className="learning">
                <b>🌱 I’m currently learning:</b>
                <ul className="">
                  <li><FontAwesomeIcon icon={faCode} className="me-2 text-primary" />Advanced JavaScript techniques</li>
                  <li><FontAwesomeIcon icon={faCodeBranch} className="me-2 text-primary" />Frameworks such as React and React native</li>
                  <li><FontAwesomeIcon icon={faDatabase} className="me-2 text-primary" />Database management and optimization</li>
                </ul>
              </p>
              <p className="interests">
                <b>👀 I’m interested in:</b>  
                <ul className="">
                  <li><FontAwesomeIcon icon={faMicrochip} className="me-2 text-danger" />Full-stack web development</li>
                  <li><FontAwesomeIcon icon={faWindowRestore} className="me-2 text-danger" />Creating intuitive and user-friendly interfaces</li>
                  <li><FontAwesomeIcon icon={faSkull} className="me-2 text-danger" />Solving real-world problems through technology</li>
                </ul>
              </p>
              <p className="collaborate">
                <b>💞️ I’m looking to collaborate on:</b> 
                <ul className="">
                  <li><FontAwesomeIcon icon={faCodeMerge} className="me-2 text-info" />Web development projects</li>
                  <li><FontAwesomeIcon icon={faLanguage} className="me-2 text-info" />Open-source initiatives</li>
                  <li><FontAwesomeIcon icon={faUserSecret} className="me-2 text-info" />Building practical applications</li>
                </ul>
              </p>
            </div>
          </div>
        </div> 
      </div>
    </motion.div>
  );
}
