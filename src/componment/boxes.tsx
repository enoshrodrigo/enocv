import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import "../assets/css/boxes.css"; 
import hotel from "../assets/images/hotel.png";
import realCost from "../assets/images/realCost.png";
import studentsysem from "../assets/images/StudentMana.png";

export default function Boxes() {
  const getObj0 = useRef(null);
  const getObj1 = useRef(null);
  const getObj2 = useRef(null);
  const getObj3 = useRef(null);
  const head1 = useInView(getObj0, { amount: 0, once: true });
  const viewBox1 = useInView(getObj1, { amount: 0, once: true });
  const viewBox2 = useInView(getObj2, { amount: 0, once: true });
  const viewBox3 = useInView(getObj3, { amount: 0, once: true });

  const animate = useAnimation();
useEffect(()=>{
if (head1) {
    animate.start("headend");
  }
  if (viewBox1) {
    animate.start("Box1end");
  }
  if (viewBox2) {
    animate.start("Box2end");
  }
  if (viewBox3) {
    animate.start("Box3end");
  }
},[head1,viewBox1,viewBox2,viewBox3])
  

  const fun = () => {};
  return (
    <div className="row mt-3 gap-3 mx-1 p-4" id="Myprojects">
      <motion.div
        onClick={fun}
        ref={getObj0}
        variants={{
          start: { opacity: 0, x: -333 },
          headend: { opacity: 1, x: 0 },
        }}
        initial="start"
        animate={animate}
        transition={{ delay: 0.2, duration: 2 }}
        className="myProject d-flex  text-light rounded-3  justify-content-center "
      >
        <h1 className="fw-bold  p-1">My projects</h1>
      </motion.div>
      <motion.div
        ref={getObj1}
        variants={{
          start: { opacity: 0, x: 333 },
          Box1end: { opacity: 1, x: 0 },
        }}
        initial="start"
        animate={animate}
        transition={{ delay: 0.2, duration: 2 }}
        className="divBox col-md-2   card card-body flex-wrap align-content-center "
      >
        <div className="divBackground ">
          <h2 className=" d-flex justify-content-center row">Hotel system</h2>
          <div className="img d-flex justify-content-center  align-content-between">
            <img src={hotel} className="w-100 " />
          </div>
          <motion.div className="content">
            <p>
              This is our 2nd year 2nd semester group project. We are devoloped
              a hotel management system for a Rico shadow guest house and
              resturant located in wennapuwa sri lanka <br />
              <b>Database</b>: MySQL
              <br />
              <b>Backend Development</b>: Use PHP as the programming language
              for the server-side development.
              <br />
              <b>Frontend Development</b>: JavaScript, HTML, and CSS
              <br />
              <a
                href="/FinalProjectReport2023.pdf"
                download={"/FinalProjectReport2023.pdf"}
              >
                Download Project report
              </a>
              <br />
              <a href="https://natatory-part.000webhostapp.com" target="window">
                Demo of project
              </a>
              <br />
              <a
                href="https://github.com/enoshrodrigo/Hotel-management-system-main"
                target="window"
              >
                Github repo
              </a>
            </p>
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        ref={getObj2}
        variants={{
          start: { opacity: 0, x: 333 },
          Box2end: { opacity: 1, x: 0 },
        }}
        initial="start"
        animate={animate}
        transition={{ delay: 0.2, duration: 2 }}
        className="divBox   col-md-2   card card-body flex-wrap align-content-center"
      >
        <div className="divBackground">
          <h2 className=" d-flex justify-content-center row">Student system</h2>
          <div className="img d-flex justify-content-center  align-content-between ">
            <img src={studentsysem} className="w-100 " />
          </div>
          <motion.div className="content">
            <p>
              This is our 2nd year 1st semester group project. We are devoloped
              a student management system
              <br />
              <b>Database</b>: MySQL
              <br />
              <b>Backend Development</b>: Use PHP as the programming language
              for the server-side development.
              <br />
              <b>Frontend Development</b>: JavaScript, HTML, and CSS
              <br />
              <a
                href="/STUDENT-MANAGEMENT-SYSTEM.pdf"
                download={"/STUDENT-MANAGEMENT-SYSTEM.pdf"}
              >
                Download Project presentation
              </a>
              <br />
              <a
                href="https://github.com/Udara-Dananjaya/Student-Management-System"
                target="window"
              >
                Github repo
              </a>
            </p>
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        ref={getObj3}
        variants={{
          start: { opacity: 0, x: 222 },
          Box3end: { opacity: 1, x: 0 },
        }}
        initial="start"
        animate={animate}
        transition={{ delay: 0.2, duration: 2 }}
        className="divBox   col-md-2   card card-body flex-wrap align-content-center"
      >
        <div className="divBackground">
          <h2 className=" d-flex justify-content-center row">
            Real Cost Calculator
          </h2>
          <div className="img d-flex justify-content-center  align-content-between">
            <img src={realCost} className="w-100" />
          </div>
          <motion.div className="content">
            <p>
              This project is a web-based application designed to assist Costa
              Bakery in Kadawala Katana. Calculating the real cost of their food products based
              on ingredient prices. It allows user to add ingredients along
              with their respective prices for 1 kg, 1 piece, or 1 liter. The
              system dynamically calculates the real cost of food items as
              ingredients are added, providing live updates. 
              <br />
              <b>Database</b>: MySQL
              <br />
              <b>Backend Development</b>: PHP
              <br />
              <b>Frontend Development</b>: JavaScript, HTML, and CSS,Bootstrap
              <br />
              
              <a
                href="https://github.com/enoshrodrigo/costa-bakery"
                target="window"
              >
                Github repo(Under development)
              </a>
              <br />
              <a
                href="https://subarboreal-glances.000webhostapp.com/add_foods.php"
                target="window"
              >
                Demo of project(Under development)
              </a>
            </p>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
