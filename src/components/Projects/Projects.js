import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
           <strong className="purple">Missions </strong>
        </h1>
        {/* <p style={{ color: "white" }}>
          What are the benefits of being part of DEVKRAFT
        </p> */}
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              title="Network"
              description="Expose its members to the industry in order to network and establish relationships that will lead to jobs in the field."
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              title="Leadership"
              description="Develop a system that helps college students to achieve Leadership qualities."
              // link="#"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              // imgPath={chatify}
              isBlog={false}
              title="Innovative Ideas"
              description="Students will create innovative ideas for campus programming, organizational development, and problem-solving."
              // link="#"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              // imgPath={chatify}
              isBlog={false}
              title="Soft Skills"
              description="Students will learn new skills i.e. Soft Skills such as communication, team work, problem solving, time management which will help them become more productive and creative"
              // link="#"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              // imgPath={chatify}
              isBlog={false}
              title="Community"
              description="We provide a platform for students to discover and engage their strengths, talents and passions. We will bring the campus to life through fun and diverse opportunities outside the classroom."
              // link="#"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              // imgPath={chatify}
              isBlog={false}
              title="Extra-Curricular"
              description="Active participation in extracurricular activities and competitions."
              // link="#"
            />
          </Col>
          
          
        </Row>
      </Container>
      
      <Container>
        <h1 className="project-heading">
           <strong className="purple">Incentive</strong>
        </h1>
        {/* <p style={{ color: "white" }}>
          What are the benefits of being part of DEVKRAFT
        </p> */}
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              // imgPath={chatify}
              isBlog={false}
              title="Discord Server"
              description="You will be eligible to join our Discord server called “The Paradise”.

              There you can chat with other club members, discuss various interests,
              
              work on your skills, showcase your hobbies, voice chat with
              
              other members and many more.
              
              From most educational stuff to the most enjoyable stuff,
              
              ‘The Paradise’ has everything!"
              link="#"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="Resources"
              description="You will have access to our resource website,

              that has 30+ reference books, sorted MCQs, iso files for lots of operating systems, essential tools and
              
              free softwares, courses and more."
              link="#"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              // imgPath={chatify}
              isBlog={false}
              title="Certifications"
              description="Along with it, we’d like to include is we are providing you with certification programs where you’ll get a chance to earn certifications that you can showcase in your profile"
              link="#"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              // imgPath={chatify}
              isBlog={false}
              title="Skills"
              description="Acquire new skills and improve the ones you already have.

              This includes technical skills like Enterprise Systems, Programming skills.
              
              Soft skills such as interpersonal (people) skills, communication skills, listening skills, time management, and empathy."
              link="#"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              // imgPath={chatify}
              isBlog={false}
              title="Competetions"
              description="Competition is an incentive for students to excel, thereby fostering innovation, diversity of supply and attractive prices for consumers and businesses alike. Competition thus stimulates growth and generates substantial benefits for the community!
              "
              link="#"
            />
          </Col>



       
        </Row>
      </Container>
      <Container>
        <h1 className="project-heading">
           <strong className="purple">Competetions</strong>
        </h1>
        {/* <p style={{ color: "white" }}>
          What are the benefits of being part of DEVKRAFT
        </p> */}
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              // imgPath={chatify}
              isBlog={false}
              title="Coding Competetions"
              description="
              Showcase your programming and problem solving skills in challenging hackathons!"
              // link="#"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="Graphic designing"
              description="
              Learn and enhance your designing skills and compete with other designers out there"
              link="#"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              // imgPath={chatify}
              isBlog={false}
              title="Explore Universe"
              description="Name the galaxy, Nebula, etc. Participate in cosmos competition to get outside of simulation into 

              a different timeline."
              link="#"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              // imgPath={chatify}
              isBlog={false}
              title="Debate Competition"
              description="Showcase your orating, argumentation

              and public speaking skills.
              
              There will be team vs team and individual vs individual contests."
              link="#"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              // imgPath={chatify}
              isBlog={false}
              title="
              Photo and Art
              
              Exhibition"
              description="Showcase your photography skills, sketching or painting talent compete with other participants and get certifications."
              link="#"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              // imgPath={chatify}
              isBlog={false}
              title="
              Singing & Dancing"
              description="Showcase your singing talent, dance moves you got, compete with other participants and set stage on fire."
              link="#"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              // imgPath={chatify}
              isBlog={false}
              title="
              Gaming

Competitions"
              description="Fun events for the every gamers out there.

              Show your gaming skills and let everyone know who is the best."
              link="#"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              // imgPath={chatify}
              isBlog={false}
              title="
              Anime
              
              Quizzes
              "
              description="
              
              Anime centered competitions for all Oni-chans out there
              
              There will be interesting trivias, artwork contests
              
              and more. "
              link="#"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              // imgPath={chatify}
              isBlog={false}
              title="
              K-Fest

              Quizzes"
              description="Korean media themed competitions wherein you'll have dancing, singing, drama, interesting quizzes and many more! "
              link="#"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              // imgPath={chatify}
              isBlog={false}
              title="
              Stand-up

              Comedy"
              description="Stand-up comedy consist of one-liner, stories, observations, or shtick that may incorporate props, magic tricks, or ventriloquism. "
              link="#"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              // imgPath={chatify}
              isBlog={false}
              title="
              And Many More Events"
              description="Blog writing competitions,

              Public Speaking competitions, 
              
              Project based competitions,
              
              And the list goes on."
              link="#"
            />
          </Col>


       
        </Row>
      </Container>
      <Container>
        <h1 className="project-heading">
           <strong className="purple">Workshops</strong>
        </h1>
        {/* <p style={{ color: "white" }}>
          What are the benefits of being part of DEVKRAFT
        </p> */}
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              // imgPath={chatify}
              isBlog={false}
              title="Virtual Machines"
              description="VMs are like an isolated system running inside your machine, mostly used for testing stuff out so as not to damage your host OS.

              A great solution to test out other operating system."
              link="#"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="Blockchain"
              description="Blockchain is a type of shared database that differs from a typical database in the way that it stores information; blockchain stores data in blocks that are then linked together via cryptography."
              link="#"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              // imgPath={chatify}
              isBlog={false}
              title="Cloud Computing"
              description="Cloud computing is on-demand access, via the internet, to computing resources-applications, servers, data storage, development tools, networking capabilities, and more-hosted at a remote data center managed by a cloud service provider (or CSP) like AWS, GCP, Heroku."
              link="#"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              // imgPath={chatify}
              isBlog={false}
              title="Cyber Security"
              description="Cybersecurity involves preventing, detecting and responding to cyberattacks that can have wide-ranging effects on individuals, organizations, the communities and the nations"
              link="#"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              // imgPath={chatify}
              isBlog={false}
              title="Android Development"
              description="This Specialization enable learners to successfully apply core Java / Kotiln features & software patterns needed to develop maintainable mobile apps comprised of core Android components, as well as fundamental Java I/O and persistence mechanisms."
              link="#"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              // imgPath={chatify}
              isBlog={false}
              title="Graphic Designing"
              description="Graphic design is the profession and academic discipline whose activity consists  projecting visual communications intended to transmit specific messages to social groups, with specific objectives."
              link="#"
            />
          </Col>



       
        </Row>
      </Container>
    </Container>
    
  );
}

export default Projects;
