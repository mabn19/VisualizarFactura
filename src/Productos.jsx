
function Productos({productos}) {


  return (
    <>
    {
      productos.map((producto)=>{
        return(<div>
          {producto.productName}
          {producto.productPrice}
        </div>)
      })
    }
    </>
  )
}

export default Productos
