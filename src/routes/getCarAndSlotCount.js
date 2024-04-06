import { express, carSlot, Car, bodyParser } from './commonFilesForAllRouter.js';
const getCarAndSlotCount = new express.Router();
getCarAndSlotCount.use(bodyParser.urlencoded({ extended: false }));
getCarAndSlotCount.get("/getCarAndSlotCount", async (req, res) => {
    try {
        const carCount = await Car.countDocuments();
        const slotCount = await carSlot.countDocuments({ occupied: false });
        res.json({ carCount, slotCount });
    } catch (error) { console.log(error) }
});
export { getCarAndSlotCount };