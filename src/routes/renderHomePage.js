import { express, bodyParser } from './commonFilesForAllRouter.js';
const renderHomePage = new express.Router();
renderHomePage.use(bodyParser.urlencoded({ extended: false }));
renderHomePage.get("", (req, res) => {
    res.render("login");
});
export { renderHomePage };