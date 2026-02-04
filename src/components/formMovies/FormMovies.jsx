import { useEffect, useState } from 'react';
import axios from 'axios';
import '../../index.css';
import { useNavigate } from 'react-router-dom';

const BASE_URL = `${import.meta.env.VITE_API_URL}/peliculas`

const initialFormData = {
  titulo: '',
  anio: '',
  rating: '',
  poster: '',
  sinopsis: ''
};

const FormPeliculas = () => {
  const [peliculas, setPeliculas] = useState([]);
  const [formData, setFormData] = useState(initialFormData);
  const [editId, setEditId] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPeliculas = async () => {
      try {
        const respuesta = await axios.get(BASE_URL);
        const ordenadas = respuesta.data.sort((a, b) => b.id - a.id);
        setPeliculas(ordenadas);
      } catch (error) {
        console.error('Error al cargar las películas:', error);
      }
    };
    fetchPeliculas();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.titulo || formData.anio === '' || formData.rating === '') {
      alert('Por favor, completa los campos obligatorios');
      return;
    }

    const payload = {
      titulo: formData.titulo.trim(),
      anio: Number(formData.anio),
      rating: Number(formData.rating),
      poster: formData.poster.trim() || '/posters/placeholder.jpg',
      sinopsis: formData.sinopsis.trim() || 'Sin sinopsis disponible.'
    };

    try {
      if (editId) {
        const respuesta = await axios.put(`${BASE_URL}/${editId}`, payload);
        setPeliculas(peliculas.map(p => (p.id === editId ? respuesta.data : p)));
        setEditId(null);
      } else {
        const respuesta = await axios.post(BASE_URL, payload);
        setPeliculas((prev) => [respuesta.data, ...prev]);
      }
      setFormData(initialFormData);
    } catch (error) {
      console.error('Error al guardar la película:', error);
    }
  };

  const handleEdit = (pelicula) => {
    setFormData({
      titulo: pelicula.titulo ?? '',
      anio: pelicula.anio ?? '',
      rating: pelicula.rating ?? '',
      poster: pelicula.poster ?? '',
      sinopsis: pelicula.sinopsis ?? ''
    });
    setEditId(pelicula.id);
  };

  const handleDelete = async (id) => {
    const confirmacion = window.confirm(
      "Atención, el cambio que vas a ejecutar es irreversible. ¿Quieres continuar?"
    );

    if (confirmacion) {
      try {
        await axios.delete(`${BASE_URL}/${id}`);
        setPeliculas(peliculas.filter(p => p.id !== id));
        if (editId === id) {
          setFormData(initialFormData);
          setEditId(null);
        }
      } catch (error) {
        console.error('Error al borrar la película:', error);
      }
    } else {
      alert("Perdón, lo siento mucho, me he equivocado y no volverá a ocurrir");
    }
  };

  const handleCancel = () => {
    setFormData(initialFormData);
    setEditId(null);
  };

  return (
    <div className="w-full min-h-screen bg-black/80 backdrop-blur-md" style={{ backgroundImage: "url('/src/assets/home/hero-desktop.jpg')", backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed' }}>
      <div className="absolute inset-0 bg-black/50 pointer-events-none" />

      <div className="relative z-10 pt-20 pb-20 px-4 sm:px-8">
        <h1 className="text-4xl md:text-5xl font-bold text-center font-omen-title text-red-700 mb-12 uppercase tracking-widest drop-shadow-[0_2px_10px_rgba(185,28,28,0.5)]">
          {editId ? 'Editar' : 'Películas'}
        </h1>

        <div className="mx-auto">
          <div className="max-w-2xl mx-auto">
            <form className="w-full bg-black/40 backdrop-blur-md border border-white/10 rounded-xl p-8 mb-8 shadow-2xl shadow-black/30 ring-1 ring-white/5 font-omen-body" onSubmit={handleSubmit}>
              <div className="space-y-6">
                <input
                  type="text"
                  name="titulo"
                  value={formData.titulo}
                  onChange={handleChange}
                  placeholder="Título"
                  className="w-full px-4 py-3 bg-black/30 border border-white/10 rounded text-red-600 font-semibold placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-red-700/70 transition"
                />
                <input
                  type="number"
                  name="anio"
                  value={formData.anio}
                  onChange={handleChange}
                  placeholder="Año"
                  className="w-full px-4 py-3 bg-black/30 border border-white/10 rounded text-red-600 font-semibold placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-red-700/70 transition"
                />
                <input
                  type="number"
                  name="rating"
                  value={formData.rating}
                  onChange={handleChange}
                  placeholder="Rating (0-10)"
                  className="w-full px-4 py-3 bg-black/30 border border-white/10 rounded text-red-600 font-semibold placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-red-700/70 transition"
                />
                <input
                  type="text"
                  name="poster"
                  value={formData.poster}
                  onChange={handleChange}
                  placeholder="URL del poster"
                  className="w-full px-4 py-3 bg-black/30 border border-white/10 rounded text-red-600 font-semibold placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-red-700/70 transition"
                />
                <textarea
                  name="sinopsis"
                  value={formData.sinopsis}
                  onChange={handleChange}
                  placeholder="Sinopsis"
                  className="w-full px-4 py-3 bg-black/30 border border-white/10 rounded text-red-600 font-semibold placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-red-700/70 transition min-h-[140px]"
                  rows="6"
                />
              </div>

              <div className="flex flex-wrap gap-4 mt-8 justify-center">
                <button
                  type="submit"
                  className="px-10 py-3 bg-black/60 border-2 border-amber-600/50 text-amber-500 font-black uppercase tracking-[0.2em] rounded-sm transition-all duration-500 hover:border-red-600 hover:text-red-500 hover:shadow-[0_0_20px_rgba(185,28,28,0.4)] hover:bg-black/80 relative group overflow-hidden"
                >
                  <span className="relative z-10">
                    {editId ? 'Invocar Cambios' : 'Sellar Película'}
                  </span>
                  <div className="absolute inset-0 bg-red-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </button>

                {editId && (
                  <button
                    type="button"
                    onClick={() => navigate(`/movies/${editId}`)}
                    className="px-8 py-3 bg-transparent border border-amber-700/30 text-amber-700/70 hover:text-amber-500 hover:border-amber-500 font-bold uppercase tracking-widest rounded-sm transition-all duration-300"
                  >
                    Ver Ficha
                  </button>
                )}

                {editId && (
                  <button
                    type="button"
                    onClick={handleCancel}
                    className="px-8 py-3 bg-transparent text-gray-600 hover:text-red-800 font-bold uppercase tracking-widest transition-all duration-300"
                  >
                    [ Abortar ]
                  </button>
                )}
              </div>
            </form>
          </div>

          <div className="w-full max-w-[1600px] mx-auto px-4 md:px-6">
            <div className="grid w-full grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-x-4 gap-y-6">
              {peliculas.map(pelicula => (
                <div key={pelicula.id} className="bg-black/30 hover:bg-black/40 backdrop-blur-md border border-white/10 rounded-lg p-3 shadow-lg hover:border-red-700/50 transition flex flex-col justify-between min-h-[140px]">
                  <div>
                    <h3 title={pelicula.titulo} className="text-red-600 font-bold uppercase tracking-wide text-xs truncate">{pelicula.titulo}</h3>
                    <p className="text-gray-400 text-[10px] mt-1 italic">Año: {pelicula.anio} | Rating: {pelicula.rating}</p>
                  </div>
                  <div className="flex gap-2 mt-4">
                    <button
                      onClick={() => handleEdit(pelicula)}
                      className="flex-1 px-2 py-1.5 border border-amber-700/50 bg-amber-900/20 hover:bg-amber-700/40 text-amber-600 font-bold text-[10px] uppercase rounded transition-all"
                    >
                      Modificar
                    </button>
                    <button
                      onClick={() => handleDelete(pelicula.id)}
                      className="flex-1 px-2 py-1.5 border border-red-900/50 bg-red-950/20 hover:bg-red-700 hover:text-white hover:shadow-[0_0_10px_rgba(185,28,28,0.8)] text-red-700 font-bold text-[10px] uppercase rounded transition-all"
                    >
                      Eliminar
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormPeliculas;