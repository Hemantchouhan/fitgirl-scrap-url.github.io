const cache: {count: number, urls: any[]} = {count: 0, urls: []};

export const setCache = (count: number, urls: any[]) => {
  cache.count = count;
  cache.urls = urls;
};

export const getCache = () => cache;