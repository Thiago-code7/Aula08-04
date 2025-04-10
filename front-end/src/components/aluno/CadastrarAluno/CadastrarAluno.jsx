import React, { useState } from "react";
import { criar } from "../../../service/alunoService"; // Supondo que esse seja o serviço para cadastrar um alu
//import style from './CadastrarAluno.module.css'

function CadastrarAluno() {
    const [matricula, setMatricula] = useState(''); // Estado para a matrícula do aluno
    const [nome, setNome] = useState(''); // Estado para o nome do aluno
    const [email, setEmail] = useState(''); // Estado para o email do aluno
    const [senha, setSenha] = useState(''); // Estado para a senha do aluno
    const [erroMsg, setErroMsg] = useState(''); // Estado para mensagens de erro
    const [sucessoMsg, setSucessoMsg] = useState(''); // Estado para mensagem de sucesso

  async function criarAluno() {
    try {
        await criar({ matricula, nome, email, senha});
        setSucessoMsg('Aluno cadastrado com sucesso');
        setErroMsg('')
    } catch (error) {
        setErroMsg(Error.response.data.mensagem)
    }
  }

  return(
    <div>
        <h2>Cadastrar Aluno</h2>
        <input
        type="text"
        value={matricula}
        onChange={(e) => setMatricula(e.target.value)}
        placeholder="Digite sua matricula"
        />
        <input
          type="text"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          placeholder="Digite o seu Nome"
          />
          <input
           type="text"
           value={email}
           onChange={(e) => setEmail(e.target.value)}
           placeholder="Digite a seu email"
           />
            <input
           type="text"
           value={senha}
           onChange={(e) => setSenha(e.target.value)}
           placeholder="Digite a sua senha"
           />



           <button onClick={criarAluno}>Cadastrar</button>
           {erroMsg && <p>{erroMsg}</p>}
           {sucessoMsg && <p>{sucessoMsg}</p>}
    </div>
  )
}
export default CadastrarAluno;
