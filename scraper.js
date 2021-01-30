const puppeteer = require("puppeteer")

/**
 * Get complete HTML content of a URL.
 * 
 * @param {String} targetUrl Fully Qualified Domain Name to extract page content for
 * 
 * @return {String} Stringified HTML including embedded script tags etc.
 */
module.exports.getContent = async function(targetUrl) {
    let browser = null;
    let content = '';

    try {
        browser = await puppeteer.launch({args: ['--no-sandbox'], headless: true})
        const page = await browser.newPage()
        await page.setUserAgent("Lambda scraper")
        await page.goto(targetUrl)
        content =  await page.content()
    } catch(error) {
        console.error(error.message)
    } finally {
        if (browser !== null) {
            await browser.close()
        }
    }

    return content
}
