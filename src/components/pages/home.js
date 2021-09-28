import React, { useEffect, setState } from 'react';
// import '../src/App.css';
// import '../../images/github-logo.png'
import { animated, config, useTransition } from 'react-spring';
export default function Home() {
  const [items, setItems,] = setState([]),
  const transitions = useTransition(items, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    delay: 200,
    confing: config.molasses,
    onRest: () => setItems([]),
  })
  useEffect(() => {
    if (items.length === 0) {
      setTimeout(() => {
        setItems()
      }, 2000)
    }
  }, [items])
  return (
    // <Spring
    // from={{ opacity: 0, marginTop: -500 }}
    // enter= {{ opacity: 1}}
    // leave={{ opacity: 0, marginTop: 0 }}
    // config={{ delay: 1000, duration: 1000 }}
    <div style={{ display: 'flex' }}>
      {transitions(({ opacity }, item) => (
      <animated.div
      style={{
        opacity: opacity.to(item.op),
        transform: opacity
        .to(item.trans)
        .to(y => `translate3d(0,${y}px,0)`),
      }}>
      {item.fig}
      {/* {props => (
        <div style={props}> */}
        {/* <div style={h1Style}>  */}
    <div className='home'>
      <h1>Welcome to my portfolio!</h1>
      <p>
        Please have a look at this groovy react website and feel free to connect with me via 
        Linked, email or Github.
        Looking forward to become freinds or a future employee! :)
      </p>
      <a href="https://www.linkedin.com/in/dana-alami-2b6b2815a/"   rel="noopener noreferrer"  target="_blank" >    
    <img src="https://github.com/DwinaTech/public-images/blob/main/linkedin-icon.png?raw=true"  alt="LinkIn-icon"/>  
     </a>
     <a href="https://github.com/Danaalami-cloud"   rel="noopener noreferrer"  target="_blank" >    
    <img src="https://pngimg.com/uploads/github/small/github_PNG58.png"  alt="Github-icon" /> 
     </a>
    </div>
     {/* </div> */}
        {/* // </div> */}
      {/* // )} */}
      </animated.div>
      ))};
  </div>
  )
  // )}
    // </Spring>
  
}
  


// const h1Style = {
//   padding: '1.5rem'
// }