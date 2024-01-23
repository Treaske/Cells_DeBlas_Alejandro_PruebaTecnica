import {html, LitElement} from 'lit';
import '../../../components/CardProduct.js'
import { landingHomeStyle } from './LandingHome.style.js';

/**
 * Muy bien!! nada que comentar, la logica la tienes bien separada y el encargado de gestionar Session storage es LandingHome 😊😊
 */
export class LandingHome extends  LitElement {

  static properties = {
    productos: { type: Array }
  };

  static styles = landingHomeStyle;

  constructor() {
    super();
    this.productos = [];
    this.cargarProductosDesdeSessionStorage();
  }

  render() {
    return html`
      <h1>Página HOME</h1>
      <div>
        ${this.productos ? this.productos.map(producto => this.renderProducto(producto)) : ''}
      </div>
    `;
  }

  renderProducto(producto) {
    return html`
      <card-product 
        .titulo="${producto.titulo}" 
        .descripcion="${producto.descripcion}" 
        .imagen="${producto.imagen}" 
        .precio="${producto.precio}"
        @eliminar-producto="${() => this.eliminarProducto(producto.titulo)}"
      ></card-product>
    `;
  }

  cargarProductosDesdeSessionStorage() {
    const productosGuardados = sessionStorage.getItem('productos');
    if (productosGuardados) {
      this.productos = JSON.parse(productosGuardados);
    }
  }

  eliminarProducto(titulo) {
    this.productos = this.productos.filter(producto => producto.titulo !== titulo);
    this.guardarProductosEnSessionStorage();
  }
  
}