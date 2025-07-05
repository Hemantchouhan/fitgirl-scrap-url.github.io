import { Router } from 'express';
import { setCache } from '../cache';

const router = Router();


router.get('/', async (req, res) => {
  try {
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
  <h2>Home Page</h2>
  
  <div class="left-align">
    <h3>API Endpoints</h3>
    
    <h4>Scrapper URL</h4>
    <p>Scrapes URLs from fitgirl repacks site. Requires target URL parameter where you use the ID before # first, then add ?, then add the rest after #.</p>
    <p><strong>Format:</strong> <code>/scrapper?targeturl={id}?{hash}</code></p>
    <p><strong>Example:</strong></p>
    <pre>https://fitgirl-scrap-url-github-io.onrender.com/scrapper?targeturl=a3eee38fd8b47eb6?9mKSTqxC1cpB9vzY6Wzd8kKa9z2CFRmCmSseV3bZU1Pr</pre>
    
    <h4>Download URL</h4>
    <p>Returns the cached download links from the scrapper.</p>
    <p><strong>Format:</strong> <code>/download</code></p>
  </div>
  
</body>
</html>`;
    res.send(html);
    
  } catch (error: any) {
    res.status(500).json({ error: 'Failed to load page', details: error.message });
  }
});

export default router;