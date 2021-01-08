const express = require("express")
const app = express()
const puppeteer = require("puppeteer")

/**
 * Scrape a webpage and return rendered content.
 */
app.get('/', async function(request, response) {
    const targetUrl = request.query.targeturl

    if (targetUrl !== undefined) {
        try {
            browser = await puppeteer.launch({args: ['--no-sandbox'], headless: true})
            page = await browser.newPage()
            await page.setUserAgent("Lambda scraper")
            await page.goto(targetUrl)
            const content =  await page.content()
            await browser.close()
    
            response.status(200).json(content)
        } catch(error) {
            console.log(error)
        }
    } else {
        response.status(400).json("No valid URL provided")
    }
})

app.listen(8080)
