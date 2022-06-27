import Navbar from './components/Navbar';
import Recipies from './pages/Recipies';
import Home from './pages/Home';
import Footer from './components/Footer'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/recipies' element={<Recipies />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
