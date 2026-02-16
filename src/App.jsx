import './App.css'
import Navbar from './Navbar/Navbar'
import Work from './work/Work'
import Work1 from './work2/Work1'
import Service from './service/Service'
import Social from './socialize/Social'
import Project from './project/Project'
import About from './about/About'
import Footer from './Footer/Footer'
function App() {
  return (
    <>
      <Navbar />
      <Work />
      <Work1></Work1>
      <Service></Service>
      <Social></Social>
      <Project/>
      <About/>
     <Footer/>
    </>
  )
}

export default App
