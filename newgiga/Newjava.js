class comentario {
    texto = new String;
    valor = new String;

    constructor(valor, texto){
       
        this.valor = valor;
        this.texto = texto;
    }

    getTexto(){
        return this.texto;
    }

    getValor(){
        return this.valor;
    }

    toString(){
        return this.valor + ": " + this.texto;
    }
}


class videojuego{
 
    comentarios = new Array ;

    imgJuego = new Image();
   
    constructor(nombre, precio, descripcion){
        this.nombre = nombre;
        this.precio = precio;
        this.descripcion=descripcion;
    }

    AddComentario(valor, texto){
        let coment = new comentario(valor, texto);
        this.comentarios.push(coment);
    }
 
    getNombre(){
        return this.nombre;
    }
 
    getprecio(){
        return this.precio;
    }
 
    getDescripcion(){
        return this.descripcion;
    }
 
    toString(){
        let todosLosComentarios;
        game.comentarios.forEach(cometario =>{todosLosComentarios += cometario + "   ";  });
        return "Nombre:"+this.nombre+
        ", precio:"+this.precio+
        ", descripción:"+this.descripcion+
        ", comentarios:"+todosLosComentarios; 
    }
         
}


let videojuego1= new videojuego('Super Mario Galaxy','19.99','Embarcate en una aventura de proporciones galácticas, con nuevos potenciadores, planetas de los más rocambolescos y una nueva historia junto a Mario, con una única misión : Salvar el universo.');
videojuego1.AddComentario("Género :", " Aventura/Plataformas");
videojuego1.AddComentario("Comentario:", "Un juego bastante antiguo, con unos gráficos bastante estándares, pero con una jugabilidad atrayente e impecable.Si eres fan de Mario, este juego no puede faltar en tu colección.");
videojuego1.imgJuego.src = "img//12.jpg";
 
let videojuego2= new videojuego('FIFA 23','69.99','La mayor franquicia de deportes esta de vuelta, experimenta la emoción del fútbol como jugador, o forma el equipo de tus sueños como mánager, y lleva a tu equipo a la victoria.');
videojuego2.AddComentario("Género :", " Deportes/Simulación");
videojuego2.AddComentario("Comentario:","Es lo mismo de siempre, las modificaciones son mínimas, llena de micropagos, solo EA es capaz de hacer algo tan mal.");
videojuego2.imgJuego.src = "img//FIFA.jpg";

let videojuego3= new videojuego('Crash Bandicoot N.Sane Trilogy','24.99','¡3 juegos en uno!Crash esta de vuelta, listo para frustrar los planes del Dr. Neo Cortex y destrozar cajas y enemigos a tráves de 3 aventuras distintas en un solo juego.');
videojuego3.AddComentario("Género :", " Plataformas");
videojuego3.AddComentario("Comentario:","Un regreso triunfal de Crash, con una vuelta a los clasicos remasterizados, es un golpe de nostalgia y al mismo tiempo un soplo de aire fresco.");
videojuego3.imgJuego.src = "img//crash.jpeg";

let videojuego4= new videojuego('Modern Warfare 2','19.99','Experimenta la adrenalina del campo del batalla.Acribilla a tus enemigos de cerca o se más clínico con un francotirador, el único objetivo es acabar con el equipo rival y salir victorioso en distintos mapas.O desentyraña la conspiración para acabar con los EE.UU. en el modo historia para un solo jugador.');
videojuego4.AddComentario("Género :", " FPS/Acción");
videojuego4.AddComentario("Comentario:","Tiro al plato y mucha pirotecnia,acción sin pausa y tiros a mansalva.Aunque con una jugabilidad algo rígida y gráficos desfasados, pero dentro de todo disfrutable. ")
videojuego4.imgJuego.src = "img//MW2.jpg";

let videojuegos = [videojuego1, videojuego2,videojuego3,videojuego4];

let videojuegoIncompleto = false;

function reset(){
let borrar = document.getElementById('content');
borrar.innerHTML = '';
AddContentToDOM();
}

function hideFormulario(){
    let masInfoElement = document.getElementById('show_formulario');
    masInfoElement.style.display = "none";
    console.log(masInfoElement.style.display);
}

