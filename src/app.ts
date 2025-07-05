import express from 'express';
// import cors from 'cors';
import download from './routes/download';
import scrap from './routes/scrap';

const app = express();

// Enable CORS for the frontend's origin
/* app.use(cors({
  origin: 'http://localhost:5173',
})); */

app.use('/download', download);
app.use('/scrapper', scrap);

export default app;