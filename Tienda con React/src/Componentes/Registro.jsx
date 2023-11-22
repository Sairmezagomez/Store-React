import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import "../Estilos/registro.css";


const Registro = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm();

  const clickboton = handleSubmit((data) => {
    console.log(data);

    window.alert('Datos registrados exitosamente');
    reset();

  }); 


  //Barra de navegacion
  return (
    <div className="login">
      <nav class="navbar navbar-expand-md ">
        <div class="container-fluid">

          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav">

            <li class="nav-item">
                <Link to="/" class="nav-link active" aria-current="page" ><strong className="barra-navagacion">Ir al HOME</strong></Link>
              </li>


              <li class="nav-item">
                <Link to="/canales" class="nav-link active" aria-current="page" > <strong className="barra-navagacion"> CANALES</strong></Link>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                <strong className="barra-navagacion">SERIES</strong>
                </a>
                <ul class="dropdown-menu">
                  <li><Link to="/anime" class="dropdown-item">ANIME</Link></li>
                  <li><Link to="/policial" class="dropdown-item" >POLICIAL</Link></li>
                  <li><Link to="/comedia" class="dropdown-item" >COMEDIA</Link></li>
                </ul>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                <strong className="barra-navagacion">PELICULAS</strong>
                </a>
                <ul class="dropdown-menu">
                  <li><Link to="/accion" class="dropdown-item">ACCION</Link></li>
                  <li><Link to="/terror" class="dropdown-item" >TERROR</Link></li>
                  <li><Link to="/documental" class="dropdown-item" >DOCUMENTAL</Link></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>


    <div className="texto-formulario">

      <h2 >FORMULARIO DE REGISTRO</h2>

      <form onSubmit={clickboton}>
       
          <div className="container-registro">
           
            <div className="nombre">
              <label htmlFor="nombre">INGRESE SU NOMBRE</label>
              <input
                type="text"
                name="nombre"
                id="nombre"
                placeholder="Nombre"
                {...register("nombre", {
                  required: "Este campo no puede estar vacío",
                  minLength: {
                    value: 3,
                    message: "El nombre debe tener al menos 3 caracteres",
                  },
                  maxLength: {
                    value: 50,
                    message: "El nombre debe tener menos de 50 caracteres",
                  },
                })}
              />
              {errors.nombre && <span>{errors.nombre.message}</span>}

            </div>

            <div className="documento">
              <label htmlFor="documento">INGRESE SU NUMERO DE DOCUMENTO</label>
              <input
                type="text"
                name="documento"
                id="documento"
                placeholder="Documento"
                {...register("documento", {
                  required: "Este campo no puede estar vacío",

                  message: "Este campo no puede estar vacío",
                  pattern: {
                    value: /^[0-9]+$/,
                    message: "Este campo debe contener solo números"
                  },
                })}
              />
              {errors.documento && <span>{errors.documento.message}</span>}
            </div>

            <div className="correo">
              <label htmlFor="correo">INGRESE SU CORREO ELECTRONICO</label>
              <input
                type="text"
                name="correo"
                id="correo"
                placeholder="Correo"
                {...register("correo", {
                  required: "Este campo no puede estar vacío",
                  message: "Este campo no puede estar vacío",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Ingrese un correo electrónico válido",
                  },
                })}
              />
              {errors.correo && <span>{errors.correo.message}</span>}
            </div>

            <div className="password">
              <label htmlFor="password">INGRESE SU CONTRASEÑA</label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Contraseña"
                {...register("password", {
                  required: "Este campo no puede estar vacío",
                  message: "Este campo no puede estar vacío",

                  pattern: {
                    value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{5,}$/,
                    message: "La contraseña debe contener al menos una letra y un número",
                  },
                })}
              />
              {errors.password && <span>{errors.password.message}</span>}
            </div>
           

            <button className="boton_registrarme" type="submit">
              Registrarme
            </button>
          </div>
       
      </form>
    </div>

    </div>
  );
};

export default Registro;
