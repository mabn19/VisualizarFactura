
function Productos({productos}) {


  return (
    <>
    {
      productos.map((producto)=>{
        return(<div>
          <table>
            <tr>
            <td>
              {producto.productName}
              </td>
              &emsp;
              <td>
              {producto.productPrice}
              </td>
            </tr>
          </table>
          

          
        </div>)
      })
    }
    </>
  )
}

export default Productos
