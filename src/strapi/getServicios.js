import URL from "./URL"
export default async () => {
  const response = await fetch(`${URL}/servicios`)
    .catch(error => console.log(error))
  const servicios = await response.json()
  if (servicios.error) {
    return null
  }
  return servicios
}