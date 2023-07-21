import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import video1 from "../assets/videos/bodyOne.mp4"; // Update the path to the video file
import "../assets/css/bodyTwo.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCode,
  faCodeBranch,
  faCodeCommit,
  faLanguage,
  faMicrochip,
  faUserSecret,
  faWindowRestore,
} from "@fortawesome/free-solid-svg-icons";

export default function Skills() {
  const getSkillBox = useRef(null);
  const animate = useAnimation();
  const viewBox1 = useInView(getSkillBox, { amount: 0, once: true });
  useEffect(() => {
    if (viewBox1) {
      animate.start("headend");
    }
  }, [viewBox1]);

  return (
    <motion.div
      ref={getSkillBox}
      variants={{
        start: { opacity: 0,y: 100 },
        headend: { opacity: 1 ,y: 0},
      }}
      initial="start"
      animate={animate}
      transition={{ delay: 0.2, duration: 4, type: "spring" }}
      className="  "
    >
      <div className="mySkils position-absolute  p-2 z-2  mt-2  ">
        <h1 className="">My skills</h1>
      </div>

      <div className="SkillBox   p-3 m-2 rounded-3  d-flex" id="SkillBox">
        <video
          src={video1}
          loop
          autoPlay
          muted
          className=" w-50 mt-3 mx-2 video rounded-3"
        />

        <div className="d-flex justify-content-center   w-100 skillRight">
          <div>
            <h1 className="m-1 mb-4">👀About my skills I’m interested in</h1>
            <ul className="list  mx-0 list-unstyled">
              <li>
                <FontAwesomeIcon
                  icon={faCode}
                  size="lg"
                  style={{ color: "#3f7bca" }}
                />
                <span> Programming languages: </span>
                <b>PHP, JavaScript, Java</b>{" "}
              </li>
              <li>
                <FontAwesomeIcon
                  icon={faCodeBranch}
                  size="lg"
                  style={{ color: "#348964" }}
                />
                <span> Backend development : </span>
                <b>MySQL, Node.js, Database management</b>{" "}
              </li>
              <li>
                <FontAwesomeIcon
                  icon={faWindowRestore}
                  size="lg"
                  style={{ color: "#9d4343" }}
                />
                <span> Front-end development: </span>
                <b>React TSX, Bootstrap, HTML, CSS</b>{" "}
              </li>
              <li>
                <FontAwesomeIcon
                  icon={faCodeCommit}
                  size="lg"
                  style={{ color: "#07a7b7" }}
                />
                <span>
                  {" "}
                  <b> Basic Object-oriented programming (OOP) concepts</b>{" "}
                </span>
              </li>
              <li>
                <FontAwesomeIcon
                  icon={faMicrochip}
                  size="lg"
                  style={{ color: "#843e75" }}
                />
                <span>
                  {" "}
                  <b> Strong problem-solving and troubleshooting skills</b>{" "}
                </span>
              </li>
              <li>
                <FontAwesomeIcon
                  icon={faUserSecret}
                  size="lg"
                  style={{ color: "#aaa63c" }}
                />
                <span>
                  {" "}
                  <b>
                    {" "}
                    Adaptability and ability to learn new technologies quickly
                  </b>{" "}
                </span>
              </li>
              <li>
                <FontAwesomeIcon
                  icon={faLanguage}
                  size="lg"
                  style={{ color: "#775131" }}
                />
                <span>
                  {" "}
                  <b> Basic English language skills for communication</b>{" "}
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
