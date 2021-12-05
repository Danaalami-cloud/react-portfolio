import React from 'react';
// import '../src/App.css';
// import '../../images/github-logo.png'
// import { Text, View, StyleSheet } from 'react-native';
// import RollingText from 'react-native-rolling-text';
import { Wave, Random  } from 'react-animated-text';
export default function Home() {
  // const [words, setWords] = useState([]);
  // const transitions = useTransition(words, {
  //   from: { opacity: 0 },
  //   enter: { opacity: 1 },
  //   leave: { opacity: 0 },
  //   delay: 200,
  //   confing: config.molasses,
  //   onRest: () => setWords([]),
  // })
  

  // useEffect(() => {
  //   if (words.length === 0) {
  //     setTimeout(() => {
  //       setWords([])
  //     }, 2000)
  //   }
  // }, [words])

  const examplyStyle = {
    display: 'inline-block',
    border: '1px solid #ccc',
    marginBottom: '1em',
    padding: '2em 1em 1em 1em',
    width: '80%',
    fontSize: '1.5rem',
  }
  const codeDivStyle = {
    backgroundColor: '#eee',
    marginTop: '2em',
    padding: 'px 1em',
    overflow: 'scroll',
    fontSize: '1rem',
  };
  const codeStyle = {
    textAlign: 'left'
  };
  export const Wave1 = () => (
    <div style={examplyStyle}>
      <Wave text="Welcome to my portfolio!" effect="stretch" effectChange={2.0} />
    
    <div style={codeDivStyle}>
      <pre style={codeStyle}>
        &lt;Wave<br />
        &nbsp;&nbsp;text="Welcome to my portfolio"<br />
      </pre>
    </div>
    </div>
  )
  return (

    <View style={styles.container}>
    <View style={styles.banner}>
        <Text style={styles.title}>{'home'}</Text>
        <RollingText durationMsPerWidth={15} style={{ fontSize: 12 }}>
            {
                'Please have a look at this groovy react website and feel free to connect with me via Linked, email or Github. Looking forward to become freinds or a future employee!'
            }
        </RollingText>
    </View>
</View>

);
}
const styles = StyleSheet.create({
  container: { 
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
  },
  banner: {
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'orange',
      height: 60,
      width: '80%',
      borderRadius: 8,
      overflow: 'hidden',
  },
  title: {
      fontWeight: 'bold',
      fontSize: 16,
  },
});
    
        
    // <div className='home'>
    //   <h1>Welcome to my portfolio!</h1>
    //   <p>
    //     Please have a look at this groovy react website and feel free to connect with me via 
    //     Linked, email or Github.
    //     Looking forward to become freinds or a future employee! :)
    //   </p>
    //   <a href="https://www.linkedin.com/in/dana-alami-2b6b2815a/"   rel="noopener noreferrer"  target="_blank" >    
    // <img src="https://github.com/DwinaTech/public-images/blob/main/linkedin-icon.png?raw=true"  alt="LinkIn-icon"/>  
    //  </a>
    //  <a href="https://github.com/Danaalami-cloud"   rel="noopener noreferrer"  target="_blank" >    
    // <img src="https://pngimg.com/uploads/github/small/github_PNG58.png"  alt="Github-icon" /> 
    //  </a>
    // </div>
     
  

  


// const h1Style = {
//   padding: '1.5rem'
// }