'use strict';

const chai = require('chai');
const expect = chai.expect;
const scraper = require('../../scraper');

describe('scraper', function() {
  it('can extract content from a webpage', async function() {
    const result = await scraper.getContent('https://www.google.com');

    expect(result).to.have.string('<html');
    expect(result).to.have.string('</html>');
    expect(result).to.have.string('<title>Google</title>');
  });
});