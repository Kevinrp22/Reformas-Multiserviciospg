<script>
  import { link } from "svelte-routing";
</script>

<style>
  .top-header {
    background-color: var(--color-primario);
    padding: 5px 0px;
  }

  .top-header .k-grid {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .top-header__widgets__tlf a {
    display: flex;
    align-items: center;
    color: #cacaca;
    font-size: 15px;
    padding: 5px 10px;
    font-weight: 600;
    background-color: #5656562b;
    border-radius: 15px;
    transition: all 0.5s;
  }

  .top-header__widgets__tlf a:hover {
    background-color: rgb(60, 60, 60);
  }

  @media (max-width: 370px) {
    .top-header__widgets__tlf a {
      font-size: 0.7rem;
    }
  }

  .top-header__rrss,
  .top-header__rrss a,
  .top-header__rrss--habitissimo {
    display: flex;
    align-items: center;
    font-size: 20px;
    color: rgb(60, 60, 60) !important;
    transition: all 0.4s;
  }

  .top-header__rrss a:hover {
    color: whitesmoke !important;
  }

  .top-header__rrss--habitissimo:hover {
    background-color: whitesmoke;
  }

  .top-header__rrss--habitissimo {
    background-color: rgb(60, 60, 60);
    width: 100px;
    border-radius: 5px;
    padding: 5px;
    margin: 0px 5px;
  }

  .top-header__widgets {
    display: flex;
    align-items: center;
  }

  .top-header__widgets span {
  }

  .top-header__widgets__btn {
    background-color: white;
    color: rgb(60, 60, 60);
    font-weight: 600;
    font-size: 13px;
    border-radius: 3px;
    padding: 2px 10px;
    cursor: pointer;
  }
</style>

<header>

  <div class="top-header">
    <div class="k-grid">
      <div class="top-header__widgets">
        <span class="top-header__widgets__tlf">
          <a href="tel:611235757">
            <i class="fas fa-phone-square-alt" style=" margin: 0 10px; " />
            <span style=" padding-right: 5px; ">611 235 757</span>
          </a>
        </span>
        <!-- <span><button type="button" class="top-header__widgets__btn">Pedir Presupuesto</button></span> -->
      </div>
      <div class="top-header__rrss">
        <a
          href="https://www.facebook.com/ReformasMultiservici0s/"
          target="_blank">
          <i class="fab fa-facebook" />
        </a>
        <a
          href="https://empresas.habitissimo.es/pro/reformas-multiservicios-5ccff453af616#1"
          target="_blank">
          <img
            src="assets/habitissimo.png"
            alt=""
            class="top-header__rrss--habitissimo" />
        </a>
      </div>
    </div>

  </div>

  <nav>
    <a href="/" use:link>Inicio</a>
    <a href="/servicios" use:link>servicios</a>
    <a href="/galeria" use:link>Galeria</a>
    <a href="/about" use:link>Quienes somos</a>
    <a href="/contacto" use:link>Contacto</a>
  </nav>
</header>
