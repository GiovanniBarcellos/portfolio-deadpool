import './App.css'

function ProjetoCard(props) {
  return (
    <article>
      <h3>{props.nome}</h3>

      <p>
        {props.descricao}
      </p>

      <button> Ver projeto</button>
    </article>
  )

}

function Projetos () {
  return (
    <section> 
      <h2> Meus projetos</h2>

      <ProjetoCard 
      nome="calculadora"
      descricao = "Calculadora criada utilizando HTML,CSS,JS primeiro projeto de frontend"
      />

      <ProjetoCard 
      nome="Conversor"
      descricao="Conversor de moedas,segundo projeto de front end"/>
    </section>
  )
}


function Sobre () { //4o
  return (
     <section>
      <h2> Sobre mim</h2>
      <p> 
        Sou estudante de Ciência da Computação e estou construindo
        meus conhecimentos em programação e desenvolvimento web.
      </p>
     </section>
  )
}

function Header () { //3o
  return (
    <header>
      <h1>
        Swift
      </h1>
    </header>
  )
}

function Hero() { // 2o
  return (
    <section>
      <h1>Fala, eu sou o Swift 👋</h1>

      <p>
        Sou estudante de Ciência da Computação e estou aprendendo
        desenvolvimento web.
      </p>

      <button>Ver meus projetos</button>
    </section>
  )
}

function App() { //1o
  return (
    <main>
      <Header />
      <Hero />
      <Sobre />
      <Projetos />
    </main>
  )
}



export default App