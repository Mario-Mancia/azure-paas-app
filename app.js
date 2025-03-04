import express from "express";
import cors from "cors";
import { sequelize } from "./config/dbconfig.js";

const app = express();

app.use(cors());
app.use(express.json());

import studentRoutes from './routes/students.js';
app.use('/students', studentRoutes);

const PORT = 3000;

sequelize.sync()
   .then(()=> {
      console.log('Base de Datos sincronizada');
      app.listen(PORT, (res) => {
         try {
            console.log(`Servidor corriendo en http://localhost:${PORT}`);
            
         }
         catch (error) {
            console.error("No se pudo iniciar el servidor: ", error);
         }
      });
   })
      .catch(err=>{console.error('Error al establecer la conexión con la base de datos', err)});
