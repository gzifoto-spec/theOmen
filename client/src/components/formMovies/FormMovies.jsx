import { useEffect, useState } from "react";
import axios from "axios";

const FormMovies = () => {
  const [movies, setMovies] = useState([]);
  const [editId, setEditId] = useState(null);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState({ text: "", type: "" });

  const [formData, setFormData] = useState({
    titulo: "",
    anio: "",
    sinopsis: "",
    poster: "",
  });

  useEffect(() => {
    loadMovies();
  }, []);

  const loadMovies = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/peliculas");
      const data = Array.isArray(response.data) ? response.data : response.data.peliculas || [];
      setMovies(data);
    } catch (err) {
      console.error("Error cargando películas:", err);
      setMovies([]);
      showMessage("Error al cargar películas", "error");
    }
  };

  const validate = (data) => {
    const newErrors = {};

    if (!data.titulo?.trim()) {
      newErrors.titulo = "El título es obligatorio";
    }

    if (!data.poster?.trim()) {
      newErrors.poster = "La URL del póster es obligatoria";
    }

    const year = Number(data.anio);
    if (!data.anio || !Number.isInteger(year) || year < 1900 || year > new Date().getFullYear()) {
      newErrors.anio = "El año debe ser válido (1900 - presente)";
    }

    if (!data.sinopsis?.trim()) {
      newErrors.sinopsis = "La sinopsis es obligatoria";
    }

    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    const updated = { ...formData, [name]: value };
    setFormData(updated);
    
    if (Object.keys(errors).length > 0) {
      setErrors(validate(updated));
    }
  };

  const resetForm = () => {
    setFormData({ titulo: "", anio: "", sinopsis: "", poster: "" });
    setEditId(null);
    setErrors({});
  };

  const showMessage = (text, type) => {
    setMessage({ text, type });
    setTimeout(() => setMessage({ text: "", type: "" }), 3000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validate(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setLoading(true);

    const payload = {
      titulo: formData.titulo.trim(),
      anio: Number(formData.anio),
      sinopsis: formData.sinopsis.trim(),
      poster: formData.poster.trim(),
    };

    try {
      if (editId) {
        const response = await axios.put(`http://localhost:5000/api/peliculas/${editId}`, payload);
        showMessage("Película actualizada exitosamente", "success");
        setMovies(movies.map(m => m.id === editId ? response.data : m));
      } else {
        const response = await axios.post("http://localhost:5000/api/peliculas", payload);
        showMessage("Película creada exitosamente", "success");
        setMovies([...movies, response.data]);
      }
      
      resetForm();
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch (err) {
      console.error("Error:", err);
      showMessage("Error al guardar la película", "error");
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (movie) => {
    setFormData({
      titulo: movie.titulo || "",
      anio: movie.anio || "",
      sinopsis: movie.sinopsis || "",
      poster: movie.poster || "",
    });
    setEditId(movie.id);
    setErrors({});
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleDelete = async (id) => {
    if (!window.confirm("¿Eliminar esta película definitivamente?")) return;

    try {
      await axios.delete(`http://localhost:5000/api/peliculas/${id}`);
      setMovies(movies.filter(m => m.id !== id));
      showMessage("Película eliminada exitosamente", "success");
    } catch (err) {
      console.error("Error:", err);
      showMessage("Error al eliminar la película", "error");
    }
  };

  return (
    <div className="min-h-screen bg-neutral-950 pt-20 px-4 pb-20">
      <h1 className="text-center text-4xl text-white mb-10 uppercase tracking-widest">
        {editId ? "Editar película" : "Añadir película"}
      </h1>

      {message.text && (
        <div className={`max-w-xl mx-auto mb-6 p-4 rounded-lg text-center font-bold ${
          message.type === "success" 
            ? "bg-green-600 text-white" 
            : "bg-red-600 text-white"
        }`}>
          {message.text}
        </div>
      )}

      <form
        onSubmit={handleSubmit}
        className="max-w-xl mx-auto bg-black/80 border border-white/10 p-8 rounded-lg space-y-5"
      >
        <div>
          <input
            name="titulo"
            value={formData.titulo}
            onChange={handleChange}
            placeholder="Título"
            className={`w-full px-4 py-3 bg-gray-800 text-white rounded border ${
              errors.titulo ? "border-red-600" : "border-gray-600"
            } focus:outline-none focus:border-red-600`}
          />
          {errors.titulo && (
            <p className="text-red-500 text-sm mt-1">{errors.titulo}</p>
          )}
        </div>

        <div>
          <input
            type="number"
            name="anio"
            value={formData.anio}
            onChange={handleChange}
            placeholder="Año"
            min="1900"
            max={new Date().getFullYear()}
            className={`w-full px-4 py-3 bg-gray-800 text-white rounded border ${
              errors.anio ? "border-red-600" : "border-gray-600"
            } focus:outline-none focus:border-red-600`}
          />
          {errors.anio && (
            <p className="text-red-500 text-sm mt-1">{errors.anio}</p>
          )}
        </div>

        <div>
          <input
            name="poster"
            value={formData.poster}
            onChange={handleChange}
            placeholder="URL del póster (ej: /posters/imagen.jpg)"
            className={`w-full px-4 py-3 bg-gray-800 text-white rounded border ${
              errors.poster ? "border-red-600" : "border-gray-600"
            } focus:outline-none focus:border-red-600`}
          />
          {errors.poster && (
            <p className="text-red-500 text-sm mt-1">{errors.poster}</p>
          )}
        </div>

        <div>
          <textarea
            name="sinopsis"
            rows="5"
            value={formData.sinopsis}
            onChange={handleChange}
            placeholder="Sinopsis de la película..."
            className={`w-full px-4 py-3 bg-gray-800 text-white rounded border ${
              errors.sinopsis ? "border-red-600" : "border-gray-600"
            } focus:outline-none focus:border-red-600 resize-vertical`}
          />
          {errors.sinopsis && (
            <p className="text-red-500 text-sm mt-1">{errors.sinopsis}</p>
          )}
        </div>

        <div className="flex justify-center gap-4 pt-4">
          <button
            type="submit"
            disabled={loading}
            className="px-8 py-3 bg-red-700 hover:bg-red-800 text-white font-bold uppercase rounded transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? "Procesando..." : editId ? "Actualizar" : "Guardar"}
          </button>

          {editId && (
            <button
              type="button"
              onClick={resetForm}
              className="px-8 py-3 bg-gray-700 hover:bg-gray-600 text-white uppercase rounded transition-colors"
            >
              Cancelar
            </button>
          )}
        </div>
      </form>

      <div className="max-w-4xl mx-auto mt-16">
        <h2 className="text-center text-3xl text-white mb-8 uppercase tracking-widest">
          Películas en la base de datos
        </h2>

        {movies.length === 0 ? (
          <p className="text-center text-gray-400 text-lg">
            No hay películas. ¡Agrega la primera!
          </p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {movies.map((movie) => (
              <div
                key={movie.id}
                className="bg-black/80 border border-white/10 rounded-lg p-5 hover:border-red-600/50 transition-all"
              >
                <h3 className="text-red-600 font-bold uppercase text-lg mb-2">
                  {movie.titulo}
                </h3>
                <p className="text-gray-400 mb-1">📅 Año: {movie.anio}</p>
                <p className="text-gray-300 text-sm mb-4">
                  {movie.sinopsis?.substring(0, 100)}...
                </p>

                <div className="flex gap-3">
                  <button
                    onClick={() => handleEdit(movie)}
                    className="flex-1 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded font-semibold transition-colors"
                  >
                    Editar
                  </button>
                  <button
                    onClick={() => handleDelete(movie.id)}
                    className="flex-1 px-4 py-2 bg-red-700 hover:bg-red-800 text-white rounded font-semibold transition-colors"
                  >
                    Borrar
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default FormMovies;