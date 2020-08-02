<script>
  import galeria from "../../stores/galeria";
  import globalStore from "../../stores/globalStore";

  import ItemGaleria from "./ItemGaleria.svelte";
  import ModalGaleria from "./ModalGaleria.svelte";
  import { setContext } from "svelte";
  let setId;
  let setTitulo;
  let setDescripcion;
  let setThumbnail;
  let setFull_imagenes;
  let setTags;

  function iterarItem(id) {
    let item = $galeria.find((item) => {
      return item.id === id;
    });
    setId = item.id;
    setTitulo = item.titulo;
    setDescripcion = item.descripcion;
    setThumbnail = item.thumbnail;
    setFull_imagenes = item.full_imagenes;
    setTags = item.tags;
  }
  setContext("iterarItem", iterarItem);
</script>

<style>
  .contenedor-galeria {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 10px;
  }
</style>

<div class="contenedor-galeria k-grid">
  {#each $galeria as item_galeria (item_galeria.id)}
    <ItemGaleria {item_galeria} {iterarItem} />
  {/each}
  {#if $globalStore.modal_galeria}
    <ModalGaleria
      {setId}
      {setTitulo}
      {setDescripcion}
      {setThumbnail}
      {setFull_imagenes}
      {setTags} />
  {/if}
</div>
