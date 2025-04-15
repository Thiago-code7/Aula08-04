import React, { useState } from 'react'; 
// Importa o React e o hook useState para controlar o estado dos componentes.

import BuscarAluno from '../../components/aluno/BuscarAluno/BuscarAluno'; 
// Importa o componente BuscarAluno para ser usado na página.

import ListarAlunos from '../../components/aluno/ListarAluno/ListarAluno'; 
// Importa o componente ListarAlunos, que exibe a lista de alunos cadastrados.

import CadastrarAluno from '../../components/aluno/CadastrarAluno/CadastrarAluno'; 
// Importa o componente CadastrarAluno, usado para criar novos alunos.

import styles from './GerenciarAlunos.module.css'; 
// Importa os estilos específicos para o componente da página de gestão de alunos.

function GerenciarAlunos() { 
  // Define o componente principal da página de gestão de alunos.
  
  const [atualizarLista, setAtualizarLista] = useState(false); 
  // Cria um estado `atualizarLista`, que controla a atualização da lista de alunos.
  
  const handleRefresh = () => { 
    // Função para alternar o estado de atualização da lista de alunos.
    
    setAtualizarLista((prev) => !prev); 
    // Inverte o estado de `atualizarLista`, forçando o componente a recarregar a lista.
  };

  return (
    <div className={styles.container}>
      {/* Cria o contêiner da página usando a classe CSS importada. */}

      <h1 className={styles.tituloPrincipal}>Gestão de Alunos</h1>
      {/* Exibe o título principal da página de gestão de alunos. */}

      <div className={styles.linhaPrincipal}>
        {/* Define uma linha para dividir as colunas de conteúdo na página. */}

        <div className={styles.colunaEsquerda}>
          {/* Coluna à esquerda, onde ficam os componentes de buscar e cadastrar aluno. */}
          
          <div className={styles.buscar}>
            <BuscarAluno />
            {/* Exibe o componente BuscarAluno para buscar alunos. */}
          </div>

          <div className={styles.cadastro}>
            <CadastrarAluno onCadastro={handleRefresh} />
            {/* Exibe o componente CadastrarAluno e passa a função handleRefresh como propriedade para ser chamada após o cadastro. */}
          </div>
        </div>

        <div className={styles.colunaDireita}>
          {/* Coluna à direita para exibir a lista de alunos. */}
          
          <ListarAlunos refreshTrigger={atualizarLista} />
          {/* Exibe o componente ListarAlunos e passa o estado `atualizarLista` como gatilho para recarregar a lista. */}
        </div>
      </div>
    </div>
  );
}

export default GerenciarAlunos; 
// Exporta o componente GerenciarAlunos para ser usado em outras partes do aplicativo.