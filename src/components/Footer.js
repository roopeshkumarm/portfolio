import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/final_logo.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import navIcon4 from "../assets/img/nav-icon4.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" className="footer-logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/roopeshkumarm/"><img src={navIcon1} alt="Icon" /></a>
              <a href="https://github.com/roopeshkumarm"><img src={navIcon2} alt="Icon" /></a>
              <a href="https://www.instagram.com/_m.roopesh_/"><img src={navIcon3} alt="Icon" /></a>
              <a href="https://wa.link/srocg0"><img src={navIcon4} alt="Icon" /></a>
            </div>
          </Col>
        </Row>
        
        <Row>
          <Col className="text-center">
            <p>&copy; 2024. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
