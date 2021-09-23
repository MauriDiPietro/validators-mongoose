
import * as UsuariosService from '../services/usuarios.servicios.js'

export async function createUser(req, res){
    try{
        const {body} = req
        const response = await UsuariosService.createUser(body)  //createUser-->servicio que espera (data)
        res.status(200).json({response})
        console.log(response)
    }catch(error){
        res.status(400).send(error.message)
    }
}