import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { BiLinkExternal } from "react-icons/bi";
import {AiFillLinkedin} from "react-icons/ai"
import {FaLinkedin} from "react-icons/fa"

function ProjectCards(props) {
  return (
    <Card className="project-card-view" style={{ width: "17rem"}}>
      <Card.Img variant="top"  src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "centre" }}>
          {props.description}
        </Card.Text>
        <Button variant="primary" href={props.link} target="_blank">
          <FaLinkedin /> 
        </Button>
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
