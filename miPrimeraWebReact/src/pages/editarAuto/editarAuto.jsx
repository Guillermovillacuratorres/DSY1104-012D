import { useNavigate, useParams } from "react-router-dom";
import App_navbar from "../../components/navbar/navbar";
import { useEffect, useState } from "react";
import { obtenerCategporias } from "../../api/categoriaApi";
import { actualizarVehiculo, buscarVehiculo } from "../../api/vehiculoApi";

function EditarVehiculo() {
    const navigate = useNavigate();
    const {idAuto} = useParams();
    const [categorias, setCategorias] = useState([]);   

     const [marca, setMarca] = useState('');
      const [color, setColor] = useState('');
      const [idCategoria, setIdCategoria] = useState('');


    useEffect(() =>{
        obtenerCategporias()
        .then(setCategorias)
        .catch((error) => console.log("ERROR: ",error.messege));

        buscarVehiculo(idAuto)
        .then((auto) =>{
            setMarca(auto.marca);
            setColor(auto.color);
            setIdCategoria(String(auto.categoria?.idCategoria))
        })
      },[idAuto])



      async function actualizarAUto(){
            const auto = {
                marca:marca,
                color:color,
                categoria:{idCategoria: Number(idCategoria)}
            }

            try {
                await actualizarVehiculo(idAuto,auto);
                navigate("/vehiculo");
            } catch (error) {
                console.log("Error al actualizar el vehiculo");                
            }
      }


    
    return(
        <>
            <App_navbar/>
    <div className="card shadow p-4 mb-4">
        <h4 className="mb-3">Editar Vehículo</h4>
        <div className="row g-3">
          <div className="col-md-6">
            <label className="form-label">Marca</label>
            <input
              type="text"
              className="form-control"
              placeholder="Ej: Toyota, Kia"
              value={marca}
              onChange={(e) => setMarca(e.target.value)}
            />
          </div>

          <div className="col-md-6">
            <label className="form-label">Color</label>
            <input
              type="text"
              className="form-control"
              placeholder="Ej: Rojo, Verde"
              value={color}
              onChange={(e) => setColor(e.target.value)}
            />
          </div>

          <div className="col-12">
            <label className="form-label">Categoría</label>
            <select
              className="form-select"
              value={idCategoria}
              onChange={(e) => setIdCategoria(e.target.value)}
            >
              <option value="">Selecciona una categoría...</option>
              {categorias.map((cat) => (
                <option key={cat.idCategoria} value={cat.idCategoria}>
                  {cat.nombreCategoria}
                </option>
              ))}
            </select>
          </div>

          <div className="col-12 mt-3">
            <button
              type="button"
              className="btn btn-primary w-100"
              onClick={actualizarAUto}
            >
              Actualizar Vehículo
            </button>
          </div>
        </div>
      </div>
        </>
    );
}

export default EditarVehiculo;