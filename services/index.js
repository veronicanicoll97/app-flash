const data = require('../data');
const path = require('path');
const fs = require('fs');
const axios = require('axios').default;
const { v4 } = require('uuid');

async function downloadImage(url, filename) {
    const response = await axios.get(url, { responseType: 'arraybuffer' });
  
    fs.writeFileSync(filename, response.data, (err) => {
      if (err) throw err;
        console.log('Image downloaded successfully! ' + filename);
    });

    return filename;
}
  
module.exports = async (id) => {
    try {
        console.log('Busca la imagen con id: ' + id)
        const directorio = path.join(__dirname, "test");
        console.log('Se crea el directorio: ' + directorio);
        fs.mkdirSync(directorio, { recursive: true });
        const fileName = path.join(directorio, `${v4()}.jpeg`);
        console.log('Nombre del archivo: ' + fileName)
        const imagenEncontrada = data.find(item => item.id === Number(id));
        
        return await downloadImage(imagenEncontrada.imagen, fileName);
    } catch (error) {
        console.log(error);
    }
}