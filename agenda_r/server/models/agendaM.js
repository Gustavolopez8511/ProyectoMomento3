const mongoose = require('mongoose');

let Schema = mongoose.Schema;

let proveedorSchema = new Schema({
    nomprovee:{
        type: String,
        require : [true, 'Nombre  es obligatoria..'],

    },

    nit:{
        type: String,
        require : [true, 'Nit es obligatoria..'],
       

    }, 
    telefono:{
        type: String,
        require : [true, 'Telefono es obligatorio..'],
        

    },
    dirreccion:{
        type: Number,
        require : [true, 'La dirreccion es obligatoria..'],
        

    },
    correo:{
        type: String,
        require : [true, 'El correo es obligatoria..'],

    },
    password:{
        type: String,
        require : [true, 'Contraseña obligatoria..'],

    },

});

module.exports = mongoose.model("proveedor", proveedorSchema);