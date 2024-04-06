import mongoose from 'mongoose';
const carSchema = new mongoose.Schema({
    carNumber: { type: String },
    color: { type: String },
    slotNumber: { type: Number },
    entryDate: {
        type: Date,
        default: Date.now
    }
});
const Car = mongoose.model('Car', carSchema);
export { Car };