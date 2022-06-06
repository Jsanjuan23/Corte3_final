import React from "react";
//import { useForm } from "react-hook-form";
import { firebase } from '../firebase'

export default function Actualizar({item}) {

  //const { register, handleSubmit } = useForm()
  const db = firebase.firestore(); 

  const enviar = async (data) => {
    const {name, age, color } = data
    await db.collection("cats").doc(item.id).update({
      name,
      age,
      color,
      src: item.src,
    });
    window.location.reload(false);
  };

  return (
    <form /*onSubmit={handleSubmit(enviar)}*/>
      <div className="form-row">
        <label>name</label>
        <input
          type="text"
          id="UserName"
          name="UserName"
          //{...register("name", { required: true })}
        />

      </div>
      <div className="form-row">
        <label>age</label>
        <input
          type="text"
          id="UserName"
          name="UserName"
          //{...register("age", { required: true })}
        />
      
      </div>
      <div className="form-row">
        <label>color</label>
        <input
          type="text"
          id="UserName"
          name="UserName"
         // {...register("color", { required: true })}
        />

      </div>

  
    </form>
  );
}