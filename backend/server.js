import express from 'express';

import authRoutes from './routes/auth.route.js';
import { ENV_VARS } from './config/envVars.js';
import { connectDB } from './config/db.js';


const app = express();

const PORT = ENV_VARS.PORT;

app.use(express.json()); // will allow us to parse incoming json data from req.body

app.use('/api/v1/auth', authRoutes);

app.listen(PORT, () => {
    console.log("Server is running on http://localhost:"+ PORT);
    connectDB();
});

// j3r9i1rv9LVcFGuS