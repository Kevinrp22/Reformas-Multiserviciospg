import {
  writable,
  derived
} from "svelte/store"
import localImagenes from "../localImagenes"
import getImagenes from "../strapi/getImagenes"
import URL from "../strapi/URL"
const galeria = writable([], () => {
  setImagenes()
  return () => {}
});


async function setImagenes() {
  let imagenes = await getImagenes()
  if (imagenes) {
    imagenes = flattenProducts(imagenes)
    galeria.set(imagenes)
    console.log(imagenes)
  }
}

function flattenProducts(data) {
  return data.map(item => {
    /* let image = item.image.URL; */
    let thumbnail = URL + item.thumbnail.url
    let get_full_imagenes = item.full_imagenes
    let full_imagenes = get_full_imagenes.map((item) => {
      return URL + item.url
    })
    return {
      ...item,
      thumbnail,
      full_imagenes
    };
  });
}

export function iterarItem(id) {
  let item = localImagenes.find(item => {
    return item.id === id
  })
  setTitulo = item.id
  setDescripcion = item.descripcion
  setThumbnail = item.thumbnail
  setFull_imagenes = item.full_imagenes
  setTags = item.tags

  return {
    setTitulo,
    setDescripcion,
    setThumbnail,
    setFull_imagenes,
    setTags
  }

}

export const obraDestacada = derived(galeria, ($galeria) => {
  return $galeria.filter(item => item.destacado === true)
})



export default galeria