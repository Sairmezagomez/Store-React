import React from "react";
import { Link } from "react-router-dom";
import  elConjuro from "../Imagenes/ElConjuro.jpg";
import elExorcista from "../Imagenes/elExorcista.jpg";
import elGrito from "../Imagenes/ElGrito.jpg";
import insidius from "../Imagenes/Insidius.jpg";
import ruegaPorNosotros from "../Imagenes/RuegaPorNosotros.jpeg";
import anabell from "../Imagenes/Anabell.jpeg";


function Terror() {

  const productos = [
    { NOMBRE: "EL CONJURO", ESTUDIO: "WARNER", imagen: elConjuro },
    { NOMBRE: "EL EXORCISTA", ESTUDIO: "FOX", imagen: elExorcista },
    { NOMBRE: "EL GRITO", ESTUDIO: "", imagen: elGrito },
    { NOMBRE: "INSIDIUS", ESTUDIO: "", imagen: insidius },
    { NOMBRE: "RUEGA POR NOSOTROS", ESTUDIO: "", imagen: ruegaPorNosotros },
    { NOMBRE: "ANABELL", ESTUDIO: "", imagen: anabell }
   
  ];

  return (

    <div >
      <div className="posicion-fija-accion ">
        <div className="ir-al-menu">
          <Link to="/" className="link"  ><h2 className="">Ir al Menú</h2> </Link>
        </div>

        <h1 className="pel-Accion sticky-text">PELICULAS DE TERROR QUE TENEMOS DISPONIBLES</h1>
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

export default Terror; 
