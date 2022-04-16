import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillFacebook,
  AiFillGithub,
  AiOutlineTeam,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn, FaDiscord,FaGoogleDrive } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
               <strong className="purple">Who are we?</strong> 
            </h1>
            <p className="home-about-body">
              <b className="purple">TEAM DEVKRAFT</b> is a club founded by a group of first-year students 
              <br />
              <br />Who want to make engineering more intersting for every student in 
              <i>
                <b className="purple"> DY Patil Institute of Technology. </b>
              </i>
              <br />
              <br />
              To accomplish this milestone we have created a &nbsp;
              <i>
                <b className="purple">Discord Community server </b> which is by the students,
                for the students, of the students.
              </i>
              <br />
              <br />
              To help the students in other ways, we have created a <a href="https://lib.devkraft.cf/"  target="_blank" className="purple">Resource website</a> where 
              we upload all educational books, reference books,courses, tools, and almost everything.
              <br />
              <br />
              Not only that but also we conduct interactive workshops to teach everything in the most effective way
              <br />
              <br />
              Learn more <a href="/about" className="purple">About us </a>
              <br />
              <br />
              Meet our <a href="/team" className="purple">Team</a>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <Button href="https://forms.gle/LLK2PY21g3i3TwN66" target="_blank" size="md" >BECOME A MEMBER</Button>
            {/* <p>
              Feel free to <span className="purple">connect </span>with me
            </p> */}
            <ul className="home-about-social-links">
              {/* <li className="social-icons">
                <a
                  href="/team"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTeam
 />
                </a>
              </li> */}
              <li className="social-icons">
                <a
                  href="https://lib.devkraft.cf/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                  >
                  <FaGoogleDrive/>
 
                </a>
              </li>
              {/* <li className="social-icons">
                <a
                  href="https://discord.gg/54C6GNyMpV"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaDiscord  />
                </a>
              </li> */}
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/company/dev-kraft/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/devkraft.dpu"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.facebook.com/Team-DevKraft-109241814987333"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillFacebook />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/devkraft.dpu/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
