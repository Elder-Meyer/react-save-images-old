import React, {useState} from "react";
import { subirImagen } from './firebase/config'

function App() {

  const [file, setfile] = useState(null)
  const [url, setUrl] = useState(null)

  const handleSubmit = async(e) =>{
    e.preventDefault();

    try {
      const url = await subirImagen(file);
      console.log("esta es la url", url);
    } catch (error) {
      console.log(error);
      alert("error temporal intenta mas tarde");
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="file" name="" id ="" onChange={e => setfile(e.target.files[0])}/>

      <button>subirImagen</button>
      
  
    </form>
  );
}

export default App;
