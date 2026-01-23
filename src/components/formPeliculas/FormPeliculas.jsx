import { useState } from 'react';
import './styles/FormPeliculas.css';
import FormHeader from './FormHeader';
import FormInputs from './FormInputs';
import FormButtons from './FormButtons';

const FormPeliculas = () => {
  const [formData, setFormData] = useState({
    titulo: '',
    director: '',
    año: '',
    genero: '',
    descripcion: '',
    imagen: '',
    calificacion: ''
  });

  const [mensaje, setMensaje] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validar que todos los campos estén llenos
    if (Object.values(formData).some(value => !value)) {
      setMensaje('Por favor, completa todos los campos');
      return;
    }

    // Aquí iría la lógica para guardar la película
    console.log('Película guardada:', formData);
    setMensaje('¡Película añadida correctamente!');
    
    // Limpiar formulario
    setFormData({
      titulo: '',
      director: '',
      año: '',
      genero: '',
      descripcion: '',
      imagen: '',
      calificacion: ''
    });

    // Limpiar mensaje después de 3 segundos
    setTimeout(() => setMensaje(''), 3000);
  };

  const handleReset = () => {
    setFormData({
      titulo: '',
      director: '',
      año: '',
      genero: '',
      descripcion: '',
      imagen: '',
      calificacion: ''
    });
    setMensaje('');
  };

  return (
    <div className="form-peliculas-container">
      <FormHeader />
      
      <form className="form-peliculas" onSubmit={handleSubmit}>
        <FormInputs formData={formData} handleChange={handleChange} />
        
        {mensaje && (
          <div className={`form-mensaje ${mensaje.includes('correctamente') ? 'exito' : 'error'}`}>
            {mensaje}
          </div>
        )}
        
        <FormButtons onReset={handleReset} />
      </form>
    </div>
  );
};

export default FormPeliculas;