function showHide(parteDeInformacion,idVideojuegos) {
    let masInfoElement = document.getElementById(parteDeInformacion + idVideojuegos);
        let display = masInfoElement.style.display;
        if (display === "none") {
          masInfoElement.style.display = "block";
        } else {
             masInfoElement.style.display = "none";
        }   
}

function showHideMasInfo (idVideojuego){
    for (let i = 0; i < videojuegos.length; i++) {
        if (i != idVideojuego){
            
            showHide('titulo-',i);
           
        }
        
    }
    showHide('masinfo-', idVideojuego);
    
    
}

function atras(i){

    reset();

    if (i<videojuegos.length){  
        showHideMasInfo(i);
        hideFormulario();
    }
} 

function erase(numJuego){
    videojuegos.splice(numJuego,1);
    console.log(videojuegos); //array sin elementa a borrar
 
}

//funcionalidad a añadir que da errores
function asegurarBorrado(num,dirr){

let asegurador = document.createElement("h5");
dirr.appendChild(asegurador);
asegurador.textContent = "Seguro que quieres borrar? "
asegurador.className = "alert alert-dark";

let seguro = document.createElement("button");
asegurador.appendChild(seguro);
seguro.textContent = "Sí";
seguro.className = "btn btn-outline-warning";
seguro.onclick =  () => {
    erase(num);
    reset();
}

let inseguro = document.createElement("button");
asegurador.appendChild(inseguro);
inseguro.textContent = "No";
inseguro.className = "btn btn-outline-danger";
inseguro.onclick =  () => atras(num);
}

function insertar(game,pos){ 
    let arrayAux = []; 
    for (let i = videojuegos.length - 1; i > pos; i--){
        let ElemSacado = videojuegos.pop();
        arrayAux.push(ElemSacado);
    }

    cogerImg= videojuegos.pop();
    game.imgJuego=cogerImg.imgJuego;
    videojuegos.push(game);
    
    while(arrayAux.length>0){
        let juego = arrayAux.pop();
        videojuegos.push(juego);
    };
}

function changeComentarios(id){
    console.log(videojuegos[id].comentarios.length);
    for (let i = 0; i < videojuegos[id].comentarios.length+1; i++) {
        let comentarioAInsertar = document.getElementById('newComentario'+ i);
        let valorAInsertar = document.getElementById('newValor'+ i);
        if ((comentarioAInsertar !== null)&&(valorAInsertar !== null)){
            let comentarioReal = comentarioAInsertar.value;
            let valorReal = valorAInsertar.value;
            console.log (comentarioReal);
            if ((comentarioReal !== " ")&&(comentarioReal !== "")&&(valorReal !== " ")&&(valorReal !== "")){
                videojuegos[id].AddComentario(valorReal, comentarioReal);
            }
        }
    }
}

function changeVideojuego(id){

    let tituloAInsertar = document.getElementById('newTitulo');
    let tituloReal=tituloAInsertar.value;
    let precioAInsertar = document.getElementById('newPrecio');
    let precioReal= precioAInsertar.value;
    let descripcionAInsertar = document.getElementById('newDescription');
    let descripcionReal = descripcionAInsertar.value;
    if ((isNaN(precioReal) === false)&&(tituloReal !== "")&&(descripcionReal !== "")&&(precioReal !== "")){   
        let newGame = new videojuego(tituloReal,precioReal,descripcionReal);
        insertar(newGame,id);
        changeComentarios(id);
        return true;
    } else {
        videojuegos[id].comentarios.splice(0,videojuegos[id].comentarios.length)
        changeComentarios(id);
        alert("Nombre o Precio no aceptados");
        return false;
    }

  

}


function setChanges(id){
    let variable = changeVideojuego(id);
    if (variable==true){
        reset();
    }
    
}

function showHideNuevo(parteDeInformacion) {
    let masInfoElement = document.getElementById(parteDeInformacion);
        let display = masInfoElement.style.display;
        if (display === "none") {
          masInfoElement.style.display = "block";
        } else {
             masInfoElement.style.display = "none";
        }   
}


function borrado(id,idComentario){
    
    changeVideojuego(id);
    videojuegos[id].comentarios.splice(idComentario,1);
   
    reset();
    showHideMasInfo(id);
    modify(id);

}

