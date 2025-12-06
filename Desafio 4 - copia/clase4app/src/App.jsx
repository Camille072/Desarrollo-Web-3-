import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './app.css';


function App() {
  const url = 'https://jsonplaceholder.typicode.com/users';
  const [data, setData] = useState([]);
  // const [count, setCount] = useState(0)

  const [loading, setloading] = useState(true);

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(res => {
        setData(res)
        setloading(false)
      })
  }, [])


  console.log(data);
  console.log(data[0]);


  return (
    <>
      {
        loading ? <h1>Cargando...</h1> : (
          <>
          <h1> {data[0].name} </h1>
          <h2>{data[0].username} </h2>
          <h2>{data[0].id} </h2>
          <h2>{data[0].email} </h2>
          <h2>{data[0].city} </h2>

          
          

          </>
        )
      }

    </>
  )
}



export default App
