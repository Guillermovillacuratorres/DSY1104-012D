import { useState } from "react";
import App_navbar from "../../components/navbar/navbar";


function Formulario() {
    const [txtNombre,setTxtNombre] = useState("");



    function guardar() {
        console.log("NOMBRE: ", txtNombre);        
    }

    return(
        <>
            <App_navbar/>
            <div className="row mx-3">
                <div className="col-12">
                    <h1>Formulario</h1>
                </div>

                <div className="col-6">
                    <label htmlFor="txtNombre">Nombre:</label>
                    <input onChange={(e) => setTxtNombre(e.target.value)} className="form-control" type="text" id="txtNombre" />
                </div>

                <div className="col-6">
                    <label htmlFor="txtEdad">Edad:</label>
                    <input type="number" id="txtEdad" className="form-control"  />
                </div>

                <div className="col-12 mt-3">
                    <button onClick={guardar} className="btn btn-primary">Guardar</button>
                </div>

            </div>
        </>
    );
}
export default Formulario;