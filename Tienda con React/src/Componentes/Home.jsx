import React from "react";
import { Link } from "react-router-dom";
import "../Estilos/home.css";





const Home = () => {
  return (
    <div className="contenedorGeneral">

      <div className="navegacionTexto">

      <nav class="navbar navbar-expand-md ">
        <div class="container-fluid">

          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavDropdown">

            <ul class="navbar-nav">

              <li class="nav-item">
                <Link to="/canales" class="nav-link active" aria-current="page" >CANALES</Link>
              </li>

              

              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  SERIES
                </a>

                <ul class="dropdown-menu">
                  <li><Link to="/anime" class="dropdown-item">ANIME</Link></li>
                  <li><Link to="/policial" class="dropdown-item" >POLICIAL</Link></li>
                  <li><Link to="/comedia" class="dropdown-item" >COMEDIA</Link></li>
                </ul>

              </li>

              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  PELICULAS
                </a>

                <ul class="dropdown-menu">
                  <li><Link to="/accion" class="dropdown-item">ACCION</Link></li>
                  <li><Link to="/terror" class="dropdown-item" >TERROR</Link></li>
                  <li><Link to="/documental" class="dropdown-item" >DOCUMENTAL</Link></li>
                </ul>

              </li>

              <li class="nav-item">
                <Link to="/login" class="nav-link active" aria-current="page" >REGISTRO</Link>
              </li>

            </ul>
          </div>
        </div>
      </nav>
      <h2 className="textoHome">VISITE NUESTRO CONTENIDO DANDO CLICK EN PELICULAS O SERIES</h2>
      </div>

    </div>
  )
}

export default Home;