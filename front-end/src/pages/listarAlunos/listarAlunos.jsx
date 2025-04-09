import React, { useState, useEffect } from "react";
//import axios from 'axios';
import { listarTodos, listarPorMatricula } from '../../service/alunoService';

function ListarAlunos() {
    const [alunos, setAlunos] = useState([]);
    const [errorMsg, setErrorMsg] = useState(false);

    // //
    // // async function listarAlunos() {
    // try {
    //     const response = await axios.get('http://localhost:3000/aluno');
    //     if (response) {
    //         setAlunos(response.data)
    //     }
    // } catch (error) {
    //     console.log(error)
    //     setErrorMsg(error);
    // }
    // }
    //useEffect(() => {
    //  listarAlunos();
    // }, []);
    async function listarAlunoPorMatricula(matricula){
        try {
            const response = await listarPorMatricula(matricula);
            setAlunos(response.data)
        } catch(error){
            setAlunos([]);
            console.log(error);
            setErrorMsg(error)
        }
    }
        
    
    async function listarAlunos() {
        try {
            const response = await listarTodos();
            setAlunos(response.data);
        } catch (error) {
            setAlunos([]);
            console.log(error);
            setErrorMsg(error)

        }

    }
    useEffect(() => {
        listarAlunos();
        //listarAlunoPorMatricula('a2345');
    }, []);

    return (
        <div>
            {/* {errorMsg && */}
                <div>
                    <h1>Listagem de Alunos</h1>
                    <ul>
                        {
                            alunos.map((aluno) => (
                                <li key={aluno.matricula}>
                                    {aluno.nome} - {aluno.email} - Matrícula: {aluno.matricula}
                                </li>
                            ))
                        }
                    </ul>
                </div>
            {/* } */}

        </div>

    );

}

export default ListarAlunos;