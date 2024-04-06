import { express, bodyParser, userData } from './commonFilesForAllRouter.js'; const loginUser = express.Router();
loginUser.use(bodyParser.urlencoded({ extended: false }));
loginUser.post("/loginUser", async (req, res) => {
    const { email, password } = req.body;
    try {
        const isExist = await userData.findOne({ email });
        if (isExist) {
            if (isExist.password === password)
                res.render('index');
            else
                res.render('login', { message: "Incorrect password!" });
        }
        else {
            res.render('login', { message: "User not found!" });
        }

    } catch (error) {
        res.status(400).send(error);
    }
});
export { loginUser };