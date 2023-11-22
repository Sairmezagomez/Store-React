import React from "react";
import { Link } from "react-router-dom";
import alf from "../Imagenes/Alf.jpg";
import amigos from "../Imagenes/Amigos.jpg";
import teoriaBB from "../Imagenes/TeoriaBB.webp";
import elPrincipe from "../Imagenes/ElPrincipe.jpg";
import dosHombres from "../Imagenes/DosHombresyMedio.webp";
import malcolm from "../Imagenes/Malcolm.jpg";


function Comedia() {

  const productos = [
    { NOMBRE: "ALF", ESTUDIO: "WARNER", imagen: alf },
    { NOMBRE: "AMIGOS", ESTUDIO: "FOX", imagen: amigos },
    { NOMBRE: "LA TEORIA DEL BIG BANG", ESTUDIO: "", imagen: teoriaBB },
    { NOMBRE: "EL PRINCIPE DEL RAP", ESTUDIO: "", imagen: elPrincipe },
    { NOMBRE: "DOS HOMBRES Y MEDIO", ESTUDIO: "", imagen: dosHombres },
    { NOMBRE: "MALCOM EL DE EL MEDIO", ESTUDIO: "", imagen: malcolm }

  ];

  return (

    <div >
      <div className="posicion-fija-accion ">
        <div className="ir-al-menu">
          <Link to="/" className="link"  ><h2 className="">Ir al Menú</h2> </Link>
        </div>

        <h1 className="pel-Accion sticky-text">COMEDIAS QUE TENEMOS DISPONIBLES</h1>
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

export default Comedia; 
