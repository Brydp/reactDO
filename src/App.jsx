import { useEffect, useState } from "react";

function App() {

  const [ listaTarefa, setListaTarefas ] = useState( [] );
  const [ tarefa, setTarefas ] = useState( {id: '' , texto: "", status: "" } ); 

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

  function statusTarefa ( id, status )
  {
    const index = listaTarefa.findIndex( (tarefa) => tarefa.id === id);
    listaTarefa[index].status = !status;
    setListaTarefas( [...listaTarefa ] );
  }

  useEffect( () => {
      setTarefas( { id: "" , texto: "", status: "" } );
  }, [ listaTarefa ] )

  return (
    <>
    <header>
      <h1>To do list</h1>
    </header>
     <div>
       <input type="text" name="tarefa" placeholder="Digite sua tarefa" value={tarefa.texto} onChange={ (e) => setTarefas( {id: Math.random(), texto: e.target.value, status: false} ) }/>
       <button onClick={addTarefa}>Adicionar</button>
     </div>
     <div>
       <ul>
          {listaTarefa.map( (item, index ) => (
            <li key={index}>{item.texto} <button  onClick={ () => statusTarefa(item.id, item.status) }>{item.status ? 'Concluida' : 'Não Concluida' }</button> <button onClick={ () => excluirTarefa(item.id) }>Excluir</button></li>
          ))}
       </ul>
     </div>
    </>
  );
}

export default App;
