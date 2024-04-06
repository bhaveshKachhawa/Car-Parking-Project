import { express, bodyParser } from './commonFilesForAllRouter.js';
const renderLoginPage = new express.Router();
renderLoginPage.use(bodyParser.urlencoded({ extended: false }));
renderLoginPage.get("/login", (req, res) => {
    res.render("login");
});
export { renderLoginPage };