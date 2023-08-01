const obtenerImagen = require('../services');

module.exports = async (req, res) => {
    try {
        console.log('Data recibida: ' + JSON.stringify(req.body));
        const { id } = req.body;
        const resultado = await obtenerImagen(id);
        console.log('Resultado: ' + resultado);
        return res.download(resultado);
    } catch (error) {
        console.log(error)
    }
}