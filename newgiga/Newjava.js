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
 
    comentarios = new Map ;

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
 
let = new videojuego('FIFA 23','69.99','La mayor franquicia de deportes esta de vuelta, experimenta la emoción del fútbol como jugador, o forma el equipo de tus sueños como mánager, y lleva a tu equipo a la victoria.');
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

let videojuegos = new Map(["1",videojuego1],["2",videojuego2],["3",videojuego3],["4",videojuego4]);

