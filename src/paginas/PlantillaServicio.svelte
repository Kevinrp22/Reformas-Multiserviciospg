<script>
  import SectionURL from "../componentes/SectionURL.svelte";
  import servicios from "../stores/servicios";
  export let titulo;
  $: servicio = $servicios.find((item) => {
    return item.titulo.replace(/ /g,"-") === titulo;
  });
</script>

<style>
  .plantilla-servicio {
    background-color: rgb(235, 235, 235);
  }
  .c-contenido {
    padding: 40px 30px;
  }
</style>

<section class="plantilla-servicio">
  <SectionURL>
    <span slot="titulo">{servicio.titulo}</span>
    <span slot="subtitulo">Pide presupuesto para -{servicio.titulo}- !</span>
  </SectionURL>
  <div class="c-contenido k-grid">
    <img src={servicio.imagen} alt="" />
    <h1>{servicio.titulo}</h1>
    <p>{servicio.descripcion}</p>
  </div>
</section>
