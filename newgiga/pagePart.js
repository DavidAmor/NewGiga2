import express from 'express';
import { getVideojuegos } from './videojuegoService.js';

let i = 0;

const router = express.Router();
router.get('/', (req, res) => {
     let videojuegos = getVideojuegos(i);
     const page = videojuegos.forEach(videojuego => createpage(videojuego));
    res.render('index', {
        videojuegos: videojuegos,
        contenido:page
    });
});
export default router;

function createpage (game){
    let coldiv = document.createElement("div");
    content.appendChild(coldiv);
    coldiv.className= 'col mb-5';
    coldiv.id='div-inicial';

    let carddiv = document.createElement("div");
    coldiv.appendChild(carddiv);
    carddiv.id='titulo-' + i;
    carddiv.className= 'card h-100';
    
    let bodydiv = document.createElement("div");
    carddiv.appendChild(bodydiv);
    bodydiv.className= 'card-body p-4';

    let bodytext = document.createElement("div");
    bodydiv.appendChild(bodytext);
    bodytext.className= 'text-center';
    

    let hTitulo = document.createElement("h5");
    bodytext.appendChild(hTitulo);
    hTitulo.textContent = game.nombre;
    hTitulo.className = "fw-bolder"; 
    hTitulo.onclick = () => {
        showHideMasInfo(i); 
        showHideNuevo('show_formulario');
    }  
    
    let hPrice = document.createElement("h5");
    bodytext.appendChild(hPrice);
    hPrice.textContent = game.precio + "€";

    let footerdiv = document.createElement("div");
    carddiv.appendChild(footerdiv);
    footerdiv.className='card-footer p-4 pt-0 border-top-0 bg-transparent';
   

    let masinfodiv = document.createElement("div");
    footerdiv.appendChild(masinfodiv);
    masinfodiv.className = 'text-center';
    masinfodiv.id = 'masinfo-' + i;
    masinfodiv.style.display = 'none';
    
    let pDescripcion = document.createElement("p");
    masinfodiv.appendChild(pDescripcion);
    pDescripcion.className = 'btn btn-outline-dark mt-auto';
    pDescripcion.textContent = game.descripcion;

    let divComentarios = document.createElement("div");
    masinfodiv.appendChild(divComentarios);
    divComentarios.className = 'btn btn-outline-dark mt-auto';
    game.comentarios.forEach(cometario =>{ 
      let pComentarios = document.createElement("p"); 
      divComentarios.appendChild(pComentarios); 
      pComentarios.textContent = cometario.getValor()+cometario.getTexto();  
    });

    let volver = document.createElement("button");
    masinfodiv.appendChild(volver);
    volver.textContent = "Volver a titulos";
    volver.onclick = () => {
        reset();
    }
    
    let borrar = document.createElement("button");
    masinfodiv.appendChild(borrar);
    borrar.textContent = "Borrar";
    borrar.onclick = () => asegurarBorrado(i,masinfodiv);
 
    let modificar = document.createElement("button");
    masinfodiv.appendChild(modificar);
    modificar.textContent = "Modificar";
    modificar.onclick = () => modify(i);

 i++;

    return coldiv;
}