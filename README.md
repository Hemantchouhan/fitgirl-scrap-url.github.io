# fitgirl-scrap-url.github.io

## API Endpoints

### Scrapper URL
Scrapes URLs from fitgirl repacks site. Requires target URL parameter where you use the ID before # first, then add ?, then add the rest after #.

**Format:** `/scrapper?targeturl={id}?{hash}`

**Example:**
```
https://fitgirl-scrap-url-github-io.onrender.com/scrapper?targeturl=a3eee38fd8b47eb6?9mKSTqxC1cpB9vzY6Wzd8kKa9z2CFRmCmSseV3bZU1Pr
```

### Download URL
Returns the cached download links from the scrapper.

**Format:** `/download`
