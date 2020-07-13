import React from "react";

import Pen from "./peen.png";
import User from "./user.png";
import Contact from "./contact.png";
import School from "./school.png";
import Work from "./work.png";

import JS from "./js.svg";
import REACTJS from "./react.svg";
import MYSQL from "./mysql.svg";
import CSS from "./css.svg";
import HTML from "./html.svg";
import GIT from "./git.svg";
import NODE from "./node.svg";
import API from "./api.svg";
import PHASE from "./phaser.svg";

import Vide from "./vide.png";

import Colibri from "./bob.png";
import Cook from "./cook.png";
import PC from "./pc.png";
import GVSC from "./goatvs.png";
import DOC from "./doc.png";

import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import ProjectContenu from "../projects/projectContenu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";

import "./about.css";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: "#202020",
    position: "relative",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    width: "900px",
    height: "600px",
    outline: "none",
  },
  paperproject: {
    backgroundColor: "#202020",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    width: "1200px",
    height: "800px",
    outline: "none",
  },
}));

function About() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);
  const [open3, setOpen3] = React.useState(false);
  const [open4, setOpen4] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen2 = () => {
    setOpen2(true);
  };

  const handleClose2 = () => {
    setOpen2(false);
  };
  const handleOpen3 = () => {
    setOpen3(true);
  };

  const handleClose3 = () => {
    setOpen3(false);
  };
  const handleOpen4 = () => {
    setOpen4(true);
  };

  const handleClose4 = () => {
    setOpen4(false);
  };
  return (
    <div className="container">
      <div className="box">
        <div className="description">
          <h1>Yasmine Kharroubi</h1>
          <hr />
          <h4>Développeur Web Junior</h4>
          <h4>React.js / Node.js</h4>
        </div>
        <div className="resume">
          <div className="content">
            <div className="content-box">
              <div onClick={handleOpen} className="resume-box">
                <div className="box-icon">
                  <img src={User} alt="user icon" />
                </div>
                <span className="box-text">About Me</span>
              </div>
              <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                  timeout: 500,
                }}
              >
                <Fade in={open}>
                  <div className={classes.paper}>
                    <span onClick={handleClose} className="exit">
                      X
                    </span>
                    <h2 className="modal-title" id="transition-modal-title">
                      About Me
                    </h2>
                    <h4
                      className="modal-contain"
                      id="transition-modal-description"
                    >
                      Hello, je suis Développeur Web &amp; Mobile FullStack, CSS
                      enthusiast, étudiante à la Wild Code School Paris.
                    </h4>
                    <h4 className="modal-contain-two">
                      {" "}
                      En recherche d’une alternance à partir de Septembre 2020.{" "}
                    </h4>
                    <p className="about-p">
                      J'ai passé les 2 dernieres années dans la restauration
                      rapide avant de rejoindre, cette année, le monde du
                      developpement.
                    </p>
                    <p className="about-p-two">
                      Curieuse et toujours ouverte à de nouveaux défis.
                    </p>

                    <div className="modal-icon">
                      <img src={HTML} alt="html icon" className="icon-one" />
                      <img src={CSS} alt="css icon" className="icon-one" />
                      <img src={JS} alt="js icon" className="icon-two" />
                      <img src={MYSQL} alt="mysql icon" className="icon-data" />
                      <img
                        src={REACTJS}
                        alt="react icon"
                        className="icon-three"
                      />
                      <img src={GIT} alt="git icon" className="icon-three" />
                      <img src={NODE} alt="node icon" className="icon-three" />
                    </div>
                  </div>
                </Fade>
              </Modal>
              <div onClick={handleOpen2} className="resume-box">
                <div className="box-icon">
                  <img src={School} alt="school icon" />
                </div>
                <span className="box-text">Experiences</span>
              </div>
              <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={open2}
                onClose={handleClose2}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                  timeout: 500,
                }}
              >
                <Fade in={open2}>
                  <div className={classes.paper}>
                    <span onClick={handleClose2} className="exit">
                      X
                    </span>
                    <h2 className="modal-title" id="transition-modal-title">
                      Experiences
                    </h2>
                    <p
                      className="modal-contain"
                      id="transition-modal-description"
                    >
                      Coming soon
                    </p>
                  </div>
                </Fade>
              </Modal>
              <div onClick={handleOpen3} className="resume-box">
                <div className="box-icon">
                  <img src={Work} alt="work icon" />
                </div>
                <span className="box-text">Projects</span>
              </div>
              <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={open3}
                onClose={handleClose3}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                  timeout: 500,
                }}
              >
                <Fade in={open3}>
                  <div className={classes.paperproject}>
                    <span onClick={handleClose3} className="exit-modal">
                      X
                    </span>

                    <div className="projectcontainer">
                      <div className="box-one">
                        <h2 className="modal-title" id="transition-modal-title">
                          Project
                        </h2>
                        <div className="test">
                          <ProjectContenu
                            image={Colibri}
                            link="https://sebg-prog.github.io/Bob-Colibri.com/index.html"
                            title="Bob Colibri @WildCodeSchool"
                            time="1 semaine"
                            competence={HTML}
                            competence2={CSS}
                            competence3={Vide}
                            competence4={Vide}
                          />
                          <ProjectContenu
                            image={Cook}
                            link="https://cookandcake.netlify.app/"
                            title="CookAndCake @WildCodeSchool"
                            time="5 semaines"
                            competence={REACTJS}
                            competence2={API}
                            competence3={Vide}
                            competence4={Vide}
                            // competence="ReactJS / CSS / API"
                          />
                          <ProjectContenu
                            image={PC}
                            link=""
                            title="Papier Crayons @WildCodeSchool"
                            time="2 mois (En cours...)"
                            competence={REACTJS}
                            competence2={API}
                            competence3={MYSQL}
                            competence4={NODE}

                            // competence="ReactJS / API / MySQL / NodeJS"
                          />
                        </div>
                      </div>

                      <div className="box-one">
                        <h2 className="modal-title" id="transition-modal-title">
                          Hackaton
                        </h2>
                        <div className="test">
                          <ProjectContenu
                            image={GVSC}
                            link="https://romantic-swirles-0e45a7.netlify.app/"
                            title="Goat VS Chicken @WildCodeSchool"
                            time="24 heures"
                            competence={REACTJS}
                            competence2={API}
                            competence3={PHASE}
                          />
                          <ProjectContenu
                            image={DOC}
                            link="https://master--elegant-hypatia-f05ed3.netlify.app"
                            title="Doc'Talk  @WildCodeSchool"
                            time="48 heures"
                            competence={REACTJS}
                            competence2={NODE}
                            competence3={MYSQL}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </Fade>
              </Modal>
              <div onClick={handleOpen4} className="resume-box">
                <div className="box-icon">
                  <img src={Contact} alt="contact icon" />
                </div>
                <span className="box-text">Contact Me</span>
              </div>
              <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={open4}
                onClose={handleClose4}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                  timeout: 500,
                }}
              >
                <Fade in={open4}>
                  <div className={classes.paper}>
                    <span onClick={handleClose4} className="exit">
                      X
                    </span>
                    <h2 className="modal-title" id="transition-modal-title">
                      Contact Me
                    </h2>
                    <p
                      className="modal-contain"
                      id="transition-modal-description"
                    >
                      Coming soon
                    </p>
                  </div>
                </Fade>
              </Modal>
            </div>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
}

export default About;
