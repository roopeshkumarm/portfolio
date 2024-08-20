import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/indus1.png";
import projImg2 from "../assets/img/z2b.png";
import projImg3 from "../assets/img/zyphr.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Indu's Kitchen",
      description: "A static website for the cloud kitchen company Indu's Kitchen, expertly built using React to provide an interactive and user-friendly experience.",
      imgUrl: projImg1,
      link: "https://indus-kitchen.vercel.app/"
    },
    {
      title: "Zero2billion",
      description: "A dynamic website that showcases a college incubation cell's mission, services, and success stories, offering a responsive and engaging experience through modern technologies.",
      imgUrl: projImg2,
      link: "https://www.zero2billion.in/"
    },
    {
      title: "Zyphr",
      description: "A static website for the startup company Zyphr, featuring enhanced animations created with the Framer tool.",
      imgUrl: projImg3,
      link: "https://zyphr.framer.website/"
    },
    
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div >
                <h2>Projects</h2>
                <p>Here are some of the projects I have worked on.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" >
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