function borrarCom(i){
    console.log('Todo en orden');
    create();
    videojuegos[videojuegos.length-1].comentarios.splice(i,1);

    reset();
    for (let i = 0; i < videojuegos.length; i++) {
        showHide('titulo-',i);
    }
    hideFormulario();
    crearformulario(videojuegos.length+1);
}

function formularioComentarios(coment,id,i){

    let inicio = document.getElementById('div-inicial');
    let divComentario = document.createElement("div");
    inicio.appendChild(divComentario);
    //divComentario.textContent="Comentario "+i+": ";

    let changedValor = document.createElement("input");
    divComentario.appendChild(changedValor);
    changedValor.value = coment.getValor();
    changedValor.id = 'newValor'+ i;
    console.log(changedValor.id);

    let changedComentario = document.createElement("input");
    divComentario.appendChild(changedComentario);
    changedComentario.value = coment.getTexto();
    changedComentario.id = 'newComentario'+ i;
    console.log(changedComentario.id);

    let borrador = document.createElement("button");
    divComentario.appendChild(borrador);
    borrador.textContent = "Borrar";
    if(videojuegos[id]!== undefined){
       borrador.onclick = () => borrado(id,i); 
    }else{
        borrador.onclick = () => borrarCom()}
  
}

function AddComentarios(miJuego,id){
    miJuego.AddComentario(' ');
    formularioComentarios(miJuego.comentarios[miJuego.comentarios.length-1 ], id,miJuego.comentarios.length-1 );

}

function crearformulario(id){
    let inicio = document.getElementById('div-inicial');
    let miJuego = new videojuego(' ',' ',' ');

    if (id<videojuegos.length){
        
      miJuego = videojuegos[id];
}


    let divTitulo = document.createElement("p");
    inicio.appendChild(divTitulo);
    divTitulo.textContent="Titulo: ";

    let changedTitulo = document.createElement("input");
    divTitulo.appendChild(changedTitulo);
    changedTitulo.value = miJuego.nombre; 
    changedTitulo.id = 'newTitulo';

    /////////////

    let getImg = document.createElement('div');
    getImg.textContent = "Imagen: ";
    inicio.appendChild(getImg);

    let inputImg = document.createElement('input');
    inputImg.type = "file";
    inputImg.accept = "image/png, image/jpg";
    inputImg.id = "img_input";
    getImg.appendChild(inputImg);

    let divIm = document.createElement('div');
    divIm.className = "display-image";
    getImg.appendChild(divIm);

    let imgQ = document.querySelector("#img_input");
    let imgPath = "";

    imgQ.addEventListener("change", function(){
        let reader = new FileReader();
        reader.addEventListener("load", () => {
            imgPath = reader.result;
            document.querySelector("#display-image").style.backgroundImage = `url(${imgPath})`;
        });
    })
    
    /////////////


    let divDescription = document.createElement("div");
    inicio.appendChild(divDescription);
    divDescription.textContent="Descripción: ";

    let changedDescription = document.createElement("input");
    divDescription.appendChild(changedDescription);
    changedDescription.value = miJuego.descripcion; 
    changedDescription.id = 'newDescription';

    let divPrecio = document.createElement("p");
    inicio.appendChild(divPrecio);
    divPrecio.textContent="Precio: ";

    let changedPrecio = document.createElement("input");
    divPrecio.appendChild(changedPrecio);
    changedPrecio.value = miJuego.getprecio();
    changedPrecio.id = 'newPrecio';

    //lo saco a otra función
    for (let i = 0; i < miJuego.comentarios.length; i++) {
        let comentario = miJuego.comentarios[i];
        formularioComentarios(comentario, id, i);
        console.log(i);
    }
    
    let AddComentario = document.createElement("button");
    inicio.appendChild(AddComentario);
    AddComentario.textContent = "Añadir comentario";
    AddComentario.onclick = () => AddComentarios(miJuego,id); 
    
    let modificado = document.createElement("button");
    inicio.appendChild(modificado);
    modificado.textContent = "Guardar";
    if (id<videojuegos.length){
        modificado.onclick = () => setChanges(id);
    }else{
        modificado.onclick = () => {
            let variable =create();
            console.log(variable);
            if (variable==true){
                reset();
                
            }else{
                erase(id);
                alert("Nombre o Precio no aceptados");
            }
        }
    }

    let cancelar = document.createElement("button");
    inicio.appendChild(cancelar);
    cancelar.textContent = "Cancelar";  
    cancelar.onclick = () => {
        if(id==videojuegos.length+1){
            erase(videojuegos.length-1);
        }
        atras(id);
    }

}

