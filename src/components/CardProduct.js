import { LitElement, html, css } from "lit-element";

export class CardProduct extends LitElement {

    static properties = {
        titulo: { type: String },
        descripcion: { type: String },
        imagen: { type: String },
        precio: { type: Number }
    }

    static styles = css`

        article {
            border: 1px solid var(--primary-color);
            padding: 10px;
            margin: 10px;
        }

        img {
            max-width: 100%;
            height: auto;
        }

        button {
            cursor: pointer;
            background-color: var(--accent-color);
            color: var(--text-color);
            border: none;
            padding: 5px 10px;
            border-radius: 3px;
        }

        button:hover {
            background-color: var(--secondary-color);
        }
    `;

    constructor() {
        super();
        this.titulo = '';
        this.descripcion = '';
        this.imagen = '';
        this.precio = 0;
    }

    render() {
        return html`
            <article>
                <header>
                    <h1>${this.titulo}</h1>
                </header>
                <main>
                    <p>${this.descripcion}</p>
                    <img src="${this.imagen}" alt="${this.titulo}">
                    <p>Precio: $${this.precio}</p>
                </main>
                <footer>
                    <button @click="${this.eliminarProducto}">Eliminar</button>
                </footer>
            </article>
         `;
    }

    eliminarProducto() {
        this.dispatchEvent(new CustomEvent('eliminar-producto', { detail: { titulo: this.titulo }, bubbles: true, composed: true }));
    }

}

window.customElements.define('card-product', CardProduct);
