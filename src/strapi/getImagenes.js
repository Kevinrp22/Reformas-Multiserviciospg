import url from "./URL"
export default async () => {
  const response = await fetch(`${url}/imagenes`)
    .catch(error => console.log(error))
  const imagenes = await response.json()
  if (imagenes.error) {
    return null
  }
  return imagenes
}