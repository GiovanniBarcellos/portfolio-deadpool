import deadpool from "../assets/deadpool.jpg"
import deadpoolio from "../assets/deadpool3.png"

function Hero() { // 2o
  return (
    <section className="hero">

      <img
      src = {deadpoolio}
      alt =""
      className="decoracao decoracao-direita"
      />

    <div className="hero-content"> 
        <p className="hero-tag"> DESENVOLVEDOR EM ANDAMENTO </p>
      <h1>Fala, eu sou o Giovanni </h1>

      <p>
        Sou estudante de Ciência da Computação e estou aprendendo
        desenvolvimento web.
      </p>

      <a href="#projetos" className="hero-button">
        Ver meus projetos
      </a>

     </div>

     <div className="hero-image"> 
        <img src={deadpool} alt="Deadpool" />
        <div className ="comic-panel">
            <span> Serio que esse é o dev?! </span>
            <p>Estudante da Pontifícia Universidade Católica do Rio Grande do Sul.<br/></p>

        </div>
     </div>
      
    

    </section>
    
  )
}

export default Hero