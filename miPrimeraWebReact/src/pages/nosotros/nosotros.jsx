import { useNavigate, useParams } from "react-router-dom";

function Nosotros() {
    const navigate = useNavigate();

    const {idMascota} = useParams();

    function irInicio() {
        console.log("PARAMETRO: ", idMascota);
        
        navigate("/");
    }

    return(
        <>
            <h1>Nosotros</h1>
            <button onClick={irInicio}>Ir a inicio</button>
        </>
    );
}

export default Nosotros;