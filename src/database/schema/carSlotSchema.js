import mongoose from 'mongoose';
const slotSchema = new mongoose.Schema({
    number: { type: Number, required: true },
    occupied: { type: Boolean, default: false }
});
const carSlot = mongoose.model('Slot', slotSchema);
export { carSlot };