import{ Routes,Route,BrowserRouter} from "react-router-dom";
import './App.css';
import Navbar from './component/Navbar';
import About from './component/About';
import Skills from './component/Skills';
import Contact from './component/Contact';
import Home from './component/Home';
import Education from './component/Education';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/skills' element={<Skills />}/>
        <Route path='/contact' element={<Contact />}/>
        <Route path='/education' element={<Education />}/>
         </Routes></BrowserRouter>
     {/*<About/>
      <Skills/>
  <Contact/>*/}
      
    </div>
    
  );
}

    
    



export default App;
