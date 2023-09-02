const mongoose = require('mongoose');

const dbConnection = async () => {
    try {
    
      await mongoose.connect(process.env.DB_CNN);
      console.log('db online')
    } catch (error) {
        console.log(error);
        throw new Error('Error a la hr de inicializar BD');
    }
}

module.exports = {
    dbConnection,
}