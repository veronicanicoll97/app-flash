const descargarImagen = require('./imagen');

const apiRoutes = app => {
    app.use('/imagen', descargarImagen);
};


exports.apiRoutes = apiRoutes;