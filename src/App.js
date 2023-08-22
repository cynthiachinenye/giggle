import './App.css';
import Navbar from './Components/Navbar';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from './Pages/Home'
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
       
       <Router>
       <Navbar/>
       <Routes>
        <Route path='/' exact Component= {Home} />
       </Routes>
       <Footer/>
       </Router>
       

    </div>
  );
}

export default App;
