const express = require("express")
const app = express()
const scraper = require("./scraper")

/**
 * Scrape a webpage and return rendered content.
 */
app.get('/', function(request, response) {
    const targetUrl = request.query.targeturl

    if (targetUrl !== undefined) {
        scraper.getContent(targetUrl)
            .then(content => response.status(200).json(content))
            .catch(exception => console.log(exception.message))
    } else {
        response.status(400).json("No valid URL provided")
    }
})

app.listen(8080)
