import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiPython,
  DiHtml5,
  DiCss3
} from "react-icons/di";
import {
  SiFirebase,
} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 style={{color:'#feda3e'}}/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiHtml5 style={{color:'#f16529'}}/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiCss3 style={{color:'#29a9df'}}/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact style={{color:'#61dbfb'}}/>
      </Col>
    </Row>
  );
}

export default Techstack;
