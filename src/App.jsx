import { useState, useEffect } from 'react';
import './App.css'
import Productos from './Productos';
function App() {
  const [facturas, setFacturas] = useState([])
  useEffect(() => {
    fetch('http://localhost:3000/invoices',{mode:'cors'})
      .then((response) => {
        console.log(response.json)
        return response.json()
      })
      .then((facturas) => {
        console.log(facturas)
        setFacturas(facturas.invoices)
      })
  }, [])

  return (
    <>
    {
      facturas.map((factura)=>{
        return(<div>
          <h3>
            Nombre del cliente: {factura.clientName}
          </h3>
          <h3>
            Id de factura: {factura.id}
          </h3>
          <h3>
            Fecha: {factura.createdAt.slice(0,10)}
          </h3>
          <Productos productos={factura.product}>

          </Productos>
        </div>)
      })
    }
    </>
  )
}

export default App
