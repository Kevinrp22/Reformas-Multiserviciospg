<script>
  import { Router, Link, Route } from "svelte-routing";
  //(RUTAS)
  import Inicio from "./paginas/Inicio.svelte";
  import Servicios from "./paginas/Servicios.svelte";
  import Galeria from "./paginas/Galeria.svelte";
  import About from "./paginas/About.svelte";
  import Contacto from "./paginas/Contacto.svelte";
  //Componentes
import Navbar from "./componentes/Navbar/Navbar.svelte"
  export let url = "";
</script>

<Router {url}>

<Navbar/>

    <Route path="inicio" component={Inicio} />
    <Route path="contacto" component={Contacto} />
    <Route path="galeria" component={Galeria} />
    <Route path="servicios" component={Servicios} />
    <Route path="about" component={About} />
    <Route path="/" />

</Router>
