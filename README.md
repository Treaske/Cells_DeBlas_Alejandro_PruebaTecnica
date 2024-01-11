# Cells_DeBlas_Alejandro_PruebaTecnica
## Explicacion Proyecto
Proyecto en javascript que se vasa en una web con dos páginas, una que añada productos y la principal que muestre todos los añadidos.

## Estructura del Proyecto
El proyecto tendrá 3 partes diferenciadas, las cuales son:
- Componentes: CardProduct y Menu
- Páginas: CreateProduct y LandingMenu
- Router
Por lo que las explicaremos de forma separada.

### Componentes
- CardProduct
Este js cuenta con la base estructural de los productos a añadir, la carta de producto, cuta estrucutra es la siguiente
```html
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
```
Donde a parte de los datos del productos, tambien cuenta con un botón para eliminarlo, de forma separa del resto de productos, el cual explicaremos depués
- Menu
La clase menú solo contará con dos botones para moverse entre las páginas
```html
<div id="menu">
    <button @click="${() => this.navigateTo('/home')}">Go to Home</button>
    <button @click="${() => this.navigateTo('/create')}">Go to Create</button>
</div>
```
### Router
Esta carpeta cuenta con un js que guarda las distintas rutas del proyecto y un routerMixin, que se encarga de realizar esa navegación
```html
async firstUpdated(changeProperties) {
        super.firstUpdated(changeProperties);
        const router = new Router(this.shadowRoot.querySelector('#outlet'));

        await router.setRoutes(this.routes);
      }
```
este método cambia el contenido del componente shadowRoot de la pagina principal, haciento que se pueda cambiar de páginas mediante el menú.

### Paginas
Esta carpeta contiene las dos páginas del proyecto, una que crea los productos y otra que muestra el menú de los mismos.
CreateProduct
Esta clase simplemente recibe los valores desde input otorgados por el usuario, y los almecena mediante las siguientes líneas de código.
```html
this.productos = [...this.productos, nuevoProducto];
    this.guardarProductosEnSessionStorage();
    this.dispatchEvent(new CustomEvent('nuevo-producto', { detail: { producto: nuevoProducto }, bubbles: true, composed: true }));
    event.target.reset();
```
Como podemos ver los productos se guardan en un array, en el que se guardan todos los obtenidos más el nuevo producto, después lo manda a la Sessionstorage, que almacena para que se pueda ver en la página de menú
LandingMenu
Esta pagina simplemente carga un map de productos, utilizando el componente Card mostrado antes, que renderiza los productos guardados en el array almacenado anteriormente

Por último un js LandigMarket que maneja todas nuestras clases, con la siguiente estructura
```html
<section>
        <header>
        <menu-component @navigate="${(e) => this.navigateTo(e.detail.path)}"></menu-component>
        </header>
        <main id="outlet"></main>
        <footer>
        
        </footer>
</section>
```
Aquí podemos ver como se llama a la clase menú y como el main tiene el id outlet, que es el que llama el router para mostrar las distintas páginas





