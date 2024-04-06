import { express, Car, bodyParser } from './commonFilesForAllRouter.js';
const getCarSlotsByColor = new express.Router();
getCarSlotsByColor.use(bodyParser.urlencoded({ extended: false }));

getCarSlotsByColor.get("/getCarSlotsByColor", async (req, res) => {
    try {
        const color = req.query.colorForSlot;
        const cars = await Car.find({ color });
        res.json(cars);
    } catch (error) {
        console.error('Error fetching cars by car number:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});
export { getCarSlotsByColor };