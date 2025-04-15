import React from 'react'
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom'
import GerenciarAlunos from './pages/GerenciarAlunos/GerenciarAlunos'

function App() {

  return (
    <>
     <BrowserRouter>
        <Routes>
          <Route path="/alunos" element={<GerenciarAlunos />} />
        </Routes>
     </BrowserRouter>
    </>
  )
}

export default App