import captura from "../assets/cap.png"

function Sobre () { //4o
  return (
     <section id="sobre" className="sobre">

      <img
      src = {captura}
      alt =""
      className="decoracao-delinha"
      />

      <h2> Sobre mim</h2>
      <p> 
        Sou estudante de Ciência da Computação e estou construindo
        meus conhecimentos em programação e desenvolvimento web.
             
      </p>

      <p> 
        Ao longo da minha formação, venho desenvolvendo conhecimentos em Java, C, Python, HTML, CSS e JavaScript, além de estudar conceitos de orientação a objetos, estruturas de dados, bancos de dados e desenvolvimento web.
        Também participo do Grupo de Estudos AGES, onde tenho a oportunidade de colocar meus conhecimentos em prática e trabalhar em projetos junto com outros estudantes. Além dos estudos, gosto de criar meus próprios projetos para experimentar novas tecnologias e continuar evoluindo como desenvolvedor.
        Tenho 19 anos e estou sempre buscando aprender coisas novas, melhorar minhas habilidades e transformar o conhecimento adquirido em projetos cada vez mais completos.
      </p>
     </section>
  )
}

export default Sobre