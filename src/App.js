import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import {Routes, Route, Navigate} from 'react-router-dom';

//  Pages
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import FourO4 from "./components/pages/FourO4";
import Profile from "./components/pages/Profile";

function App() {
  return (
    <>
    <Header />
    <main className="mt-5">
    <Routes>
      <Route path='/' element={<Navigate to='/home'/>} />
      <Route path='/home' element={<Home />}/>
      <Route path='/about' element={<About />}/>
      <Route path='/contact' element={<Contact />}/>
      <Route path='/profile/:id' element={<Profile />}/>
      <Route path='*' element={<FourO4 />}/>
    </Routes>
    </main>
    <Footer />
    </>
  );
}

export default App;
