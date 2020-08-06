<script>
  import SectionURL from "../componentes/SectionURL.svelte";
  import servicios from "../stores/servicios";
  import { onMount } from "svelte";
  import Form from "../componentes/Form.svelte";
  export let titulo;

  onMount(() => {console.log(titulo)});
  $: servicio = $servicios.find((item) => {
    return item.titulo === titulo;
  });
</script>

<style>
  span {
    display: block;
  }
  .c-contenido {
    padding: 40px 30px;
  }

  .presupuesto-estimado__item {
    position: relative;
    margin: 40px;
    font-size: 1.5em;
    font-weight: 700;
  }
  .presupuesto-estimado__item span {
    position: absolute;
    bottom: -10px;
    width: 100%;
    font-size: 0.5em;
  }
  .recordatorio {
    display: flex;
    align-items: center;
    border-top: 2px solid var(--color-primario);
    border-bottom: 2px solid var(--color-primario);
  }
  .recordatorio img {
    width: 100px;
  }
  .recordatorio__content {
    font-weight: 600;
  }
</style>

<SectionURL>
  <span slot="titulo">{servicio.titulo}</span>
  <span slot="subtitulo">Pide presupuesto para -{servicio.titulo}- !</span>
</SectionURL>
<div class="c-contenido k-grid">
  <section>
    <img src={servicio.thumbnail} alt="" />
    <h1>{servicio.titulo}</h1>
    <p>
      {@html servicio.content}
    </p>
  </section>
  <section>
    <h2 class="titulo">Presupuesto estimado</h2>
    <div class="presupuesto-estimado k-flex">
      <div class="presupuesto-estimado__item">
        <i class="fas fa-sort-amount-down-alt" />
        {servicio.precio_desde}€
        <span class="tx-ct">Desde</span>
      </div>
      <div class="presupuesto-estimado__item">
        <i class="fas fa-sort-amount-up" />
        {servicio.precio_hasta}€
        <span class="tx-ct">hasta</span>
      </div>
    </div>
    <div class="recordatorio">
      <img src="/assets/logo-web.png" alt="" />
      <p class="recordatorio__content">
        Dependerá del tipo de reforma que se deba realizar y de las dimensiones
        del aseo a trabajar.
      </p>
    </div>
  </section>
  <section>
    <Form />
  </section>
</div>
