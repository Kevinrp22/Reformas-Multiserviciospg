<script>
  import galeria, { updateFilterImage, obraDestacada } from "../stores/galeria";
  import globalStore from "../stores/globalStore"
  import ListaGaleria from "../componentes/Galeria/ListaGaleria.svelte";
  import SectionURL from "../componentes/SectionURL.svelte";
  import { onMount } from "svelte";
  $: pruebaa = $galeria.filter((item) => item.id === true);
  onMount(() => {
    let category = document.querySelectorAll(".categoria__item");
    category.forEach((element) =>
    element.addEventListener("click", function () {
      let elementoClick = this.getAttribute("category"); // tambien se puede hacer así.attributes["category"].value
      let elementos = category.forEach((item) =>
      item.classList.remove("category-active")
      );
      this.classList.add("category-active");
      globalStore.toggleItem("data_filter", elementoClick)
      })
    );
  });
</script>

<style>
  .categorias {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    background-color: var(--color-primario);
    border-radius: 10px;
  }
  .categoria__item {
    cursor: pointer;
    font-weight: 600;
    text-transform: uppercase;
    margin: 5px;
    border-radius: 5px;
    padding: 3px 10px;
  }
  .categoria__item:not(.category-active):hover {
    background-color: rgba(207, 207, 207, 0.459);
  }
  .category-active {
    background-color: white;
  }
</style>

<SectionURL>
  <span slot="titulo">Galeria</span>
  <span slot="subtitulo">Galeria</span>
</SectionURL>

{$globalStore.data_filter}
<div class="k-grid">
  <div class="categorias k-margin">
    <div class="categoria__item category-active" category="todas">Todas</div>
    <div class="categoria__item" category="baños">Baños</div>
    <div class="categoria__item" category="cocinas">Cocinas</div>
    <div class="categoria__item" category="viviendas">Viviendas</div>
    <div class="categoria__item" category="terrazas">Terrazas</div>
    <div class="categoria__item" category="fachadas">Fachadas</div>
    <div class="categoria__item" category="otros">Otros</div>
  </div>
</div>
<ListaGaleria />
