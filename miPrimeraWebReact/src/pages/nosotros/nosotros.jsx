import { useNavigate, useParams } from "react-router-dom";
import App_navbar from "../../components/navbar/navbar";

function Nosotros() {
    const navigate = useNavigate();

    const {idMascota} = useParams();

    function irInicio() {
        console.log("PARAMETRO: ", idMascota);
        
        navigate("/");
    }

    return(
        <>
            <App_navbar/>
            <h1>Nosotros</h1>
            <button onClick={irInicio}>Ir a inicio</button>
        </>
    );
}

export default Nosotros;