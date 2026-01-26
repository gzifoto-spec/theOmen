import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const FormMovies = () => {
  const navigate = useNavigate();

  const [movies, setMovies] = useState([]);
  const [editId, setEditId] = useState(null);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const [formData, setFormData] = useState({
    title: "",
    year: "",
    synopsis: "",
    poster: "",
  });

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/peliculas")
      .then((res) => setMovies(res.data.peliculas || []))
      .catch((err) => console.error(err));
  }, []);

  const validate = (data) => {
    const newErrors = {};

    if (!data.title || typeof data.title !== "string")
      newErrors.title = "El título debe ser texto";

    if (!data.poster || typeof data.poster !== "string")
      newErrors.poster = "La URL del póster es obligatoria";

    if (
      !data.year ||
      !Number.isInteger(Number(data.year)) ||
      data.year < 1900 ||
      data.year > new Date().getFullYear()
    )
      newErrors.year = "El año debe ser un número válido";

    if (!data.synopsis || typeof data.synopsis !== "string")
      newErrors.synopsis = "La sinopsis es obligatoria";

    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    const updated = { ...formData, [name]: value };

    setFormData(updated);
    setErrors(validate(updated));
  };

  const resetForm = () => {
    setFormData({ title: "", year: "", synopsis: "", poster: "" });
    setEditId(null);
    setErrors({});
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
      titulo: formData.title.trim(),
      anio: Number(formData.year),
      sinopsis: formData.synopsis.trim(),
      poster: formData.poster.trim(),
    };

    try {
      if (editId) {
        await axios.put(
          `http://localhost:5000/api/peliculas/${editId}`,
          payload
        );
      } else {
        await axios.post("http://localhost:5000/api/peliculas", payload);
      }

      navigate("/movies");
    } catch (err) {
      console.error("Error guardando película:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (movie) => {
    setFormData({
      title: movie.titulo,
      year: movie.anio,
      synopsis: movie.sinopsis,
      poster: movie.poster,
    });
    setEditId(movie.id);
    setErrors({});
    window.scrollTo(0, 0);
  };

  const handleDelete = async (id) => {
    if (!confirm("¿Eliminar esta película definitivamente?")) return;

    try {
      await axios.delete(`http://localhost:5000/api/peliculas/${id}`);
      setMovies((prev) => prev.filter((m) => m.id !== id));
    } catch (err) {
      console.error("Error eliminando película:", err);
    }
  };

  return (
    <div className="min-h-screen bg-neutral-950 pt-20 px-4">
      <h1 className="text-center text-4xl font-omen-title text-white mb-10 uppercase tracking-widest">
        {editId ? "Editar película" : "Añadir película"}
      </h1>

      <form
        onSubmit={handleSubmit}
        className="max-w-xl mx-auto bg-black/80 border border-white/10 p-8 rounded-lg space-y-5"
      >
        <div>
          <input
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Título"
            className={`w-full px-4 py-3 bg-gray-800 text-white rounded border ${
              errors.title ? "border-red-600" : "border-gray-600"
            }`}
          />
          {errors.title && <p className="text-red-500 text-sm">{errors.title}</p>}
        </div>

        <div>
          <input
            type="number"
            name="year"
            value={formData.year}
            onChange={handleChange}
            placeholder="Año"
            className={`w-full px-4 py-3 bg-gray-800 text-white rounded border ${
              errors.year ? "border-red-600" : "border-gray-600"
            }`}
          />
          {errors.year && <p className="text-red-500 text-sm">{errors.year}</p>}
        </div>

        <div>
          <input
            name="poster"
            value={formData.poster}
            onChange={handleChange}
            placeholder="URL del póster"
            className={`w-full px-4 py-3 bg-gray-800 text-white rounded border ${
              errors.poster ? "border-red-600" : "border-gray-600"
            }`}
          />
          {errors.poster && (
            <p className="text-red-500 text-sm">{errors.poster}</p>
          )}
        </div>

        <div>
          <textarea
            name="synopsis"
            rows="4"
            value={formData.synopsis}
            onChange={handleChange}
            placeholder="Sinopsis"
            className={`w-full px-4 py-3 bg-gray-800 text-white rounded border ${
              errors.synopsis ? "border-red-600" : "border-gray-600"
            }`}
          />
          {errors.synopsis && (
            <p className="text-red-500 text-sm">{errors.synopsis}</p>
          )}
        </div>

        <div className="flex justify-center gap-4 pt-4">
          <button
            type="submit"
            disabled={loading}
            className="px-8 py-2 bg-red-700 hover:bg-red-800 text-white font-bold uppercase rounded disabled:opacity-50"
          >
            {editId ? "Actualizar" : "Guardar"}
          </button>

          {editId && (
            <button
              type="button"
              onClick={resetForm}
              className="px-8 py-2 bg-gray-700 text-white uppercase rounded"
            >
              Cancelar
            </button>
          )}
        </div>
      </form>

      <div className="max-w-xl mx-auto mt-12 space-y-4">
        {movies.map((movie) => (
          <div
            key={movie.id}
            className="bg-black/80 border border-white/10 rounded p-4"
          >
            <h3 className="text-red-600 font-bold uppercase">
              {movie.titulo}
            </h3>
            <p className="text-gray-400">{movie.anio}</p>

            <div className="flex gap-2 mt-3">
              <button
                onClick={() => handleEdit(movie)}
                className="px-4 py-1 bg-blue-600 text-white rounded"
              >
                Editar
              </button>
              <button
                onClick={() => handleDelete(movie.id)}
                className="px-4 py-1 bg-red-700 text-white rounded"
              >
                Borrar
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FormMovies;