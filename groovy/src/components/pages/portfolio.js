import React, { useState } from "react";
import { Card, Col, Row } from "react-bootstrap"

const Portfolio = () => {
    const [projects, setProject] = useState ([{name:"workScheduler", link:"https://danaalami-cloud.github.io/work-day-calendar-application/",
    repolink: "https://github.com/Danaalami-cloud/work-day-calendar-application.git",    
}, {
}])
    return (
<Row xs={1} md={2} className="g-4">
  {projects.map((project) => (
    <Col>
      <Card>
        <Card.Img variant="top" src="holder.js/100px160" />
        <Card.Body>
          <Card.Title>{project.name}</Card.Title>
          <Card.Text>
            {project.info}
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  ))}
</Row> )
}


export default Portfolio;
