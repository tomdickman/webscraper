# Webscraper

A containerised web app for extracting the content of a web page post rendering, to include any script content loaded by the browser.

To run:
- Install docker
- Clone this repo
- Build the container with `docker build -t webscraper ./webscraper`
- Run the app in container `docker run -d -p 3000:8080 webscraper`
- Get the content of a webpage using the query parameter `targeturl` to indicate the URL yous want to scrape data for with curl (`curl "http://localhost:3000/?targeturl=https://github.com/tomdickman/webscraper"`) or by opening the same URL in your browser of choice.