import { express, Car, bodyParser } from './commonFilesForAllRouter.js';
const getParkedCarsData = new express.Router();
getParkedCarsData.use(bodyParser.urlencoded({ extended: false }));
getParkedCarsData.get("/getParkedCarsData", async (req, res) => {
    try {
        const result = await Car.find({});
        res.json(result);
    } catch (error) { console.log(error) }
});
export { getParkedCarsData };