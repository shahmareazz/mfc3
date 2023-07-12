import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Aboutus from './components/Aboutus';
import Header from './components/Header';
import { BrowserRouter, Route, Routes, Switch} from 'react-router-dom';
import { Contactus } from './components/Contactus';
import Register from './components/Register';
import Login from './components/Login';
import Footer from './components/Footer';
import Menu from './components/Menu';
import VegMenu from './components/VegMenu';
import FishMenu from './components/FishMenu';
import ChickenMenu from './components/ChickenMenu';

function App() {
  const myStyle={
    backgroundImage:"url('/images/bg.jpg')",
    minHeight:'500px',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
};
  return (
    <>
    <Header />
    <section style={myStyle}>
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/Menu" element={<Menu />}></Route>
      <Route path="/Aboutus" element={<Aboutus />}></Route>
      <Route path="/Contactus" element={<Contactus />}></Route>
      <Route path="/Register" element={<Register />}></Route>
      <Route path="/Login" element={<Login />}></Route>
      <Route path="/VegMenu" element={<VegMenu />}></Route>
      <Route path="/FishMenu" element={<FishMenu />}></Route>
      <Route path="/ChickenMenu" element={<ChickenMenu />}></Route>
    </Routes>
    </section>
  <Footer />
  </>
  );
}

export default App;
