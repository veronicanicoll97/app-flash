const redis = require('redis');


module.exports = async (redisUri) => {
    try {
        console.log('Conectando con la BD en redis ...');

        const cliente = redis.createClient({
            url: redisUri
        });

        cliente.on('error', err => console.error('Redis Client Error: ', err));

        await cliente.connect();

        console.log('Conexion realizada ...');
    } catch (error) {
        console.log(error)
    }
} 