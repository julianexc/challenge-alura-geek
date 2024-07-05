const productoLista =()=>{
    return fetch("http://localhost:3000/productos")
    .then((res)=> res.json())
    .catch((err) => console.log(err));

 
}

  const crearProducto=(nombre,precio,imagen)=>{
    return fetch("http://localhost:3000/productos",{
        method:"POST",
        headers:{
            "Content-Type":"application/json",
        },
        body:JSON.stringify({
            nombre,
            precio,
            imagen,
        })
    

    }).then((res)=> res.json())
       .catch((err)=> console.log(err));
  }

  const borrarProducto=(id) => {
    return fetch(`http://localhost:3000/productos/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
 
    

   export const servicioProductos ={
       productoLista,
       crearProducto,
       borrarProducto,
    }