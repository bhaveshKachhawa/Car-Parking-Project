import { express, Remove } from './commonFilesForAllRouter.js';
const clearRemovedCarsData = express.Router();
clearRemovedCarsData.post("/clearRemovedCarsData", async (req, res) => {
    try {
        await Remove.deleteMany({});
        res.render('index');
    } catch (error) { console.log(error); };
});
export { clearRemovedCarsData };