function modify(id){
    showHide('titulo-',id);
    showHide('masinfo-',id);
    hideFormulario();
    crearformulario(id);    
}

 /*Se va añadiendo al DOM:
 <div class="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
    <div class="col mb-5">
        <div class="card h-100">
            <!-- Product image-->
            <img class="card-img-top" src="12.jpg" alt="..." />
            <!-- Product details-->
            <div class="card-body p-4">
                <div class="text-center">
                    <!-- Product name-->
                    <h5 class="fw-bolder">Fancy Product</h5>
                    <!-- Product price-->
                     $40.00 - $80.00
                </div>
            </div>
            <!-- Product actions-->
            <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                <div class="text-center"><p class="btn btn-outline-dark mt-auto">View options</p></div>
            </div>
        </div>
    </div>
</div>
 */

function addJuegoToDOM(game, i) {

    let coldiv = document.createElement("div");
    content.appendChild(coldiv);
    coldiv.className= 'col mb-5';
    coldiv.id='div-inicial';

    let carddiv = document.createElement("div");
    coldiv.appendChild(carddiv);
    carddiv.id='titulo-' + i;
    carddiv.className= 'card h-100';

    /* Implementar luego quizás:
    let gameimage = document.createElement("img");
    carddiv.appendChild(gameimage);
    gameimage.className='ard-img-top';
    // gameimage.src='12.jpg';
    */

    let imgJ = document.createElement('img');
    imgJ.className = 'card-body p-4';
    if(game.imgJuego.src !== ""){
    imgJ = game.imgJuego;
    }else{
        imgJ.src = "img//nodisponible.png"; 
    }
    imgJ.height = 280;
    carddiv.appendChild(imgJ);
    
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
}

function showFormulario(){
    showHide('show_','formulario');
    showHide('formulario_añadir_','juego');
    hideFormulario();
}

function create(){
    let tituloAInsertar = document.getElementById('newTitulo');
    let tituloReal=tituloAInsertar.value;
    let precioAInsertar = document.getElementById('newPrecio');
    let precioReal= precioAInsertar.value;
    let descripcionAInsertar = document.getElementById('newDescription');
    let descripcionReal = descripcionAInsertar.value;
    
    let newGame = new videojuego(tituloReal,precioReal,descripcionReal);
    i=0;
    while(document.getElementById('newComentario'+ i)!=null){
        let comentarioAInsertar = document.getElementById('newComentario'+ i).value;
        let ValorAInsertar = document.getElementById('newValor'+ i).value;
        newGame.AddComentario(ValorAInsertar,comentarioAInsertar);
        i=i+1;
    } 
    let ImgNew = document.getElementById("img_input"); 
    newGame.imgJuego.src = ImgNew.value;
    videojuegos.push(newGame);
    changeVideojuego(videojuegos.length - 1);
     if ((precioReal !== " ")&&(tituloReal !== " ")&&(isNaN(precioReal) === false)){  //
        return true;
   // videojuegos[videojuegos.length].toString;
    } else {     
        
        return false;
    }
}

                 


function crearVideojuego(){
    for (let i = 0; i < videojuegos.length; i++) {
        showHide('titulo-',i);
    }
    hideFormulario();
    crearformulario(videojuegos.length);
}

function AddContentToDOM(){
    
    let content = document.getElementById('content');
    
    if (videojuegos.length>0){
        for (let i = 0; i < videojuegos.length; i++) {
 
            let videojuego = videojuegos[i];
            addJuegoToDOM(videojuego, i);
        }
    } else {
        let noElem = document.createElement("p");
        content.appendChild(noElem);
        noElem.textContent = "Sin Productos";
        noElem.className = 'alert alert-warning'
    }

    let createDiv = document.createElement("div");
    content.appendChild(createDiv); 

    let createB = document.createElement("button");
    createDiv.appendChild(createB);
    createB.textContent = "Nuevo Elemento";
    createB.onclick = () => crearVideojuego();
    createB.id= 'show_formulario';


    
} 

AddContentToDOM();