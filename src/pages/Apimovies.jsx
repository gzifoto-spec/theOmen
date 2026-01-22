import { useEffect, useState } from "react";
import axios from "axios";
function Films() {
const [films, setFilms] = useState([]);
const [cargando, setCargando] = useState(true);
const [error, setError] = useState(null);
useEffect(() => {
async function obtenerFilms() {
try { 
const respuesta = await axios.get(
"../../api/themoviesdb/films");

setFilms(respuesta.data.results);
} catch (err) { 
setError("No se pudieron cargar los Films 😢");
} finally {
setCargando(false);
}
}
obtenerFilms();
}, []);
if (cargando) {
return <p>Cargando Films...</p>;
}
if (error) {
return <p>{error}</p>;
}
return (
<div>
<h2>terror Films</h2>
<ul>
{films.map((film) => (
<li key={film.id}>
{film.name}
</li>
))}
</ul>
</div>
);
}

export default Films;
