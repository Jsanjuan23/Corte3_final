import { useEffect, useState } from 'react'
import {GetGato} from './hooks/GetGato'
import Form from '../Form'
import Gatos from './Gatos'
import { firebase } from '../firebase'



 const Contenido = () => {
  
  const [lista, setLista] = useState([])

  const { data,cargando } = Gatos('https://api.thecatapi.com/v1/images/search')

  useEffect(() => {
    const db = firebase.firestore(); 

    db.collection("cats").get()
    .then(data =>{
      const array = data.docs.map((item) => ({
        id: item.id,
        ...item.data(),
      }));
      setLista(array)
    })

  }, [])
  
  return (
    <>
      <div class="animate__animated animate__bounce animate__slower">

        <h1>Proyecto React</h1>
        <p align ="center">Jesus Sanjuan</p>

       
      </div>
      { cargando && <div className='loading'></div> }

      <div class="animate__animated animate__bounce animate__slower">

        { data && <img className='mainImg' src={data[0].url} alt="cat pic" />}
        { data && <Form imageUrl={data[0].url} /> }
      </div>
      <div class="animate__animated animate__bounce animate__slower">
        <h2 className='text'>Gatos agregados a la lista</h2>
        <Gatos lista={lista} />
      </div>
    </>
  )
}
export default Contenido