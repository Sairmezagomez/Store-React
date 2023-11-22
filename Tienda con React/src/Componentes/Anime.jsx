import React from "react";
import { Link } from "react-router-dom";
import dragonBall from "../Imagenes/DragonBall.jpeg";
import deathNote from "../Imagenes/DeathNote.jpg";
import naruto from "../Imagenes/Naruto.jpg";
import onePece from "../Imagenes/OnePece.jpg";
import boruto from "../Imagenes/Boruto.jpg";
import caballerosDelZodiaco from "../Imagenes/CaballerosDelZodiaco.png";




function Anime() {

  const productos = [
    { NOMBRE: "DRAGON BALL", ESTUDIO: "WARNER", imagen: dragonBall },
    { NOMBRE: "DEATH NOTE", ESTUDIO: "FOX", imagen: deathNote },
    { NOMBRE: "NARUTO", ESTUDIO: "", imagen: naruto },
    { NOMBRE: "ONE PECE", ESTUDIO: "", imagen: onePece },
    { NOMBRE: "BORUTO", ESTUDIO: "", imagen: boruto },
    { NOMBRE: "ICABALLEROS DEL ZODIACO", ESTUDIO: "", imagen: caballerosDelZodiaco }
  ];

  return (

    <div >
      <div className="posicion-fija-accion ">
        <div className="ir-al-menu">
          <Link to="/" className="link"  ><h2 className="">Ir al Menú</h2> </Link>
        </div>

        <h1 className="pel-Accion sticky-text">ANIMES QUE TENEMOS DISPONIBLES</h1>
      </div>

      <div className="contenedor-productos " >
        {productos.map((producto, index) => (
          <div key={index} className="tarjeta-producto">

            <div className="modelo" >
              <div className="efectos">
                <img className="imagenesAccion" src={producto.imagen} alt="" />
              </div>
              <div className="nombre-estudio">
                <p className="tipo">NOMBRE:<br></br> {producto.NOMBRE}</p>
                <p className="tipo">ESTUDIO:<br></br> {producto.ESTUDIO}</p>
              </div>

            </div>

          </div>
        ))}
      </div>
    </div>
  );
}

export default Anime; 
