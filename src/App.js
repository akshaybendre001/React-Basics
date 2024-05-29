import logo from './logo.svg';
import './App.css';
import First from './Components/First';
import Conditional1 from './Components/Conditional1';
import Conditional2 from './Components/Conditional2';
import List from './Components/List';
import EventHandlers from './Components/EventHandlers';
import Form from './Components/Form';
import Path from "./Components/Path";
import Styling from './Components/Styling';
import Header from './Components/Project/Header';
import MainContent from './Components/Project/MainContent';
import Footer from './Components/Project/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './Components/Project/Homepage';
import AboutPage from './Components/Project/Aboutpage';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      {/* <First/> */}
      {/* <Conditional/> */}
      {/* <Conditional1/> */}
      {/* <Conditional2/> */}
      {/* <List/> */}
      {/* <EventHandlers/> */}
      {/* <Form/> */}
      {/* <Path/> */}
      {/* <Styling/> */}
      <Header/>
      {/* <MainContent/> */}
      <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      <Footer/>
    </div>
  );
}

export default App;
