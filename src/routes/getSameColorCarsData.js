import { express, Car, bodyParser } from './commonFilesForAllRouter.js'; const getSameColorCarsData = new express.Router();
getSameColorCarsData.use(bodyParser.urlencoded({ extended: false }));

getSameColorCarsData.get("/getSameColorCarsData", async (req, res) => {
    try {
        const color = req.query.color;
        const cars = await Car.find({ color: color });
        res.json(cars);
    } catch (error) {
        console.error('Error fetching cars by color:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});
export { getSameColorCarsData };