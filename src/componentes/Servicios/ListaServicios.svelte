<script>
  import servicios from "../../stores/servicios";
  import ItemServicio from "./ItemServicio.svelte";
</script>
<style>
  .c-cards {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 20px;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
  width: 900px;
  padding-top: 80px;
}
@media screen and (min-width:500px){
  .c-cards{
    grid-template-columns: repeat(2, 1fr);
  }
}
@media screen and (min-width:768px){
  .c-cards{
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>
<div class="c-cards" id="c-cards">
  {#each $servicios as servicio}
    <ItemServicio {servicio}/>
  {/each}
</div>
