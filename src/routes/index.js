const express= require('express');
const router = express.Router();



router.get('/',(req,res)=>{
    res.render('index',{title:'Primer Sitio'})
 });


 router.get('/contact',(req,res)=>{
    res.render('contact',{title:'Pagina de contactos'})
 });


 module.exports = router;