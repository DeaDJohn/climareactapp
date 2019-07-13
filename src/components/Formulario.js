import React, {useState} from 'react';

function Formulario( {datosConsulta}){

    // state del Componente
    // busqueda = state, guardarBusqueda = this.setState({})
    const [busqueda, guardarBusqueda] = useState({
        ciudad: '',
        pais: ''
    })

    const handleChange = e => {
        // Cambiar el state
        guardarBusqueda({
            ...busqueda,
            [e.target.name]: e.target.value
        });

        // console.log(busqueda);

    }

    const consultarClima = e => {
        e.preventDefault();
        // console.log('onSubmit');
        // pasar hacia el componente principal la busuqda del usuario
        datosConsulta(busqueda);
    }

    return(
        <form
            onSubmit={consultarClima}
        >
            <div className="input-field col s12">
                <input 
                    type="text"
                    name="ciudad"
                    id="ciudad"
                    onChange={handleChange}
                />
                <label htmlFor="ciudad">Ciudad: </label>
            </div>

                <div className="input-field col s12">
                    <select name="pais" onChange={handleChange}>
                        <option value="">Selecciona un pais</option>
                        <option value="US">Estados Unidos</option>
                        <option value="ES">España</option>
                        <option value="MX">México</option>
                        <option value="CO">Colombia</option>
                        <option value="RO">Rumanía</option>
                    </select>
                </div>

                <div className="input-field col s12">
                    <button className="waves-effect waves-light btn btn-block yellow accent-4" type="submit" name="action">Buscar Clima
                        <i className="material-icons left">cloud</i>
                    </button>
                    {/* <input type="submit" className="waves-effect waves-light btn-block yellow accent-4" value="Buscar Clima"/> */}
                </div>
        </form>
    )
}

export default Formulario;