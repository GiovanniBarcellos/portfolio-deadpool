import ProjetoCard from './ProjetoCard'

function Projetos () { //5o
  return (
    <section id="projetos" className="projetos"> 
      <h2> Meus projetos</h2>
    <div className="projetos-grid">
      <ProjetoCard 
      nome="Calculadora"
      descricao = "Calculadora criada utilizando HTML,CSS,JS primeiro projeto de frontend"
      />

      <ProjetoCard 
      nome="Conversor"
      descricao="Conversor de moedas,segundo projeto de front end"/>
    </div>
    </section>
  )
}

export default Projetos