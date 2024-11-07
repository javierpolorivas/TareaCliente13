import  { useState } from 'react';
import './CardContainer.css'; // Importa los estilos
import PropTypes from 'prop-types';

const CardContainer = ({ children }) => {
  // Estado para manejar el diseño actual (fila o columna)
  const [layout, setLayout] = useState('row'); // 'row' es el valor inicial

  // Función para actualizar el estado al cambiar la disposición en el desplegable
  const handleLayoutChange = (e) => {
    setLayout(e.target.value);
  };

  return (
    <div>
      {/* Desplegable para seleccionar la disposición */}
      <label>
        Disposición:
        <select value={layout} onChange={handleLayoutChange}>
          <option value="row">Fila</option>
          <option value="column">Columna</option>
        </select>
      </label>

      {/* Contenedor dinámico que ajusta el layout según el estado */}
      <div className={`card-container ${layout}`}>
        {children}
      </div>
    </div>
  );
};

CardContainer.propTypes = {
  children: PropTypes.node.isRequired,
};


export default CardContainer;
