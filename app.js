import express from "express";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

const PORT = 3000 || 3001;
app.listen(PORT, ()=> {
   try {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);

   }
   catch (error) {
    console.error("No se pudo iniciar el servidor: ", error)
   }
});