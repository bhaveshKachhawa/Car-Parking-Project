import { express, bodyParser } from './commonFilesForAllRouter.js';
const renderRegisterPage = new express.Router();
renderRegisterPage.use(bodyParser.urlencoded({ extended: false }));
renderRegisterPage.get("/register", (req, res) => {
    res.render("register");
});
export { renderRegisterPage };