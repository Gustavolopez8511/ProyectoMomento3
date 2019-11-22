const express = require('express');
const app = express();
const vehiculos = require("models/agendaM");

app.get('/', function (req, res) {
    res.json({
        'exito': true,
        'mensage':'Trabajo final',
        'datos' : []
     })
  });
  
  //listar 
app.get('/proveedor', function (req, res) {

proveedor.find({})
        .exec((err, proveedorList) =>{
            if(err){
            return res.status(400).json({
                 'exito': false,
                 'mensage':'error',
                 'datos' : []

                 });
             }
             return res.json({
                'exito': true,
                'mensage':'Listado proveedores',
                'datos' :[proveedorList] 
                })
         });

    });

    //Guardar 
app.post('/proveedor', function (req, res) {
    let datos = req.body;
    
    let proveedor = new proveedor({
        nomproveedor: datos.nomproveedor,
        nit: datos.nit,
        telefono: datos.telefono,
        dirreccion: datos.dirreccion,
        codigocorreo: datos.correo,
        password : datos.password
    });

     proveedor.save( (err, agendaBD) =>{
        if(err){
            return res.status(400).json({
                 'exito': false,
                 'mensage':'error',
                 'datos' : []

                 });
             }
             return res.json({
                'exito': true,
                'mensage':'Guardar producto',
                'datos' : [agendaBD]
                })

         }); 
 });

 //consultar por Id
app.get('/probeedor/:id', function (req, res){
    let id = req.params.id;

    proveedor.findById(id)
        .exec((err, proveedorList) =>{
            if(err){
            return res.status(400).json({
                 'exito': false,
                 'mensage':'error',
                 'datos' : []

                 });
             }
             return res.json({
                'exito': true,
                'mensage':'Auto encontrado',
                'datos' : [agendaBD]
                })
         });

});

//Actualizar
app.put('/proveedor/:id', function (req, res){
    let id = req.params.id;
    let datos = req.body;
    
     proveedor.findByIdAndUpdate(id, datos,{new : true , upsert : true, runValidators: true}, (err, agendaBD) =>{
        if(err){
            return res.status(400).json({
                 'exito': false,
                 'mensage':'error',
                 'datos' : []

                 });
             }
             return res.json({
                'exito': true,
                'mensage':'Actualizar  producto',
                'datos' : [agendaBD]
                })

         });

});

//Elminar
app.delete('/proveedor/:id', function (req, res){
    let id = req.params.id;
    let datos = {active : false}

    vehiculos.findByIdAndUpdate(id, datos,{new : true , upsert : true, runValidators: true}, (err, agendaBD) =>{
        if(err){
            return res.status(400).json({
                 'exito': false,
                 'mensage':err,
                 'datos' : []

                 });
             }
             if(!agendaBD){
                 return res.status(400).json({
                     'exito' : false,
                     'mensaje' : 'proveedor no se encuentra',
                     'datos' : []
                 });
             }
            
             return res.json({
                'exito': true,
                'mensage':'Proveedor borrado con exito',
                'datos' : [agendaBD]
                })

         });

});


module.exports = app;
