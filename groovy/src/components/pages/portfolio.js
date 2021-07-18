import React, { useState } from "react";
import { Card, Col, Row , Button} from "react-bootstrap"

const Portfolio = () => {
    const [projects, setProject] = useState ([{name:"Work Scheduler", link:"https://danaalami-cloud.github.io/work-day-calendar-application/",
    repolink: "https://github.com/Danaalami-cloud/work-day-calendar-application.git",    
}, {name:"Yummy fridge", link:"https://danaalami-cloud.github.io/Yummy_Fridge/",
repolink: "https://github.com/Danaalami-cloud/Yummy_Fridge"},
{name:"Lookaftetyourself3000", link:"https://lookafteryourself3000.herokuapp.com/",
repolink: "https://github.com/Danaalami-cloud/NoteApp"},
)]}
    return (
<Row xs={1} md={2} className="g-4">
  {projects.map((project) => (
    <Col>
      <Card>
        <Card.Img variant="top" src="./components/images/yummydescription.jpg" />
        <Card.Body>
          <Card.Title>{project.name}</Card.Title>
          <Card.Text>
            {project.info}
          </Card.Text>
          <Button href={project.link} target="_blank">Deployed Link</Button>
        </Card.Body>
      </Card>
    </Col>
  ))}
</Row> )
}


export default Portfolio;
