import {UsuarioModel} from '../models/usuarios.models.js'

export async function createUser(data){
    try{
        const response = await UsuarioModel.create(data) //.create(metodo de mongoose)
        return response
        console.log(response)
    }catch(error){
        throw new Error(error)
    }
}