import mongoose from 'mongoose';

export default async function startDataBaseConnection() {
    const MONGO_URI = 'mongodb://localhost:27017/api-rest';
        mongoose.set('useFindAndModify', true);
        mongoose.connect(process.env.MONGODB_URL || MONGO_URI, {
            useNewUrlParser: true,
            useCreateIndex: true,
            useFindAndModify: false
        })
        .catch(err => console.log(`Error to connect to database: ${err}`))
        .then( (db) => console.log('Database is connected'));
}
