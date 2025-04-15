import React, { useState, useEffect } from 'react'; 
  // Importa React, useState e useEffect para gerenciamento de estados e efeitos.

import { listarTodos } from '../../../service/alunoService'; 
  // Importa a função `listarTodos` do serviço para listar todos os alunos.

import styles from './ListarAlunos.module.css'; 
  // Importa os estilos específicos para o componente.

function ListarAlunos({ refreshTrigger }) { 
  // Componente para listar alunos. Recebe `refreshTrigger` para recarregar a lista quando necessário.

  const [alunos, setAlunos] = useState([]); 
  // Estado para armazenar os alunos.

  const [errorMsg, setErrorMsg] = useState(''); 
  // Estado para armazenar a mensagem de erro, se houver.

  async function fetchAlunos() { 
    // Função para buscar os alunos do servidor.

    try {
      const res = await listarTodos(); 
      // Chama o serviço para listar todos os alunos.

      setAlunos(res.data); 
      // Atualiza o estado com a lista de alunos.
    } catch (error) {
      setErrorMsg(error.response.data.mensagem || 'Erro ao listar alunos.');
      // Exibe mensagem de erro caso a busca falhe.
    }
  }

  useEffect(() => { 
    // Efeito para buscar alunos quando o componente é montado ou o gatilho `refreshTrigger` mudar.
    
    fetchAlunos(); 
    // Chama a função para buscar alunos.
  }, [refreshTrigger]); 
  // Dependência: recarrega quando `refreshTrigger` mudar.

  return (
    <div className={styles.container}>
      <h2 className={styles.titulo}>Lista de Alunos</h2>
      {/* Título da seção de lista de alunos. */}

      {errorMsg && <p className={styles.error}>{errorMsg}</p>}
      {/* Exibe mensagem de erro se houver. */}

      <ul className={styles.lista}>
        {/* Lista de alunos. */}
        
        {alunos.map((aluno) => (
          <li key={aluno.matricula} className={styles.item}>
            {/* Exibe as informações do aluno. */}
            {aluno.nome} - {aluno.email} - Matrícula: {aluno.matricula}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListarAlunos; 
// Exporta o componente ListarAlunos.