import { express, Car, bodyParser } from './commonFilesForAllRouter.js';
const getCarSlotByRegNumber = new express.Router();
getCarSlotByRegNumber.use(bodyParser.urlencoded({ extended: false }));

getCarSlotByRegNumber.get("/getCarSlotByRegNumber", async (req, res) => {
    try {
        const carNumber = req.query.carNumber;
        const cars = await Car.find({ carNumber });
        res.json(cars);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
});
export { getCarSlotByRegNumber };