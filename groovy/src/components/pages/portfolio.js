import React, { useState } from "react";
import { Card, Col, Row , Button, Image} from "react-bootstrap"
import scheduler from '../../images/scheduler.png'
// import jsquiz from '../../images/jsquiz.png'
import lookafteryourself3000 from '../../images/lookafteryourself3000.png'
import yummydescription from '../../images/yummydescription.jpg'

const Portfolio = () => {
    const [projects, setProject] = useState ([{name:"Work Scheduler", link:"https://danaalami-cloud.github.io/work-day-calendar-application/",
    repolink: "https://github.com/Danaalami-cloud/work-day-calendar-application.git", Image:"../images/scheduler.png"    
}, {name:"Yummy fridge", link:"https://danaalami-cloud.github.io/Yummy_Fridge/",
repolink: "https://github.com/Danaalami-cloud/Yummy_Fridge"},
{name:"Lookaftetyourself3000", link:"https://lookafteryourself3000.herokuapp.com/",
repolink: "https://github.com/Danaalami-cloud/NoteApp"},
])
// let names = ['jsquiz', 'lookafteryourself3000', 'password', 'scheduler', 'yummydescription'];

//         let Images = names.map(names => {

//             <img
//             src=require("./images/schedular.png").default
//             alt = ""
//                 className="img-responsive" />
//         });

    return (
<Row xs={1} md={2} className="g-4">
  {projects.map((project) => (
    <Col>
      <Card>
        <Card.Img  as={ Image} variant="top" src={scheduler} 
        if (scheduler) />
        <Card.Img  as={ Image} variant="top" src={lookafteryourself3000} />
        <Card.Img  as={ Image} variant="top" src={yummydescription}  />
        <Card.Body>
          <Card.Title>{project.name}</Card.Title>
          <Card.Text>
            {project.info}
          </Card.Text>
          <Button href={project.link} target="_blank">Deployed Link</Button>
          <Button href={project.repolink} target="_blank">Deployed Repo</Button>
        </Card.Body>
      </Card>
    </Col>
  ))}
</Row> )
}


export default Portfolio;
