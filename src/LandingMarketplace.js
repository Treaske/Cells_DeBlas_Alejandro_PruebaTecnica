import { LitElement, html } from 'lit';
import { RouterMixin } from './router/RouterMixin';
import { routes } from './router/routes.js';
import './components/Menu.js';

export class LandingMarketplace extends RouterMixin(LitElement) {

  static properties = {
    routes: { type: Array },
    path: { type: String},

  }

  constructor() {
    super();
    this.routes = routes;

    this.navigation('/create')
  }

  /**
   * 
   * Muy bien!! el encargado de navegar ya que tiene el contexto del router es LandingMarketPlace 😊😊
   */
  render() {
    return html`
      <section>
        <header>
        <menu-component @navigate="${(e) => this.navigateTo(e.detail.path)}"></menu-component>
        </header>
        <main id="outlet"></main>
        <footer>
        
        </footer>
      </section>  
    `;
  }

   // Método para navegar a la ruta especificada
   navigateTo(path) {
    this.navigation(path);
  }

}

window.customElements.define('landing-market-place', LandingMarketplace);
