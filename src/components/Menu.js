import {html, LitElement, css } from 'lit';

/**
 * Muy bien!! enviamos un evento para navegar 
 */
export class MenuComponent extends LitElement {
  static styles = css`
    #menu {
        display: flex;
        gap: 10px;
    }

    button {
        cursor: pointer;
        background-color: var(--primary-color);
        color: var(--text-color);
        border: none;
        padding: 10px;
        border-radius: 5px;
    }

    button:hover {
        background-color: var(--accent-color);
    }
  `;

  render() {
    return html`
      <div id="menu">
        <button @click="${() => this.navigateTo('/home')}">Go to Home</button>
        <button @click="${() => this.navigateTo('/create')}">Go to Create</button>
      </div>
    `;
  }

  navigateTo(path) {
    this.dispatchEvent(new CustomEvent('navigate', { detail: { path }, bubbles: true, composed: true }));
  }
}

window.customElements.define('menu-component', MenuComponent);
