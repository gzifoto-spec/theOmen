import http from "node:http";
import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = Number(process.env.PORT) || 5000;
const DB_PATH = path.join(__dirname, "terror.json");
const API_PREFIX = "/api/peliculas";

const sendJson = (res, statusCode, payload) => {
  const body = payload === undefined ? "" : JSON.stringify(payload);
  res.writeHead(statusCode, {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,POST,PUT,DELETE,OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
  });
  res.end(body);
};

const parseBody = async (req) => {
  return new Promise((resolve, reject) => {
    let data = "";
    req.on("data", (chunk) => {
      data += chunk;
    });
    req.on("end", () => {
      if (!data) {
        resolve({});
        return;
      }
      try {
        resolve(JSON.parse(data));
      } catch (error) {
        reject(error);
      }
    });
    req.on("error", reject);
  });
};

const loadMovies = async () => {
  const raw = await readFile(DB_PATH, "utf8");
  const data = JSON.parse(raw);
  if (!Array.isArray(data)) {
    throw new Error("terror.json must be an array");
  }
  return data;
};

const saveMovies = async (movies) => {
  await writeFile(DB_PATH, JSON.stringify(movies, null, 2));
};

const server = http.createServer(async (req, res) => {
  if (req.method === "OPTIONS") {
    sendJson(res, 204);
    return;
  }

  if (!req.url) {
    sendJson(res, 400, { message: "Missing URL" });
    return;
  }

  let url;
  try {
    url = new URL(req.url, `http://${req.headers.host || "localhost"}`);
  } catch {
    sendJson(res, 400, { message: "Invalid URL" });
    return;
  }

  if (!url.pathname.startsWith(API_PREFIX)) {
    sendJson(res, 404, { message: "Not found" });
    return;
  }

  try {
    const segments = url.pathname.split("/").filter(Boolean);
    const idSegment = segments[2];
    const movies = await loadMovies();

    if (req.method === "GET") {
      if (!idSegment) {
        sendJson(res, 200, movies);
        return;
      }
      const id = Number(idSegment);
      const movie = movies.find((item) => Number(item.id) === id);
      if (!movie) {
        sendJson(res, 404, { message: "Movie not found" });
        return;
      }
      sendJson(res, 200, movie);
      return;
    }

    if (req.method === "POST") {
      const body = await parseBody(req);
      const nextId = movies.reduce((max, item) => {
        const value = Number(item.id);
        return Number.isNaN(value) ? max : Math.max(max, value);
      }, 0) + 1;
      const newMovie = { id: nextId, ...body };
      const updated = [...movies, newMovie];
      await saveMovies(updated);
      sendJson(res, 201, newMovie);
      return;
    }

    if (req.method === "PUT") {
      if (!idSegment) {
        sendJson(res, 400, { message: "Missing id" });
        return;
      }
      const id = Number(idSegment);
      const body = await parseBody(req);
      const index = movies.findIndex((item) => Number(item.id) === id);
      if (index === -1) {
        sendJson(res, 404, { message: "Movie not found" });
        return;
      }
      const updatedMovie = { ...movies[index], ...body, id };
      const updated = movies.slice();
      updated[index] = updatedMovie;
      await saveMovies(updated);
      sendJson(res, 200, updatedMovie);
      return;
    }

    if (req.method === "DELETE") {
      if (!idSegment) {
        sendJson(res, 400, { message: "Missing id" });
        return;
      }
      const id = Number(idSegment);
      const updated = movies.filter((item) => Number(item.id) !== id);
      if (updated.length === movies.length) {
        sendJson(res, 404, { message: "Movie not found" });
        return;
      }
      await saveMovies(updated);
      sendJson(res, 204);
      return;
    }

    sendJson(res, 405, { message: "Method not allowed" });
  } catch (error) {
    sendJson(res, 500, { message: "Server error" });
  }
});

server.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`API listening on http://localhost:${PORT}${API_PREFIX}`);
});
