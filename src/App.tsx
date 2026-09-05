import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import Sobre from './components/Sobre'
import Projetos from './components/Projetos'
import Contato from './components/Contato'
import Footer from './components/Footer'

function App() { //1o
  return (
    <main>
      <Header />
      <Hero />
      <Sobre />
      <Projetos />
      <Contato />
      <Footer />
    </main>
  )
}

export default App