import express from 'express' // Se extrae express y se agrega a una fiuncion
import usuarioRoutes from './src/routes/usuarioRoutes.js'
import db from './src/config/db.js'
import cors from 'cors'
import morgan from 'morgan'


// Se crea la app
// Se llama la funcion
const app = express()


app.use(cors())
app.use(morgan('dev'))

// Se habilita la lectura de datos del formulario
app.use(express.json());
app.use(express.urlencoded({ extended: true }))


// Conexion a la base de datos
try {
    await db.authenticate();
    db.sync()
    console.log('Conexión correcta a la base de datos');
} catch (error) {
    console.log(error);
}


// app.use( express.static('public'))


// Routing
app.use('/auth', usuarioRoutes)

// definicion del puerto para inicializar el proyecto
const port = 3000

app.listen(port, () => {
    console.log(`El servidor esta funcionando en el puerto ${port}`);
})
