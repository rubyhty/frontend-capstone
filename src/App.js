import './App.css';
import Header from './Header';
import Main from './Main';
import Nav from './Nav';
import Footer from './Footer';
import logo from './image/Logo.svg';



function App() {
  return (
    <div>
    <meta name="description" content="Website of Little Lemon"/>
    <meta name="og:title" content="Little Lemon"/>
    <meta name="og:description" content="Website of Little Lemon"/>
    <meta name="og:image" content={logo}/>
    <Header/>
    <Nav/>
    <Main/>
    <Footer/>
    </div>


  );
}

export default App;
