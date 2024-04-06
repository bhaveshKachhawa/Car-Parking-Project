import { express, Remove, carSlot, Car, bodyParser } from './commonFilesForAllRouter.js';
const removeCar = express.Router();
removeCar.use(bodyParser.urlencoded({ extended: false }));
removeCar.post("/removeCar", async (req, res) => {
    try {
        const { carNumber } = req.body;
        const carData = await Car.findOne({ carNumber });
        if (carData) {
            await carSlot.findOneAndUpdate({ number: carData.slotNumber }, { occupied: false });
            const removeCar = new Remove({ carNumber, color: carData.color, slotNumber: carData.slotNumber, entryDate: carData.entryDate });
            await removeCar.save();
            await Car.deleteOne({ carNumber });
            req.session.message = "Car removed successfully";
            res.redirect('/index');
        }
        else {
            req.session.message = "Car not found!";
            res.redirect('/index');
        }
    } catch (error) { console.log(error) }
});
removeCar.get("/index", (req, res) => {
    const message = req.session.message || null;
    delete req.session.message;
    res.render('index', { message });
});
export { removeCar };