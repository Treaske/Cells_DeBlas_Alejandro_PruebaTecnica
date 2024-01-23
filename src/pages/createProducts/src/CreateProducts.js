import { html, LitElement, css } from "lit";
import { createProductsStyle } from './CreateProducts.style.js';

export class CreateProducts extends LitElement {

  static properties = {
    productos: { type: Array }
  };

  static styles = createProductsStyle;

  constructor() {
    super();
    this.productos = [];
    this.cargarProductosDesdeSessionStorage();
  }

  render() {
    return html`
      <h1>Página Create</h1>
      <form @submit="${this.agregarProducto}">
        <label for="titulo">Título:</label>
        <input type="text" id="titulo" name="titulo" required>
        <label for="descripcion">Descripción:</label>
        <input type="text" id="descripcion" name="descripcion" required>
        <label for="imagen">URL de la Imagen:</label>
        <input type="text" id="imagen" name="imagen" required>
        <label for="precio">Precio:</label>
        <input type="number" id="precio" name="precio" step="0.01" required>
        <button type="submit">Agregar Producto</button>
      </form>
    `;
  }

  /**
   * 
   * Muy bien!! utilizamos el evento submit, como mejora, puedes utilizar  new FormData(<formulario>)
   * https://developer.mozilla.org/en-US/docs/Web/API/FormData/FormData
   */
  agregarProducto(event) {
    event.preventDefault();

    const dataForm = new FormData(event.currentTarget);

    const nuevoProducto = {
      titulo: dataForm.get('titulo'),
      descripcion: dataForm.get('descripcion'),
      imagen: dataForm.get('imagen'),
      precio: parseFloat(dataForm.get('precio')),
    };

    this.productos = [...this.productos, nuevoProducto];
    this.guardarProductosEnSessionStorage();
    this.dispatchEvent(new CustomEvent('nuevo-producto', { detail: { producto: nuevoProducto }, bubbles: true, composed: true }));
    event.target.reset();
  }

  cargarProductosDesdeSessionStorage() {
    const productosGuardados = sessionStorage.getItem('productos');
    if (productosGuardados) {
      this.productos = JSON.parse(productosGuardados);
    }
  }


  guardarProductosEnSessionStorage() {
    sessionStorage.setItem('productos', JSON.stringify(this.productos));
  }


}
