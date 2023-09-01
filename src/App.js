import {Route, Routes} from 'react-router-dom';
import './App.css';
import './output.css';
import './index.css';
import Header from './Header';
import Footer from './Footer';
import Navigation from './Navigation';
import Home from './Home';
import About from './About';
import Education from './Education';

function App() {
  return (
    <div className="w-screen flex flex-col min-h-screen">
      <Header/>
      <div className="min-h-full flex flex-col flex-auto md:grid md:grid-cols-[20%_80%] mx-0 justify-stretch items-stretch">
        <Navigation/>
        <Routes>
          <Route path="/" exact element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/education" element={<Education/>}/>
        </Routes>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
