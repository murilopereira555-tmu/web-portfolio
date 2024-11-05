import logo from './logo.svg';
import './App.css';

//Imports components that I have created
import Header from './components/header.js'
import Footer from './components/Footer.js'
import Card from './components/Card.js'
import Button from './components/Button.js'
import CardContainer from './components/CardContainer.js';


function App() {

  return(
    <>
    <Header/>
    <CardContainer/>
    <Footer/>
    </>
  );

}

export default App;
