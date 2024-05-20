import React, { useState } from 'react';
import './style.css';

function ListaDeTarefas() {
  const [tarefas, setTarefas] = useState([]);
  const [novaTarefa, setNovaTarefa] = useState('');

  const adicionarTarefa = () => {
    if (novaTarefa.trim() !== '') {
      setTarefas([...tarefas, novaTarefa]);
      setNovaTarefa('');
    }
  };

  const removerTarefa = (index) => {
    const novasTarefas = [...tarefas];
    novasTarefas.splice(index, 1);
    setTarefas(novasTarefas);
  };

  return (
    <div className="container-tarefas">
      <div className="task-list">
        <h2 color='white'>Lista de Tarefas</h2>
        <div className="input-container">
          <input
            type="text"
            value={novaTarefa}
            onChange={(e) => setNovaTarefa(e.target.value)}
            placeholder="Adicione uma nova tarefa"
          />
          <button onClick={adicionarTarefa}>Adicionar</button>
        </div>
        <ul>
          {tarefas.map((tarefa, index) => (
            <li key={index} className="task-item">
              {tarefa}
              <button onClick={() => removerTarefa(index)}>Remover</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ListaDeTarefas;


