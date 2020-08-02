import {
  writable
} from "svelte/store"
import servicios from "../localServicios"
const store = writable([...servicios]);

export default store