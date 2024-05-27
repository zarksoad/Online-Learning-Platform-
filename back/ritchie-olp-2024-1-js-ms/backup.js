// const { Pool } = require('pg');
// const fs = require('fs');
// const schedule = require('node-schedule');
// const DATABASE_URL = process.env.DATABASE_URL;
// const pool = new Pool({ connectionString: DATABASE_URL });


// async function realizarRespaldo() {
//   const fechaActual = new Date();
//   const nombreArchivo = `verceldb_${fechaActual.getFullYear()}-${fechaActual.getMonth() + 1}-${fechaActual.getDate()}.sql`;
//   const rutaArchivo = `./respaldos/${nombreArchivo}`;

 
//   const cliente = await pool.connect();

//   try {

//     const resultado = await cliente.query(`pg_dump -d verceldb -f ${rutaArchivo}`);

//     if (resultado.rowCount === 0) {
//       console.error('Error al generar el respaldo');
//       return;
//     }

//     console.log(`Respaldo creado exitosamente: ${rutaArchivo}`);
//   } catch (error) {
//     console.error('Error durante el respaldo:', error);
//   } finally {
//     // Cerrar el cliente de la base de datos
//     await cliente.release();
//   }
// }


// const job = schedule.scheduleJob('0 18 * * *', realizarRespaldo);


// realizarRespaldo();


// //necesario instalar npm install pg node-schedule