import './App.css';
import Navbar from './Components/Navbar';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from './Pages/Home'

function App() {
  return (
    <div className="App">
       
       <Router>
       <Navbar/>
       <Routes>
        <Route path='/' exact Component={Home} />
       </Routes>
       </Router>
       

    </div>
  );
}

export default App;
