import React, { useState } from "react";
import { Card, Col, Row , Button, Image} from "react-bootstrap"
import scheduler from '../../images/scheduler.png'
 import jsquiz from '../../images/jsquiz.png'
import lookafteryourself3000 from '../../images/lookafteryourself3000.png';
import yummydescription from '../../images/yummydescription.jpg';
import password from "../../images/password.png";


const Portfolio = () => {
    const [projects, setProject] = useState ([{name:"Work Scheduler", link:"https://danaalami-cloud.github.io/work-day-calendar-application/",
    repolink: "https://github.com/Danaalami-cloud/work-day-calendar-application.git", Image1:require("../../images/scheduler.png").default,    
}, {name:"Yummy fridge", link:"https://danaalami-cloud.github.io/Yummy_Fridge/",
repolink: "https://github.com/Danaalami-cloud/Yummy_Fridge", Image2:require("../../images/yummydescription.jpg").default},
{name:"Lookaftetyourself3000", link:"https://lookafteryourself3000.herokuapp.com/",
repolink: "https://github.com/Danaalami-cloud/NoteApp", Image3:require("../../images/lookafteryourself3000.png").default},
{name:"JavaScript Quiz", link:"https://danaalami-cloud.github.io/javascript-code-quiz/",
repolink: "https://github.com/Danaalami-cloud/javascript-code-quiz", Image4:require("../../images/jsquiz.png").default},
{name:"Password Generator", link:"https://danaalami-cloud.github.io/week-3-random-password-generator/",
repolink: "https://github.com/Danaalami-cloud/week-3-random-password-generator", Image5:require("../../images/password.png").default},
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
        <Card.Img  src={ project.Image1 } variant="top"   />
        <Card.Img  src={ project.Image2} variant="top"  />
        <Card.Img  src={ project.Image3} variant="top"   />
        <Card.Img  src={ project.Image4} variant="top"   />
        <Card.Img  src={ project.Image5} variant="top"   />
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
