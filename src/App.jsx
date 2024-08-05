import './App.css'
import NavBar from './components/NavBar'
import Parallax from './components/Parallax'
import About from './components/About'
import EducationAndProjects from './components/EducationAndProjects'
import Certification from './components/Certification'
import Footer from './components/Footer'
import Skills from './components/Skills'
import AnimateNew from './components/AnimateNew'

let obj = {name:"Rudraksh",address:"Ganga Nagar",city:"Rishikesh, Uttarakhand",email:"rudrakshmishra026@gmail.com",phone_no:"+91 8755443383",post:"Developer",description:"With a passion for coding, learning, and all type development, I have both the skill set and professional background necessary to dive deep into the development world. As an upbeat, self-motivated team player with excellent communication, I envision an exciting future in the industry. Browse my site to see all that I have to offer."}
function App() {
  
  return (
    <>
    <AnimateNew />
      <NavBar obj={obj} />
      <Parallax obj={obj}/>
      <About obj={obj}/>
      <EducationAndProjects />
      <Skills />
      <Certification />
      <Footer />
    </>
  )
}


export default App
