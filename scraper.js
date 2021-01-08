const puppeteer = require("puppeteer")

/**
 * Get complete HTML content of a URL.
 * 
 * @param {String} targetUrl Fully Qualified Domain Name to extract page content for
 * 
 * @return {String} Stringified HTML including embedded script tags etc.
 */
module.exports.getContent = async function(targetUrl) {
    browser = await puppeteer.launch({args: ['--no-sandbox'], headless: true})
    page = await browser.newPage()
    await page.setUserAgent("Lambda scraper")
    await page.goto(targetUrl)
    const content =  await page.content()
    await browser.close()

    return content
}
