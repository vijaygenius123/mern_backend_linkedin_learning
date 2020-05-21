import express from 'express';
import mongoose from 'mongoose'
import bodyParser from 'body-parser'
import cors from 'cors'
import routes from './routes/soccerRoutes'
const app = express();
const PORT = process.env.PORT | 8080;

//mongo Setup
mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost/soccerDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})


//bodyParser Setup
app.use(bodyParser.urlencoded({ extented: true }));
app.use(bodyParser.json())

app.use(cors())

routes(app);

app.get('/', (req, res) => {
    return res.send('Hello World')
})

app.listen(PORT, () => {
    console.log('Started Server')
})