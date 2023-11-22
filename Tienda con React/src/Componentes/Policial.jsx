import React from "react";
import { Link } from "react-router-dom";
import chicagoFire from "../Imagenes/ChicagoFire.png";
import elMentalista from "../Imagenes/ElMentalista.jpg";
import lucifer from "../Imagenes/Lucifer.jpg";
import csi from "../Imagenes/Csi.webp";
import bones from "../Imagenes/Bones.jfif";
import uve from "../Imagenes/UnidaddeVictimasEspeciales.jpg";




function Policial() {

  const productos = [
    {NOMBRE: "CHICAGO FIRE", ESTUDIO: "WARNER", imagen: chicagoFire},
    {NOMBRE: "EL MENTALISTA", ESTUDIO: "WARNER", imagen: elMentalista},
    {NOMBRE: "LUCIFER", ESTUDIO: "WARNER", imagen: lucifer},
    {NOMBRE: "C.S.I", ESTUDIO: "WARNER", imagen: csi},
    {NOMBRE: "BONES", ESTUDIO: "WARNER", imagen: bones},
    {NOMBRE: "U.V.E", ESTUDIO: "WARNER", imagen: uve} 
  ];

  return (

    <div >
      <div className="posicion-fija-accion ">
        <div className="ir-al-menu">
          <Link to="/" className="link"  ><h2 className="">Ir al Menú</h2> </Link>
        </div>

        <h1 className="pel-Accion sticky-text">SERIES POLICIALES QUE TENEMOS DISPONIBLES</h1>
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

export default Policial; 
