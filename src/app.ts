import express,{Application} from 'express';
import cors from 'cors';

const app : Application = express();

import authRoutes from './routes/auth';
import morgan from 'morgan';

// settings
app.set('port',4000);  
// middlewares
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

// setInterval(function() {
//     console.log('I am an interval');
// }, 5000);

// routes 
app.use('/api',authRoutes);

export default app;