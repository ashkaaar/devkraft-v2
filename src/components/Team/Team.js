import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./Teamcards";
import Particle from "../Particle";

import dheeraj from "../../Assets/Team/dheeraj.png";
import rahul from "../../Assets/Team/rahul.png";
import hrushi from "../../Assets/Team/hrushi.png";
import tanishka from "../../Assets/Team/tanishka.png";
import muskan from "../../Assets/Team/muskan.png";
import shreyas from "../../Assets/Team/shreyas.png";
import avishkar from "../../Assets/Team/avishkar.png";
import kaustubh from "../../Assets/Team/kaustubh.png";
import ganesh from "../../Assets/Team/ganesh.png";
import suved from "../../Assets/Team/suved.png";
import shivam from "../../Assets/Team/shivam.png";
import parth from "../../Assets/Team/parth.png";
import aditya from "../../Assets/Team/aditya.png";
import yash from "../../Assets/Team/yash.png";
import sanket from "../../Assets/Team/sanket.png";
import ayush from "../../Assets/Team/ayush.png";













function Team() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
           <strong className="purple">Team Leaders</strong>
        </h1>
        
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={dheeraj}
              isBlog={false}
              title="Prof. Dheeraj Agrawal"
              description="Team Coordinator"
              link="https://in.linkedin.com/in/dheeraj-agrawal-79ba6470"
            />
          </Col>
          
       
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={rahul}
              isBlog={false}
              title="Rahul Pandit"
              description="President"
              link="https://www.linkedin.com/in/spydee"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={hrushi}
              isBlog={false}
              title="Hrushi Vahadane"
              description="Vice President"
              link="https://www.linkedin.com/in/hrushi-vahadane-396680201"
            />
          </Col>
          </Row>
      </Container>
      <Container>
        <h1 className="project-heading">
           <strong className="purple">Team Council</strong>
        </h1>
        
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tanishka}
              isBlog={false}
              title="Tanishka Dhole"
              description="Secretary"
              link="https://www.linkedin.com/in/tanishka-dhole-256163228"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={muskan}
              isBlog={false}
              title="Muskan Mishra"
              description="Deputy Secretary"
              link="https://www.linkedin.com/in/muskan-mishra-00b020229"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={shreyas}
              isBlog={false}
              title="Shreyas Udavant"
              description="Treasurer"
              link="https://www.linkedin.com/in/shreyas-udavant-98a00b229"
            />
          </Col>
          </Row>
      </Container>
      <Container>
        <h1 className="project-heading">
           <strong className="purple">Tech Team</strong>
        </h1>
        
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={avishkar}
              isBlog={false}
              title="Avishkar Dandge"
              description="Web Developement Lead"
              link="https://www.linkedin.com/in/v1shkar/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={kaustubh}
              isBlog={false}
              title="Kaustubh Bhiwasankar"
              description="Tech Lead"
              link="https://www.linkedin.com/in/bhiwsankar/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ganesh}
              isBlog={false}
              title="Ganesh Kshirsagar"
              description="Tech Co-Lead"
              link="https://www.linkedin.com/in/ganesh-k-4a574821b"
            />
          </Col>
          </Row>
      </Container>
      <Container>
        <h1 className="project-heading">
           <strong className="purple">Network and Discord Team</strong>
        </h1>
        
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suved}
              isBlog={false}
              title="Suved Pardeshi"
              description="Network Lead"
              link="https://www.linkedin.com/in/suvedpardeshi"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={shivam}
              isBlog={false}
              title="Shivam Arora"
              description="Outreach Lead"
              link="https://www.linkedin.com/in/shivam-arora-8722501b3"
            />
          </Col>          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={parth}
              isBlog={false}
              title="Parth Tank"
              description="Discord Admin"
              link="https://www.linkedin.com/in/parth-tank"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={aditya}
              isBlog={false}
              title="Aaditya Khairnar"
              description="Books and Resources"
              link="https://www.linkedin.com/in/aaditya-khairnar-209589229"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={yash}
              isBlog={false}
              title="Yash Khedkar"
              description="Discord Moderator"
              link="https://www.linkedin.com/in/yash-khedkar-b17009229"
            />
          </Col>
          </Row>
      </Container>
          <Container>
        <h1 className="project-heading">
           <strong className="purple">Design Team</strong>
        </h1>
        
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sanket}
              isBlog={false}
              title="Sanket Pawar"
              description="Poster and Design Lead"
              link="https://www.linkedin.com/in/sanket-pawar-a48009229"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ayush}
              isBlog={false}
              title="Ayush Agrawal"
              description="Design Co-Lead"
              link="https://www.linkedin.com/in/ayush-agrawal-75658a229"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Team;
