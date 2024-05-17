import Titulo from "./-Titulo"
import Conteudo from "./-Conteudo"

function App(){
  return(
      <div>
        <h1> <Titulo name="Alan" cor="red"/> </h1>
        <section> <Conteudo paragrafo={true}/> </section>
        <h1> <Titulo cor="blue"/> </h1>
        <section> <Conteudo/> </section>
      </div> 
  )
  // return <Titulo/> //
}

export default App