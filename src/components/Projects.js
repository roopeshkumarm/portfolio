import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/indus1.png";
import projImg2 from "../assets/img/z2b.png";
import projImg3 from "../assets/img/zyphr.png";
import projImg4 from "../assets/img/rolefit.png"; 
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  // TAB 1 PROJECTS
  const projectsTab1 = [
    {
      title: "Indu's Kitchen",
      description: "A static website for the cloud kitchen company Indu's Kitchen, expertly built using React to provide an interactive and user-friendly experience.",
      imgUrl: projImg1,
      link: "https://indus-kitchen.vercel.app/"
    },
    {
      title: "Zyphr",
      description: "A static website for the startup company Zyphr, featuring enhanced animations created with the Framer tool.",
      imgUrl: projImg3,
      link: "https://zyphr.framer.website/"
    },
    {
      title: "RoleFit AI",
      description: "A smart AI-powered career assistant that analyzes your resume and job title to give instant role fit insights with a clean and modern UI.",
      imgUrl: projImg4,
      link: "https://rolefit-ai.vercel.app/"
    },
  ];

  // TAB 2 PROJECTS
  const projectsTab2 = [
    {
      title: "Zero2billion",
      description: "A dynamic website that showcases a college incubation cell's mission, services, and success stories, offering a responsive and engaging experience through modern technologies.",
      imgUrl: projImg2,
      link: "https://www.zero2billion.in/"
    }
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div>
                <h2>Projects</h2>
                <p>Here are some of the projects I have worked on.</p>

                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center">
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

                  <Tab.Content>
                    {/* TAB 1 */}
                    <Tab.Pane eventKey="first">
                      <Row>
                        {projectsTab1.map((project, index) => (
                          <ProjectCard key={index} {...project} />
                        ))}
                      </Row>
                    </Tab.Pane>

                    {/* TAB 2 */}
                    <Tab.Pane eventKey="second">
                      <Row>
                        {projectsTab2.map((project, index) => (
                          <ProjectCard key={index} {...project} />
                        ))}
                      </Row>
                    </Tab.Pane>

                    {/* TAB 3 (empty or add later) */}
                    <Tab.Pane eventKey="third">
                      <p style={{ textAlign: "center", color: "#bbb" }}>
                        No projects here yet.
                      </p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>

              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>

      <img className="background-image-right" src={colorSharp2} />
    </section>
  );
};
