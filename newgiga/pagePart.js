import express from 'express';
import { getVideojuegos } from './videojuegoService.js';
import { getComentarios } from './videojuegoService.js';

const router = express.Router();

router.get('/', (req, res) => {

    const videojuegos = getVideojuegos(0,3);

    res.render('NewGiga', {
        videojuegos:videojuegos
    });
});

router.get('/videojuego', (req, res) => {

    const from = parseInt(req.query.from);
    const to = parseInt(req.query.to);

    const videojuegos = getVideojuegos(from,to);

    res.render('videojuego', {
        videojuegos:videojuegos
    });
});


router.get('/videojuego', (req, res) => {

    const from = parseInt(req.query.from);
    const to = parseInt(req.query.to);

    for (id=from; id++; id<= to){
        const comentarios = getComentarios(id);
   
        res.render('comentarios', {
            comentarios:comentarios
        });
     }
});

export default router;