<script>
  export let servicio;
  const { id, titulo, imagen } = servicio;
  import { link } from "svelte-routing";
</script>

<style>
  .card {
    position: relative;
    overflow: hidden;
    transition: all 0.6s ease;
  }

  .card img {
    display: block;
    width: 100%;
    height: 300px;
    object-fit: cover;
    border-radius: 5px;
  }

  .card .text-card {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    color: white;
    position: absolute;
    top: 0;
    font-weight: 700;
    background: rgba(86, 86, 86, 0.32);
    border-radius: 5px;
    transition: all 0.6s ease;
  }
  .card:hover {
    transform: translateY(-1.2rem);
  }

  .card:hover .text-card {
    background: rgba(190, 165, 98, 0.5);
  }

  .card:hover p {
    transform: translateY(-2.5rem);
  }

  .text-card p {
    font-size: 24px;
    width: 150px;
    text-align: center;
    transition: all 0.6s ease;
  }
</style>
<div class="card" data={titulo}>
  <div class="imagen">
    <img src={imagen} alt="" />
  </div>
  <a href={`/servicios/${titulo.replace(/ /g,"-")}`} class="text-card" use:link>
    <p>{titulo}</p>
  </a>
</div>
