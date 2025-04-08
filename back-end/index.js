const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();
const app = express();
const port = process.env.PORTA;
const router = require('./routes/alunoRoutes')

app.use(cors());
// Aplicação use express como json(javascript object notation)
app.use(express.json());
app.use(router)

app.get('/', (req, res)=>{
    res.send('Hello World');
})

app.listen(port, ()=>{
    console.log(`http://localhost:${port}`);
})
