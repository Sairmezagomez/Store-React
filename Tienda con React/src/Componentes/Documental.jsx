import React from "react";
import { Link } from "react-router-dom";
import documental1 from "../Imagenes/Documental1.jpg";
import documental2 from "../Imagenes/Documental2.jpg";
import documental3 from "../Imagenes/Documental3.jpg";
import documental4 from "../Imagenes/Documental4.jpg";
import documental5 from "../Imagenes/Documental5.jpg";
import documental6 from "../Imagenes/Documental6.jpg";


function Documental() {

  const productos = [
    { NOMBRE: "NOMADAS AL VIENTO ", ESTUDIO: "WARNER", imagen: documental1  },
    { NOMBRE: "TIERRA DE OSOS POLARES", ESTUDIO: "FOX", imagen:documental2  },
    { NOMBRE: "SI DIOS FUERA MUJER", ESTUDIO: "WARNER", imagen:documental3  },
    { NOMBRE: "SURICATAS", ESTUDIO: "WARNER", imagen: documental4 },
    { NOMBRE: "EL OSO", ESTUDIO: "FOR", imagen: documental5 },
    { NOMBRE: "CINE Y OLVIDO", ESTUDIO: "WARNER", imagen: documental6 }
  ];

  return (

    <div >
      <div className="posicion-fija-accion ">
        <div className="ir-al-menu">
          <Link to="/" className="link"  ><h2 className="">Ir al Menú</h2> </Link>
        </div>

        <h1 className="pel-Accion sticky-text">DOCUMENTALES QUE TENEMOS DISPONIBLES</h1>
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

export default Documental; 