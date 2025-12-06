import { useState } from 'react'
import './style.css'
import Parrafo from './Parrafo'
import Item from './Item'; 


function App() {
  //const [count, setCount] = useState(0)
  const mensaje = "Estamos Comunicados"

  return (
    <>
      <div id='cabezera'>
        <div className="titulo">
          <p>____________</p>
          <h1>TO-DO NOW</h1>
          <p>____________</p>
        </div>

        <div className="entrada">
          <input type="text" placeholder='Ingrese Su Tarea' />
          <button >AddTask</button>
        </div>
      </div>

      <hr />

      <div className="items">
        <Parrafo mensajeprop={mensaje} />

        <ul>

        </ul>
        <li> <Item></Item></li>
        <li> <Item></Item></li>
        <li> <Item></Item></li>
      </div>



    </>
  )
}

export default App


