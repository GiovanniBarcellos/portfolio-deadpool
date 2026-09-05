type ProjetoCardProps = {
  nome : string
  descricao: string
} 

function ProjetoCard({ nome, descricao }: ProjetoCardProps) { //6o
  return (
    <article className ="projeto-card">
      <h3>{nome}</h3>

      <p>
        {descricao}
      </p>

      <button> Ver projeto</button>
    </article>
  )
}

export default ProjetoCard