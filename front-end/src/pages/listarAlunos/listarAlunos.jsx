import React, { useState , useEffect} from "react";
import axios from 'axios';

function ListarAlunos(){
const [alunos, setAlunos] = useState([]);

async function listarAlunos(){
    try{
        const response = await axios.get('http://localhost:3000/aluno');
        if(response){
            setAlunos(response.data)
        }
    }catch(error){
        console.log(error)
    }
}
useEffect(()=>{
    listarAlunos();
}, []);

console.log(alunos);


    return (
        <div>
               
        </div>

    );

}

export default ListarAlunos;