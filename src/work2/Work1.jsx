import { useState } from "react";
import { motion } from "framer-motion";
import img from "../assets/Task prototype/ig1.png";
import home from "../assets/safe-home.png";
import verify from '../assets/verify.png'
import "../App.css";
import './work1.css'
const Contrast = {
  initial: { scale: 1 },
  hover: {
    scale: 1,
    transition: { type: "spring", stiffness: 620, damping: 15 },
  },
};

const Contrast1 = {
  initial: { scale: 1 },
  hover: {
    scale: 1,
    transition: { type: "spring", stiffness: 620, damping: 15 },
  },
};

const Contrast2 = {
  initial: {
    y: 70,
    width: "220px",
    height: "290px",
    borderRadius: "10%",
  },
  hover: {
    y: 0,
    width: "300px",
    height: "400px",
    borderRadius: "30px",
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 20,
    },
  },
};



const Float1 = {
  initial: { y: -190, x: 180 },
  hover: {
    y: -250,
    x: 150,
    transition: { type: "spring", stiffness: 200, damping: 15 },
  },
};

const Float2 = {
  initial: { y: 270, x: -150 },
  hover: {
    y: 200,
    x: -50,
    transition: { type: "spring", stiffness: 200, damping: 15 },
  },
};

const Float8 = {
  initial: { scale: 1 },
  hover: {
    scale: 1,
    transition: { type: "spring", stiffness: 300, damping: 15 },
  },
};

function Work1() {
  const [jugle, setJugle] = useState(false);
  return (
    <div
      className="second container"
    >
      <div className="row">
        <div className="col-lg-5 col-md-12 col-sm-12 sb">
          <motion.div
            initial="initial"
            animate={jugle ? "hover" : "initial"}
            onMouseEnter={() => setJugle(true)}
            onMouseLeave={() => setJugle(false)}
            variants={Contrast}
            style={{
              width: "500px",
              height: "500px",
              border: "2px dashed gray",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "50%",
              position: "relative",
              overflow: "visible",
            }}
          >
            <motion.div
              initial="initial"
              animate={jugle ? "hover" : "initial"}

              variants={Contrast1}
              style={{
                width: "400px",
                height: "400px",
                position: "absolute",
                borderRadius: "50%",
                overflow: "hidden",
                zIndex: 10,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  border: "50px solid #6941c6",
                  borderRadius: "50%",
                  position: "absolute",
                  backgroundColor: "#e9d7fe",
                  top: 0,
                  left: 0,
                  zIndex: 1,
                }}
              />

              <motion.img
                variants={Contrast2}
                src={img}
                alt="main"
                initial="initial"
                animate={jugle ? "hover" : "initial"}

                style={{
                  position: "absolute",
                  bottom: "0px",
                  width: "220px",
                  height: "290px",
                  objectFit: "cover",
                  zIndex: 11,
                  pointerEvents: "none",
                }}
              />
            </motion.div>

            <motion.div
              variants={Float1}
              initial="initial"
              animate={jugle ? "hover" : "initial"}

              style={glassBoxStyle}>
              <div >
                <motion.div initial="initial"
                  animate={jugle ? "hover" : "initial"}
                  variants={Float8} style={iconStyle("#6941c6")}>
                  <img src={home} alt="home" />
                </motion.div>

                <div className="divclas">
                  <h3>85%</h3>
                  <h4>Sales Growth</h4>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial="initial"
              animate={jugle ? "hover" : "initial"}

              variants={Float2}
              style={glassBoxStyle}>
              <div>
                <motion.div initial="initial"
                  animate={jugle ? "hover" : "initial"}
                  variants={Float8} style={iconStyle("#6941c6")}>
                  <img src={home} alt="home" />
                </motion.div>

                <div className="divclas">
                  <h3>85%</h3>
                  <h4>Sales Growth</h4>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
        <div className="col-lg-7 col-md-12 col-sm-12">
          <p className="para12">Welcome To Socialzy</p>
          <h4 className="h4">The Best Service For You</h4>
          <p className="para13">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eius
            tempor incididunt ut labore et dolore magna aliqua. enim minim veniam</p>
          <div className="design">
            <div className="design1">
              <img src={verify} className="verify"></img>
            </div>
            <div className="design12">
              <h5>Optimization Engine Rank</h5>
              <p>Lorem ipsum dolor sit amet consecte nadipiscing elit</p>
            </div>
          </div>
          <div className="designn">
            <div className="design1">
              <img src={verify} className="verify"></img>
            </div>
            <div className="design12">
              <h5>Optimization Engine Rank</h5>
              <p>Lorem ipsum dolor sit amet consecte nadipiscing elit</p>
            </div>
          </div>
          <div className="design">
            <div className="design1">
              <img src={verify} className="verify"></img>
            </div>
            <div className="design12">
              <h5>Optimization Engine Rank</h5>
              <p>Lorem ipsum dolor sit amet consecte nadipiscing elit</p>
            </div>
          </div>
        </div>
      </div>
    </div >
  );
}

const glassBoxStyle = {
  position: "absolute",
  width: "225px",
  height: "100px",
  backgroundColor: "rgba(255, 255, 255, 0.3)",
  backdropFilter: "blur(10px)",
  WebkitBackdropFilter: "blur(10px)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: "20px",
  zIndex: 20,
  pointerEvents: "none"
};

const iconStyle = (color) => ({
  position: "absolute",
  width: "50px",
  height: "50px",
  borderRadius: "50%",
  backgroundColor: color,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 20,
});

export default Work1;
