import React from "react";
import matrix from "../Imagenes/Matrix.jpg";
import terminator from "../Imagenes/Terminator.avif"
import sinsajo from "../Imagenes/Sinsajo.jpg"
import vengadores from "../Imagenes/Vengadores.jpg"
import panteraNegra from "../Imagenes/panteraNegra.avif"
import interestelar from "../Imagenes/Interestelar.jpg"
import { Link } from "react-router-dom";
import "../Estilos/accion.css";


function Accion() {

  const productos = [
    { NOMBRE: "TERMINATOR ", ESTUDIO: "WARNER", imagen: terminator },
    { NOMBRE: "LOS JUEGOS DEL HAMBRE", ESTUDIO: "FOX", imagen: sinsajo },
    { NOMBRE: "VENGADORES", ESTUDIO: "WARNER", imagen: vengadores },
    { NOMBRE: "MATRIX", ESTUDIO: "WARNER", imagen: matrix },
    { NOMBRE: "PANTERA NEGRA", ESTUDIO: "FOX", imagen: panteraNegra },
    { NOMBRE: "INTERESTELLAR", ESTUDIO: "FOX", imagen: interestelar }
  ];

  return (

    <div >
      <div className="posicion-fija-accion ">
        <div className="ir-al-menu">
          <Link to="/" className="link"  ><h2 className="">Ir al Menú</h2> </Link>
        </div>

        <h1 className="pel-Accion sticky-text">PELICULAS DE ACCION QUE TENEMOS DISPONIBLES</h1>
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

export default Accion; 
