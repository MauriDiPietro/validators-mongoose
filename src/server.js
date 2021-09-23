import './db.js';
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';

import UsuariosRouter from './routers/usuarios.routers.js'

const app = express();

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(morgan('dev'))

app.get('/', (req, res)=>{

})

app.use('/usuarios', UsuariosRouter)

const PORT = process.env.PORT || 3000
app.listen(PORT, ()=> console.log(`>>Server started on port ${PORT}`))