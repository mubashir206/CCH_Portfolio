import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Header from "./components/header/Header";
import Project from "./components/project/Project";
import Resume from "./components/resume/Resume";
import Skill from "./components/skill/Skill";
import './App.css';
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";


function App() {
  return (
   <div className="App">
    <Navbar></Navbar>
   <Header></Header>
   <About></About>
   <Skill></Skill>
   <Project></Project>
   <Resume></Resume>
   <Contact></Contact>
   <Footer></Footer>
   </div>
  );
}

export default App;
