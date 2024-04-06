import mongoose from 'mongoose';
mongoose.connect('mongodb://0.0.0.0:27017/carParkingSystem').then(() => {
    console.log("Connection TRUE!!!");
}).catch(() => {
    console.log("Connection FALSE!!!");
});