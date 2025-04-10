import React, { useState, useEffect } from "react";
import { listarTodos } from "../../../service/alunoService";
import style from './ListarAluno.module.css';

function ListarAluno() {
    const [alunos, setAlunos] = useState([]);//Estado para armazenar a lista de alunos
    const [erroMsg, setErroMsg] = useState('');

    //funcao que e chamada para carregar o componente, para buscar os alunos
    async function fetchAlunos() {
        try {
            const res = await listarTodos(); //chama o servico para listar todos os alunos
            setAlunos(res.data)
            setErroMsg(res.data.mensagem)
        } catch (error) {
            setErroMsg(error.response.data.mensagem);
        }
    }

    useEffect(() => {
        fetchAlunos();// chama a funcao para buscar os alunos
    }, [])// o array vazio garante que a funcao seja chamada apenas uma vez quando o componente for montado.
    return (
        <div>
            <h2>Lista de Alunos</h2>
            {erroMsg && <p>{erroMsg}</p>} {/* Exibe mensagem de erro se houver*/}
           <ul>
            {
                alunos.map((aluno) =>(
                    <li key={aluno.matricula}>
                        {aluno.nome} - {aluno.email} - {aluno.matricula}
                        </li>
                ))
            }
           </ul>

        </div>
    );
}
export default ListarAluno;