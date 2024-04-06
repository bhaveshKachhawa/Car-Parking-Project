import { fileURLToPath, express, path, hbs, session } from './importFiles.js';
import { router } from './combinedRouters.js';

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname + '/frontend-files'));

hbs.registerPartials(path.join(__dirname + '/partials'));

app.use(express.static(path.join(__dirname, '/public')));
app.use(session({
    secret: 'your-secret-key',
    resave: false,
    saveUninitialized: false
}));
app.use(router);

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`listening at port ${port} .`);
});