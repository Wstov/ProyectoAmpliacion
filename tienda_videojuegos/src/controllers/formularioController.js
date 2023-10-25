import Formulario from '../models/Formulario.js'


// const contactar = (req, res) => {
//     console.log('Estos son los datos que me llegan: ', req.body);
//     console.log('hasta aqui llega');
// }

const contactar = async (req, res) => {
    const datos = await Formulario.create(req.body)

    res.json(datos)
}

// const contactar = (req, res) => {
//     const { formData } = req.body;
//     console.log('datos recibidos: ', req.body);
//     res.json({ message: 'Datos recibidos con éxito' });
// }

export {
    contactar
}