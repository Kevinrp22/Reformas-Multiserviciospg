import {
  writable
} from "svelte/store"
import URL from "../strapi/URL"
import getServicios from "../strapi/getServicios"
const servicios = writable([], () => {
  setServicios()
  return () => {}
});
async function setServicios() {
  let _servicios = await getServicios()
  if (_servicios) {
    _servicios = flattenProducts(_servicios)
    servicios.set(_servicios)
  }
}

function flattenProducts(data) {
  return data.map(item => {
    /* let image = item.image.URL; */
    let thumbnail = URL + item.thumbnail.url
    console.log(thumbnail)
    /* let get_full_imagenes = item.full_imagenes */
    /* let full_imagenes = get_full_imagenes.map((item) => {
      return URL + item.url
    }) */
    return {
      ...item,
      thumbnail,
      /* full_imagenes */
    };
  });
}
export default servicios