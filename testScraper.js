const scraper = require('./scraper')

const url = process.argv.slice(2)[0]

scraper.getContent(url).then((content) => console.log(content))