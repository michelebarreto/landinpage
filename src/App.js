/* eslint-disable */
import React from 'react';
import Header from './components/Header';
import Pagina from'./components/Pagina';
import About from './components/About';
import Presentation from './components/Presentation';
import aboutimage from './imagens/minion1.jpg';
import aboutimage1 from './imagens/minion2.jpg';
import Contact from './components/Contact';
import Footer from'./components/Footer';
import Pagina1 from './components/Pagina1';

function App() {
  return (
    <div className="App">
    <Header />
    <Pagina />
    <Pagina1 />
    <About image={aboutimage} title='A verdade sobre os Minions' button='Saiba Mais' />
    <Presentation/>
    <About image={aboutimage1} title='Como surgiu os minions' button='Saiba Mais' />
    <Contact />
    <Footer />
    </div>
  );
}

export default App;
