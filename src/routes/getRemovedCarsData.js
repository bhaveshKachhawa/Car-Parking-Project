import { express, Remove, bodyParser } from './commonFilesForAllRouter.js';
const getRemovedCarsData = new express.Router();
getRemovedCarsData.use(bodyParser.urlencoded({ extended: false }));

getRemovedCarsData.get("/getRemovedCarsData", async (req, res) => {
    try {
        const result = await Remove.find({});
        res.json(result);
    } catch (error) { console.log(error) }
});
export { getRemovedCarsData };