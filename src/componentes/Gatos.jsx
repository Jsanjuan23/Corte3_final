import { firebase } from '../firebase';
import Actualizar from "./Actualizar";

export default function Gatos({lista}) {

  const eliminar = async (id) => {
    const db = firebase.firestore(); 
    await db.collection("cats").doc(id).delete();
    window.location.reload(false);
  }
  
  return (
    <div className="container">    
      {
        lista.map((item) => (
          <div className="itemBox">
            <div>
              <img src={item.src} alt={item.id} className='itemImg'/>
              <div className='textContainer'>
                <p className='textItems'>Age: {item.age}</p>
                <p className='textItems'>Name: {item.name}</p>
                <p className='textItems'>Color: {item.color}</p>
              </div>
            </div>
            <div>
              <Actualizar item={item}/>
              <button onClick={() => eliminar(item.id)}>Eliminar</button>
            </div>
          </div>
        ))
      }
    </div>
  );
}