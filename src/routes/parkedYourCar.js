import { express, carSlot, Car, bodyParser } from './commonFilesForAllRouter.js'; const addCar = express.Router();
addCar.use(bodyParser.urlencoded({ extended: false }));
addCar.post("/parkedYourCar", async (req, res) => {
    async function initializeSlots() {
        try {
            const existingSlotsCount = await carSlot.countDocuments();
            if (existingSlotsCount === 0) {
                const slots = [];
                for (let i = 1; i <= 10; i++) {
                    slots.push({ number: i, occupied: false });
                }
                await carSlot.insertMany(slots);
            }
        } catch (error) {
            console.log(error);
        }
    }
    await initializeSlots();
    try {
        const { car_num, color } = req.body;
        const isEmpty = await carSlot.findOne({ occupied: false }).sort({ number: 1 });
        if (isEmpty) {
            isEmpty.occupied = true;
            await isEmpty.save();
            const slotNumber = isEmpty.number;
            const carData = new Car({ carNumber: car_num, color, slotNumber });
            await carData.save();
            req.session.message = "Car parked successfully";
            res.redirect('/index');
        }
        else {
            req.session.message = "Parking lot is full";
            res.redirect('/index');
        }
    } catch (error) { console.log(error); }
});
addCar.get("/index", (req, res) => {
    const message = req.session.message || null;
    delete req.session.message;
    res.render('index', { message });
});
export { addCar };
