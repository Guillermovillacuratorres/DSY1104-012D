import { createBrowserRouter } from "react-router-dom";
import Inicio from "./pages/inicio/inicio";
import Nosotros from "./pages/nosotros/nosotros";
import Formulario from "./pages/formulario/formulario";
import Login from "./pages/login/login";
import RutaProtegida from "./components/rutaProtegida/rutaProtegida";
import VehiculosView from "./pages/agregarAuto/agregarAuto";

export const routes = createBrowserRouter([
    {
        path:"/",
        element:<RutaProtegida> <Inicio/> </RutaProtegida>
    },
    {
        path:"/vehiculo",
        element:<RutaProtegida> <VehiculosView/> </RutaProtegida>
    },
    {
        path:"/nosotros/:idMascota",
        element:<Nosotros/>
    },
    {
        path:"/formulario",
        element:<Formulario/>
    },
    {
        path:"/login",
        element:<Login/>
    }

]);


