 
import "../assets/css/mainbody.css";
import { motion } from "framer-motion";
import me from "../assets/images/me.png";
 

export default function BodyOne() {

  return (
    <div>
<motion.div 
 
 variants={{
     bstart:{opacity:0,x:-120},
     bend:{opacity:1,x:0}

 }}
 initial="bstart" animate="bend" transition={{ duration:2  }}
   className="d-flex justify-content-center  align-content-center  gap-3 mt-1  mx-2 p-4 rounded-4 mainBox"
   id=""
 >
   <div className="d-flex justify-content-center flex-column align-content-center">
     <h1 className=" d-flex justify-content-center Myabout">ABOUT ME </h1>
     <br />
     <p 
     className=" text-wrap  fw-bold aboutMepara">
       I am Enosh rodrigo currently pursuing a Bachelor of Science in Information
       Technology with a focus on programming languages such as C++, java,
       C#, PHP, MySql, and JavaScript at BCI Campus. I am dedicated to
       expanding my skillset and staying up to date with the latest
       technologies and industry trends. My certificate in Information &
       Communication Technology from BCI Campus and my Python programming
       credential from the University of Moratuwa further demonstrate my
       commitment to ongoing professional development.
     </p>
   </div>
   <div className="d-flex justify-content-center flex-column align-content-center  rightBox">
     <h1 className="d-flex justify-content-center m-2 fw-bold Myname">Enosh Rodrigo</h1>
     <br />
     <div className="d-flex justify-content-center rounded-5 mx-3 leftPicbox">
     <img src={me} className=" rounded-5" width={"98%"} />
     </div>
   </div>


 </motion.div>
 
</div>

  );
}
