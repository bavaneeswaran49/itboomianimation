import { useState } from "react";
import { motion } from "framer-motion";
import img from "../assets/Task prototype/ig1.png";
import instagram from "../assets/instagram.png";
import play from "../assets/triangle.png";
import verify from "../assets/verify.png";
import wifi from "../assets/wifi-square.png";
import home from "../assets/safe-home.png";
import { FaArrowCircleRight } from "react-icons/fa";
import { FaPlay } from "react-icons/fa";
import { FaComputer } from "react-icons/fa6";
import { FaHardDrive } from "react-icons/fa6";
import { BsStopwatchFill } from "react-icons/bs";
import { FaWallet } from "react-icons/fa";
import "../App.css";
import './work.css';


const Contrast = {
  initial: { scale: 1 },
  hover: {
    scale: 1.05,
    transition: { type: "spring", stiffness: 620, damping: 12 },
  },
};

const Contrast1 = {
  initial: { scale: 1 },
  hover: {
    scale: 1.02,
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
  initial: { y: -180, x: 200 },
  hover: {
    y: -220,
    x: 140,
    transition: { type: "spring", stiffness: 200, damping: 15 },
  },
};

const Float2 = {
  initial: { y: 250, x: -150 },
  hover: {
    y: 200,
    x: -200,
    transition: { type: "spring", stiffness: 200, damping: 15 },
  },
};

const Float3 = {
  initial: { y: 0, x: 250 },
  hover: {
    y: 0,
    x: -250,
    transition: { type: "spring", stiffness: 200, damping: 15 },
  },
};

const Float4 = {
  initial: { y: 200, x: 150 },
  hover: {
    y: -200,
    x: -150,
    transition: { type: "spring", stiffness: 200, damping: 15 },
  },
};

const Float5 = {
  initial: { y: -250, x: 0 },
  hover: {
    y: 250,
    x: 0,
    transition: { type: "spring", stiffness: 200, damping: 15 },
  },
};

const Float6 = {
  initial: { y: -150, x: -200 },
  hover: {
    y: 150,
    x: 200,
    transition: { type: "spring", stiffness: 200, damping: 15 },
  },
};

const Float7 = {
  initial: { y: 100, x: -230 },
  hover: {
    y: -100,
    x: 230,
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
const Arrow = {
  initial: { scale: 1 },
  hover: {
    x: 10,
  }
}

function Work() {
  const[work,setWork]=useState(false);
  return (
    <>
      <div className="container landing">
        <div className="row">
          <div className="col-lg-6 col-md-12 col-sm-12 lan1">
            <p className="para1">Welcome To Socialzy</p>
            <h1 className="lanh1">
              Socalize Your Social
              Media With Socialzy
            </h1>
            <p className="para2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eius
              tempor incididunt ut labore et dolore magna aliqua. enim minim veniam,
              quis nostrud exercitation adispaci</p>
            <div className="fbuttons">
              <motion.div
                className="fbutton1"
                initial="initial"
                whileHover="hover"
              >
                <p className="fbuttonp">Get Started</p>
                <motion.div variants={Arrow}>
                  <FaArrowCircleRight className="fbuttoni" />
                </motion.div>
              </motion.div>
              <div className="fbutton2">
                <div>
                  <FaPlay className="fbuttoni2"></FaPlay>
                </div>
                <p className="fbuttonp">Watch Intro</p>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12">
            <div className="start" >
              <motion.div
                whileHover="hover"
                initial="initial"
                variants={Contrast}
                className="contrast"
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
                  variants={Contrast1}
                  className="contrast1"
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
                      backgroundColor: "#e9d7fe71",
                      top: 0,
                      left: 0,
                      zIndex: 1,
                    }}
                    className="contrast3"
                  />

                  <motion.img
                    variants={Contrast2}
                    src={img}
                    alt="main"
                    className="contrast4"
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
                <motion.div variants={Float1} style={blur}>
                  <div style={{ display: "flex", alignItems: "center", gap: "15px" }} >
                    <motion.div variants={Float8} style={icon("#6941c6")}>
                      <img src={home} alt="home" />
                    </motion.div>

                    <div className="divclas">
                      <h3>85%</h3>
                      <h4>Sales Growth</h4>
                    </div>
                  </div>
                </motion.div>
                <motion.div variants={Float2} style={blur}>
                  <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
                    <motion.div variants={Float8} style={icon("#6941c6")}>
                      <img src={home} alt="home" />
                    </motion.div>
                    <div className="divclas">
                      <h3>85%</h3>
                      <h4>Sales Growth</h4>
                    </div>
                  </div>
                </motion.div>
                <motion.div variants={Float3} style={icon("#1aaa42")}>
                  <img src={verify} alt="verify" width="24" />
                </motion.div>
                <motion.div variants={Float4} style={icon("#f178b6")}>
                  <img src={wifi} alt="wifi" width="24" />
                </motion.div>
                <motion.div variants={Float5} style={icon("#229af1")}>
                  <img src={play} alt="play" width="24" />
                </motion.div>
                <motion.div variants={Float6} style={icon("#ff0032")}>
                  <img src={instagram} alt="instagram" width="24" />
                </motion.div>
                <motion.div variants={Float7} style={icon("#6941c6")}>
                  <img src={home} alt="home2" width="24" />
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
      <div className="container landing2">
        <div className="row">
          <div className="col-lg-3 col-md-6 col-sm-12 b">
            <div className="ricon">
              <FaComputer className="ricon1" ></FaComputer>
            </div>
            <h4 className="riconh1">Why Choose Us</h4>
            <p className="riconp">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur.</p>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 bo">
            <div className="ricon">
              <FaHardDrive className="ricon1" ></FaHardDrive>
            </div>
            <h4 className="riconh1">Save Your Time</h4>
            <p className="riconp">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur.</p>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 bo">
            <div className="ricon">
              <BsStopwatchFill className="ricon1"></BsStopwatchFill>
            </div>
            <h4 className="riconh1">Affordable Price</h4>
            <p className="riconp">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur.</p>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 bo">
            <div className="ricon">
              <FaWallet className="ricon1"></ FaWallet>
            </div>
            <h4 className="riconh1">Best Strategy</h4>
            <p className="riconp">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur.</p>
          </div>
        </div>
      </div>
    </>
  );
}


const blur = {
  position: "absolute",
  width: "250px",
  height: "100px",
  backgroundColor: "rgba(255, 255, 255, 0.3)",
  backdropFilter: "blur(10px)",
  WebkitBackdropFilter: "blur(10px)",
  paddingLeft: "20px",
  borderRadius: "20px",
  zIndex: 20,
  pointerEvents: "none"
};

const icon = (color) => ({
  position: "absolute",
  width: "50px",
  height: "50px",
  borderRadius: "50%",
  backgroundColor: color,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 20,
  pointerEvents:"none"
});

export default Work;
