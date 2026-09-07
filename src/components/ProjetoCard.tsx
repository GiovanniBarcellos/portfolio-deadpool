type ProjetoCardProps = {
  nome : string
  descricao: string
  tecnologias: string[]
  numero: number
  link: string
} 

function ProjetoCard({link , numero, nome, descricao, tecnologias }: ProjetoCardProps) { //6o
  return (
    <article className ="projeto-card">

      <span className ="projeto-numero">PROJECT #{numero}</span>

      <h3>{nome}</h3>

      <p>
        {descricao}
      </p>

      <div>
        {tecnologias.map((tecnologia) => (
      <span className = "tecnologia" key={tecnologia}>{tecnologia}</span>
      ))}
      </div>

      <a className = "linkes" href= {link} target="_blank" rel="noopener noreferrer"> 
        Ver projeto
      </a>
    </article>
  )
}

export default ProjetoCard