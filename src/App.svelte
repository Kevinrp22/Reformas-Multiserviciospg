<script>
  import { Router, Link, Route } from "svelte-routing";
  import globalStore from "./stores/globalStore";
  //(RUTAS)
  import Inicio from "./paginas/Inicio.svelte";
  import PlantillaServicios from "./paginas/PlantillaServicio.svelte";
  import Servicios from "./paginas/Servicios.svelte";
  import Galeria from "./paginas/Galeria.svelte";
  import About from "./paginas/About.svelte";
  import Contacto from "./paginas/Contacto.svelte";
  //Componentes
  import Navbar from "./componentes/Navbar/Navbar.svelte";
  import TopHeader from "./componentes/Navbar/TopHeader.svelte";
  import Sidebar from "./componentes/Navbar/Sidebar.svelte";
  export let url = "";
</script>

<Router {url}>
  {#if $globalStore.sidebar}
    <Sidebar />
  {/if}
  <TopHeader />
  <Navbar />

  <Route path="/contacto" component={Contacto} />
  <Route path="/galeria" component={Galeria} />
  <Route path="/servicios" component={Servicios} />
  <Route path="/servicios/:titulo" component={PlantillaServicios} />
  <Route path="/about" component={About} />
  <Route path="/" component={Inicio} />

</Router>
