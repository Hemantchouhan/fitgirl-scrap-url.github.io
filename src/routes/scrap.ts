import { Router } from 'express';
    var fs = require('fs');

const router = Router();

const puppeteer = require('puppeteer');

async function extractWindowOpenUrls(url: string) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(url, { waitUntil: 'networkidle2' });

  const html = await page.content();
  const urls = [];
  // Regex to check url starts with https://fuckingfast.co
  const regex = /window\.open\(['"]([^'"]+)['"]/g;
  let match;
  while ((match = regex.exec(html)) !== null) {
    urls.push(match[1]);
  }

  await browser.close();
  return urls;
}

async function extractListUrls(url: string): Promise<string[]> {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url, { waitUntil: 'networkidle2' });
    
    const html = await page.content();
    const urls = [];
    const regex = /<a href="([^"]+)"[^>]*>(.*?)<\/a>/g;
    let match;
    while ((match = regex.exec(html)) !== null) {
        urls.push(match[1]);
    }
    
    await browser.close();
    return urls;
}



router.get('/', async (req, res) => {
  try {
    const [url, hash] = req.query.targeturl.split('?');
    const response = await extractListUrls(`https://paste.fitgirl-repacks.site/?${url}#${hash}`);
    let count= 1;
    const responseUrls = []
    for (const url of response) {
        try {
          // Check if the URL starts with 'https://fuckingfast.co/' and contains word part
            if(url.startsWith('https://fuckingfast.co/') && url.includes('part')) {
            let download = await extractWindowOpenUrls(url);
            responseUrls.push(download);
            console.log(count + '. ' + url);
            count++;
        }
        } catch (error) {
            console.error(url);
        }
    }

    // console.log('Response:', response);
      fs.writeFile ("./src/routes/input.json", JSON.stringify(response), function(err : any) {
      if (err) throw err;
      console.log('complete');
      }
  );
    res.json({count: count, urls: responseUrls});
  } catch (error: any) {
    res.status(500).json({ error: 'Failed to fetch balance sheet', details: error.message });
  }
});

export default router;