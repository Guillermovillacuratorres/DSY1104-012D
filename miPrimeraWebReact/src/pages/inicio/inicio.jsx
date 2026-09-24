import './inicio.module.css'
import estilos  from "./inicio.module.css";

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


function guardar() {
    console.log("Soy un boton");
    
}


function BasicExample() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}


function Inicio() {
    return(
        <>
            <h1 className={`${estilos.tamanio} negrita`}>Hooola</h1>
             <div className="row">
                <div className="col-5">
                    <label htmlFor="txtCorreo">Correo</label>
                    <input id='txtCorreo' className='form-control' type="text" />
                </div>

                <div className="col-3">
                    <button onClick={guardar} className='btn btn-warning'>Guardar</button>
                </div>

                <div className="col-4">
                    <img width={300} src="/src/assets/img/tortuga.webp" alt="" />
                </div>

             </div>

             <BasicExample/>
        </>
    );
}
export default Inicio;