import { servicioProductos } from "./conexion-API.js";

const productoContenido = document.querySelector("[data-producto]");

const form = document.querySelector("[dato-formulario]");

function crearProducto(nombre, precio, imagen, id) {
  const producto = document.createElement("li");
  producto.classList.add("productos");

  producto.innerHTML = ` 
      
        <img src="${imagen}" alt="${nombre}" class="img-producto">
        <p class="text-producto">${nombre}</p>
        <p class="precio-producto">$ ${precio} USD</p>
        <img class="delete_button" src="imagenes/icono/delete_icon.svg" alt="eliminar" borar-producto=${id}>
        
  `;
  const deleteButton = producto.querySelector(".delete_button");
  deleteButton.addEventListener("click", () => borrarProducto(id, producto));

  productoContenido.appendChild(producto);
  return producto;
}

const borrarProducto = async (id, productoElemento) => {
  try {
    await servicioProductos.borrarProducto(id);
    productoContenido.removeChild(productoElemento);
  } catch (error) {
    console.log(error);
  }

}

const render = async () => {
  try {
    const listaProducto = await servicioProductos.productoLista();
    listaProducto.forEach(producto => {
      crearProducto(
        producto.nombre,
        producto.precio,
        producto.imagen,
        producto.id
      );
    });
  } catch (error) {
    console.log(error);
  }
};

form.addEventListener("submit", (evento) => {
  evento.preventDefault();

  const nombre = document.querySelector("[dato-nombre]").value;
  const precio = document.querySelector("[dato-precio").value;
  const imagen = document.querySelector("[dato-imagen]").value;
  

   servicioProductos.crearProducto(nombre,precio,imagen)
   .then((res)=> console.log(res))
   .catch((err)=>console.log(err))
});



render();
