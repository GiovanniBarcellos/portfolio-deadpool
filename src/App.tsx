import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import Sobre from './components/Sobre'
import Projetos from './components/Projetos'
import Contato from './components/Contato'
import Footer from './components/Footer'
import quadrinho1 from "./assets/q1.jpg"
import quadrinho2 from "./assets/q7.webp"
import quadrinho3 from "./assets/q3.webp"
import quadrinho4 from "./assets/q4.webp"


function App() { //1o
  return (
     
    <>
      <div className="quadrinhos-fundo">

        <img
          src={quadrinho1}
          alt=""
          className="quadrinho quadrinho-1"
        />

        <img
          src={quadrinho2}
          alt=""
          className="quadrinho quadrinho-2"
        />

        <img
          src={quadrinho3}
          alt=""
          className="quadrinho quadrinho-3"
        />

        <img
          src={quadrinho4}
          alt=""
          className="quadrinho quadrinho-4"
        />
        </div>
    
    <main>
      <Header />
      <Hero />
      <Sobre />
      <Projetos />
      <Contato />
      <Footer />
    </main>
    </>
  )
}

export default App