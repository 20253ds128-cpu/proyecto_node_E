
// importar todas las librerias para nuestro proyecto
import express from "express"
import cors from "cors"

// crear una instancia de expres
const app = express();

// configurar cores para recibir peticiones desde el frontend
app.use(cors());

// configurar express para que pueda recibir datos en formato json
app.use(cors());

app.get("/", (req, resp)=>{
    resp.send("Hello World from my server by express")
});

export default app;