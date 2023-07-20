import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

import "../assets/css/myresults.css";

export default function Result() {
  const resultObj = useRef(null);
  const resultBox = useRef(null);
const animate = useAnimation();
  const head1 = useInView(resultObj, { amount: 0, once: true });

  

  useEffect(() => {
     if (head1) {
        animate.start("headend");
      animate.start("Box1end"); 
      }
 
   
  }, [head1]);

  const results =  [
  {
      name: "Year I: Semester I",
      subject: [
          {
              name: "Fundamentals of Web Design (BSIT 11033)",
              result: "A+"
          },
          {
              name: "Fundamentals of Programming (BSIT 11024)",
              result: "A"
          },
          {
              name: "Introduction to Computer Systems (BSIT 11013)",
              result: "A"
          },
          {
              name: "English for IT (BSIT 11052)",
              result: "B"
          },
          {
              name: "Mathematics for IT (BSIT 110440)",
              result: "B-"
          }
      ]
  },
  {
      name: "Year I: Semester II",
      subject: [
          {
              name: "Database Management Systems (BSIT 12034)",
              result: "A"
          },
          {
              name: "System Analysis and Design (BSIT 12044)",
              result: "B+"
          },
          {
              name: "Operating Systems (BSIT 12023)",
              result: "B"
          },
          {
              name: "Computer Networks (BSIT 12014)",
              result: "C+"
          }
      ]
  },
  {
      name: "Year II: Semester I",
      subject: [
          {
              name: "Object Oriented Programming (BSIT 21023)",
              result: "A+"
          },
          {
              name: "Data Structures and Algorithms (BSIT 21033)",
              result: "A"
          },
          {
              name: "Web Programming (BSIT 21054)",
              result: "A-"
          },
          {
              name: "Software Engineering Methods (BSIT 21013)",
              result: "B+"
          },
          {
              name: "Computer Architecture and Organization (BSIT 21044)",
              result: "B-"
          },
          {
              name: "Introduction to Probability and Statistics (BSIT 21062)",
              result: "C+"
          }
      ]
  },
  {
      name: "Year II: Semester II",
      subject: [
          {
              name: "Visual Application Programming (BSIT 22013)",
              result: "--"
          },
          {
              name: "Multimedia Development (BSIT 22023)",
              result: "--"
          },
          {
              name: "IT Project Management (BSIT 22032)",
              result: "--"
          },
          {
              name: "Cyber Security Fundamentals (BSIT 22043)",
              result: "--"
          },
          {
              name: "Research Methodology and Scientific Communication (BSIT 22052)",
              result: "--"
          },
          {
              name: "Group Software Project (BSIT 22063)",
              result: "--"
          }
      ]
  },
  {
      name: "Year III: Semester I",
      subject: [
          {
              name: "IT Quality Assurance (BSIT 31012)",
              result: "--"
          },
          {
              name: "Big Data Analytics (BSIT 31023)",
              result: "--"
          },
          {
              name: "Introduction to Artificial Intelligence (BSIT 31032)",
              result: "--"
          },
          {
              name: "Professional Practice and Ethics (BSIT 31043)",
              result: "--"
          },
          {
              name: "Web Services (BSIT 31053)",
              result: "--"
          },
          {
              name: "Statistical Distributions (BSIT 31062)",
              result: "--"
          },
          {
              name: "Human Computer Interaction (BSIT 31073)",
              result: "--"
          }
      ]
  },
  {
      name: "Year III: Semester II",
      subject: [
          {
              name: "Industrial Training (GPA) – 6 months – Full Time (BSIT 32006)",
              result: "--"
          }
      ]
  },
  {
      name: "Year IV: Semester I",
      subject: [
          {
              name: "Distributed Systems and Cloud Computing (BSIT 41013)",
              result: "--"
          },
          {
              name: "Advanced Database Systems (BSIT 41023)",
              result: "--"
          },
          {
              name: "Applied Machine Learning (BSIT 41033)",
              result: "--"
          },
          {
              name: "Data Mining & Data Warehousing (BSIT 41043)",
              result: "--"
          },
          {
              name: "Information Retrieval and Web Analytics (BSIT 41053)",
              result: "--"
          },
          {
              name: "Mobile Application Development (BSIT 41063)",
              result: "--"
          },
          {
              name: "Research Project (BSIT 43078)",
              result: "--"
          }
      ]
  },
  {
      name: "Year IV: Semester II",
      subject: [
          {
              name: "Wireless communication and Networks (BSIT 42013)",
              result: "--"
          },
          {
              name: "Introduction to IoT (BSIT 42023)",
              result: "--"
          },
          {
              name: "Enterprise Application Development (BSIT 42033)",
              result: "--"
          },
          {
              name: "Data Visualization (BSIT 42042)",
              result: "--"
          },
          {
              name: "Cyber Attacks and Detection (BSIT 42053)",
              result: "--"
          }
      ]
  }

  ]

  return (
    <div ref={resultBox}
    className="row mt-3 gap-3 mx-1 p-4" id="Myprojects">
      <motion.div
      
        variants={{
          start: { opacity: 0, y: -80 },
          headend: { opacity: 1, y: 0 },
        }}
        initial="start"
        animate={animate}
        transition={{ delay: 0.2, duration: 2 }}
        className="myProject d-flex  text-light rounded-3  justify-content-center "
      >
        <h1   ref={resultObj} className="fw-bold  p-1">My Degree results</h1>
      </motion.div>
      {results.map((data, key) => (
        <motion.div
          
          variants={{
            start: { opacity: 0, y:-150 },
            Box1end: { opacity: 1, y: 0 },
          }}
          initial="start"
          animate={animate}
          transition={{ delay: 0.2, duration: 2 }}
          className="divBox resultBoxes col-md-2   card card-body flex-wrap align-content-center "
        >
          <div className="resultDivBackground ">
            <h2 className=" d-flex justify-content-center row">{data.name}</h2>

            {data.subject.map((subject, key) => (
              // console.log(resu.name,resu.result,data)
              <motion.div className="Resultcontent">
                <p className="resultPara" style={{ textAlign: "justify" }}>
                  {subject.name} 
                </p>{" "}
                <span className="resultGrade">
                  <b>{subject.result}</b>
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      ))}

      
    </div>
  );
}
