import React, { useState, useEffect } from "react";
import { listarTodos, listarPorMatricula } from "../../service/alunoService";

function ListarAlunos() {
    const [alunos, setAlunos] = useState([]);
    const [errorMsg, setErrorMsg] = useState('');

    async function listarAlunos() {
        try {
            const response = await listarTodos();
            setAlunos(response.data);
            setErrorMsg('');
        } catch (error) {
            setAlunos([]);
            console.error(error);
            setErrorMsg(error.response.data.mensagem || 'Erro ao listar alunos.');
        }
    }

    async function listarAlunoPorMatricula(matricula) {
        try {
            const response = await listarPorMatricula(matricula);
            // Caso venha apenas um objeto, convertê-lo em array
            setAlunos(Array.isArray(response.data) ? response.data : [response.data]);
            setErrorMsg('');
        } catch (error) {
            setAlunos([]);
            console.error(error);
            setErrorMsg(error.response.data.mensagem || 'Erro ao buscar aluno.');
        }
    }

    useEffect(() => {
        //listarAlunos();
        listarAlunoPorMatricula('a11111');
    }, []);

    return (
        <div>
            <h1>Listagem de Alunos</h1>

            {errorMsg && <p style={{ color: 'red' }}>{errorMsg}</p>}

            {!errorMsg && alunos.length > 0 ? (
                <ul>
                    {alunos.map((aluno) => (
                        <li key={aluno.matricula}>
                            {aluno.nome} - {aluno.email} - Matrícula: {aluno.matricula}
                        </li>
                    ))}
                </ul>
            ) : null}
        </div>
    );
}

export default ListarAlunos;