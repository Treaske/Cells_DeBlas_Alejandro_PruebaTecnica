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

  agregarProducto(event) {
    event.preventDefault();

    const nuevoProducto = {
      titulo: event.target.titulo.value,
      descripcion: event.target.descripcion.value,
      imagen: event.target.imagen.value,
      precio: parseFloat(event.target.precio.value)
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
