import { express, bodyParser, userData } from './commonFilesForAllRouter.js'; const addUser = express.Router();
addUser.use(bodyParser.urlencoded({ extended: false }));
addUser.post('/registerUser', async (req, res) => {
    const { email, password } = req.body;
    const newUser = new userData({ email, password });
    try {
        const isExist = await userData.findOne({ email });
        if (isExist) {
            res.render('register', { message: 'Email already exists in the database!' });
        }
        else {
            await newUser.save();
            res.render('register', { message: 'Register successfully!' });
        }

    } catch (error) {
        res.status(400).send(error);
    }
});
export { addUser };