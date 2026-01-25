import { GENEROS, CALIFICACIONES } from './utils/constantes';

const FormInputs = ({ formData, handleChange }) => {
  return (
    <>
      <div className="form-grupo">
        <label htmlFor="titulo" className="form-label">
          Título *
        </label>
        <input
          type="text"
          id="titulo"
          name="titulo"
          value={formData.titulo}
          onChange={handleChange}
          placeholder="Ej: El Señor de los Anillos"
          className="form-input"
        />
      </div>

      <div className="form-grupo">
        <label htmlFor="director" className="form-label">
          Director *
        </label>
        <input
          type="text"
          id="director"
          name="director"
          value={formData.director}
          onChange={handleChange}
          placeholder="Ej: Peter Jackson"
          className="form-input"
        />
      </div>

      <div className="form-row">
        <div className="form-grupo">
          <label htmlFor="año" className="form-label">
            Año *
          </label>
          <input
            type="number"
            id="año"
            name="año"
            value={formData.año}
            onChange={handleChange}
            placeholder="Ej: 2001"
            className="form-input"
            min="1900"
            max={new Date().getFullYear()}
          />
        </div>

        <div className="form-grupo">
          <label htmlFor="calificacion" className="form-label">
            Calificación *
          </label>
          <select
            id="calificacion"
            name="calificacion"
            value={formData.calificacion}
            onChange={handleChange}
            className="form-input"
          >
            <option value="">Selecciona una calificación</option>
            {CALIFICACIONES.map(cal => (
              <option key={cal} value={cal}>
                {cal}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="form-grupo">
        <label htmlFor="genero" className="form-label">
          Género *
        </label>
        <select
          id="genero"
          name="genero"
          value={formData.genero}
          onChange={handleChange}
          className="form-input"
        >
          <option value="">Selecciona un género</option>
          {GENEROS.map(gen => (
            <option key={gen} value={gen}>
              {gen}
            </option>
          ))}
        </select>
      </div>

      <div className="form-grupo">
        <label htmlFor="descripcion" className="form-label">
          Descripción *
        </label>
        <textarea
          id="descripcion"
          name="descripcion"
          value={formData.descripcion}
          onChange={handleChange}
          placeholder="Escribe una breve descripción de la película..."
          className="form-input form-textarea"
          rows="5"
        />
      </div>

      <div className="form-grupo">
        <label htmlFor="imagen" className="form-label">
          URL de la Imagen *
        </label>
        <input
          type="url"
          id="imagen"
          name="imagen"
          value={formData.imagen}
          onChange={handleChange}
          placeholder="Ej: https://ejemplo.com/imagen.jpg"
          className="form-input"
        />
      </div>
    </>
  );
};

export default FormInputs;
