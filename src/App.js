import './App.css';
import Navbar from './Components/Navbar';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from './Pages/Home'
import Footer from './Components/Footer';
import Menu from './Pages/Menu'
import About from './Pages/About';
import Contact from './Pages/Contact';

function App() {
  return (
    <div className="App">
       
       <Router>
       <Navbar/>
       <Routes>
        <Route path='/' exact Component= {Home} />
        <Route path='/Menu'  exact Component = {Menu}/>
        <Route path='/About' exact Component = {About}/>
        <Route path='/Contact' exact Component = {Contact}/>
        </Routes>
       <Footer/>
       </Router>
       

    </div>
  );
}

export default App;
