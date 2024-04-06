import mongoose from 'mongoose';
const carSchema = new mongoose.Schema({
    carNumber: { type: String },
    color: { type: String },
    slotNumber: { type: Number },
    entryDate: { type: Date },
    exitDate: {
        type: Date,
        default: Date.now
    }
});
const Remove = mongoose.model('RemovedCar', carSchema);
export { Remove };