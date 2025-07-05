import express from 'express';
import cors from 'cors';
import balanceSheetRouter from './routes/balanceSheet';
import scrap from './routes/scrap';

const app = express();

// Enable CORS for the frontend's origin
app.use(cors({
  origin: 'http://localhost:5173',
}));

app.use('/api/balance-sheet', balanceSheetRouter);
app.use('/api/scarp', scrap);

export default app;