import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { obtenerVehiculos } from '../../api/vehiculoApi';
import { obtenerCategporias } from '../../api/categoriaApi';

export default function VehiculosView() {
  // Lista de categorías predefinidas para el select
  const categoriasDisponibles = [
    { idCategoria: 1, nombreCategoria: "camion" },
    { idCategoria: 2, nombreCategoria: "auto" },
    { idCategoria: 3, nombreCategoria: "moto" },
    { idCategoria: 4, nombreCategoria: "camioneta" }
  ];




  // Estado para la lista de vehículos
    const [vehiculos, setVehiculos] = useState([]);   
    const [categorias, setCategorias] = useState([]);   

  // Estados independientes con useState para los inputs y el select
  const [marca, setMarca] = useState('');
  const [color, setColor] = useState('');
  const [idCategoria, setIdCategoria] = useState('');
  const [nombreCategoria, setNombreCategoria] = useState('');



  useEffect(() =>{
    obtenerVehiculos()
    .then(setVehiculos)
    .catch((error) => console.log("ERROR: ",error.messege)
    )
  },[])

    useEffect(() =>{
    obtenerCategporias()
    .then(setCategorias)
    .catch((error) => console.log("ERROR: ",error.messege)
    )
  },[])




  // Manejador para actualizar categoría y su ID al cambiar el select
  const handleCategoriaChange = (e) => {
    const selectedId = e.target.value;
    const categoriaEncontrada = categoriasDisponibles.find(
      (cat) => cat.idCategoria === Number(selectedId)
    );

    if (categoriaEncontrada) {
      setIdCategoria(categoriaEncontrada.idCategoria);
      setNombreCategoria(categoriaEncontrada.nombreCategoria);
    } else {
      setIdCategoria('');
      setNombreCategoria('');
    }
  };

  // Función async para agregar un vehículo (sin <form>)
  const agregarVehiculo = async () => {
    // Validación básica
    if (!marca || !color || !idCategoria) {
      alert("Por favor completa todos los campos y selecciona una categoría.");
      return;
    }







    // Limpiamos los campos
    setMarca('');
    setColor('');
    setIdCategoria('');
    setNombreCategoria('');
  };


  function editar(auto){
    console.log("OBJ COMPLETO ---> ",auto);
    
  }

  function eliminar(auto){

  }

  return (
    <div className="container mt-5 mb-5">
      <h2 className="text-center mb-4">Gestión de Vehículos</h2>

      {/* Sección de Registro (Sin usar <form>) */}
      <div className="card shadow p-4 mb-4">
        <h4 className="mb-3">Agregar Nuevo Vehículo</h4>
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
              onChange={handleCategoriaChange}
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
              onClick={agregarVehiculo}
            >
              Registrar Vehículo
            </button>
          </div>
        </div>
      </div>

      {/* Sección de Listado */}
      <div className="card shadow p-4">
        <h4 className="mb-3">Lista de Vehículos Registrados</h4>
        <div className="table-responsive">
          <table className="table table-striped table-hover align-middle">
            <thead className="table-dark">
              <tr>
                <th>ID Vehículo</th>
                <th>Marca</th>
                <th>Color</th>
                <th>ID Categoría</th>
                <th>Nombre Categoría</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {vehiculos.length === 0 ? (
                <tr>
                  <td colSpan="5" className="text-center text-muted py-3">
                    No hay vehículos registrados.
                  </td>
                </tr>
              ) : (
                vehiculos.map((v) => (
                  <tr key={v.idVehiculo}>
                    <td>{v.idVehiculo}</td>
                    <td>{v.marca}</td>
                    <td>{v.color}</td>
                    <td>{v.categoria.idCategoria}</td>
                    <td>{v.categoria.nombreCategoria}</td>
                    <td>
                        <button onClick={()=> editar(v)} className='btn btn-warning me-3'>Editar</button>
                        <button onClick={() => eliminar(v)} className='btn btn-danger'>Eliminar</button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}