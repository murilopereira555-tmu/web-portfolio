import logo from './logo.svg';
import './App.css';

//Imports components that I have created
import Header from './components/header.js'
import Footer from './components/Footer.js'
import CardContainer from './components/CardContainer.js';
import Background from './components/Background.js';


function App() {

  return(
    <>
    <Background/>
    <Header/>
    <CardContainer/>
    <Footer/>
    </>
  );

}

export default App;
