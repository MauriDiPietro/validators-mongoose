import mongoose from 'mongoose';

const Schema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: [10, 'El nombre es muy largo'],
        match: /Usuario/    //debe contener la palabra Usuario
    },
    age: {
        type: Number,
        required: true,
        min: 18,
        max: 30
    },
    email: {
        type: String,
        required: true,
        match: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,   //verifica que sea mail valido
        validate: {
            validator: (value)=>{
                if(value.length<40)return false
                return true
            },
            message: 'el correo es muy corto'
        }
    }
}, {
    timestamps: true
})

export const UsuarioModel = mongoose.model('Usuarios', Schema)