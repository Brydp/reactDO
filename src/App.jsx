import { useEffect, useState } from "react";

function App() {

  const [ listaTarefa, setListaTarefas ] = useState( [] );
  const [ tarefa, setTarefas ] = useState( {id: '' , texto: "" } ); 

  function addTarefa()
  {
    if( tarefa.texto !== "" ) {
    setListaTarefas([...listaTarefa, tarefa ]);
    }
  }

  function excluirTarefa( id )
  {
    const novaLista = listaTarefa.filter( (tarefa ) => tarefa.id !== id );
    setListaTarefas( novaLista );
  }

  useEffect( () => {
      setTarefas( { id: "" , texto: "" } );
  }, [ listaTarefa ] )

  return (
    <>
    <header>
      <h1>To do list</h1>
    </header>
     <div>
       <input type="text" name="tarefa" placeholder="Digite sua tarefa" value={tarefa.texto} onChange={ (e) => setTarefas( {id: Math.random(), texto: e.target.value } ) }/>
       <button onClick={addTarefa}>Adicionar</button>
     </div>
     <div>
       <ul>
          {listaTarefa.map( (item, index ) => (
            <li key={item.id}>{item.texto} <button onClick={ () => excluirTarefa(item.id) }>Excluir</button></li>
          ))}
       </ul>
     </div>
    </>
  );
}

export default App;
