import '../css/componentes.css';
//import webpacklogo from '../assets/img/KameHouse.jpg';

export const saludar = (nombre) =>{
    console.log('Creando etiqueta H1');

    const h1= document.createElement('h1');
    h1.innerText = `Hola ${nombre}!!!`;

    document.body.append(h1);

    //Creando Imagen
    //const img = document.createElement('img');
    //img.src = webpacklogo;
    //document.body.append(img);
}