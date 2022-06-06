import React from 'react'

const Formu = () => {
  const [valor_busqueda,setValor_busqueda] = React.useState([])
  const [usuario,setUsuario] = React.useState('')
  const [contraseña,setContraseña] = React.useState('')
  const enviar = (e) => {
   alert("Error")
  }
  return (
    <form >
    <br />
    <br />  
    <div  align="center">
    <p id="texto">Esta aplicación consume una api de Gatos, y hará la busqueda con el numero que ingrese el usuario, y la información de los datos extraidos se hará el almacenamiento de algunos datos mas la información que ingrese el usuario. </p>
    </div>
    <br />

    <div class="form-row">

    
    <div  class="form-group col-md-4">
         <p>Ingrese un nombre de usuario</p>
         <input type="text" class="form-control" value={usuario} onChange={(e)=> setUsuario(e.target.value)} />
    </div>
    
    <div  class="form-group col-md-4">
         <p>Ingrese una contraseña</p>
         <input type="password"   class="form-control" value={contraseña} onChange={(e)=> setContraseña(e.target.value)} /> 
    </div>
    
    <div  class="form-group col-md-4">
       <p>Ingrese un numero y se le establerá una imagen</p>
       <input type="text" class="form-control" value={valor_busqueda} onChange={(e)=> setValor_busqueda(e.target.value)}/>
    </div>

    </div>

    <div id="botones">
    <button class="btn btn-secondary" id="agregar"onClick={enviar}>Agregar</button>
    </div>
    <br />
    <div align="center">
      <span>LISTA DE GATOS</span>
    </div>
    
    
   

    </form>
    
  )
}

export default Formu