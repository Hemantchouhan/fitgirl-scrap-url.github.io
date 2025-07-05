import express from 'express';
import download from './routes/download';
import scrap from './routes/scrap';
import landingPage from './routes/landingPage';

const app = express();

app.use('/download', download);
app.use('/scrapper', scrap);
app.use('/', landingPage);

export default app;