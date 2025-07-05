import { Router } from 'express';
import axios from 'axios';
 // Assuming you have a JSON file with URLs
const router = Router();

router.get('/', async (req, res) => {
  try {
    // const response = await axios.get('http://xero-mock:3000/api.xro/2.0/Reports/BalanceSheet');
    // Show the index number before each link
const response = require('./input.json');
    // console.log('Response:', response.urls);
    const html = `<!DOCTYPE html>
<html>
<head>
  <title>My Page</title>
  <style>
    .right-align {
      text-align: right;
      margin-right: 200px;
    }
    .left-align {
      text-align: left;
      margin-left: 100px;
      font-weight: bold;
      color: orange;
    }
  </style>
</head>
<body>
  <h1>Hello from HTML!</h1>
  <h2>Balance Sheet URLs</h2>
  <div class="left-align"> Aligned to left so it does not block the Downloader window </div>
  <div class="right-align">
    ${response.map((url: string, idx: number) => `${idx + 1}. <a href="${url}" target="_blank">Link ${idx + 1}</a>`).join('<br>')}
  </div>
</body>
</html>`;
    res.send(html);
  } catch (error: any) {
    res.status(500).json({ error: 'Failed to fetch balance sheet', details: error.message });
  }
});

export default router;