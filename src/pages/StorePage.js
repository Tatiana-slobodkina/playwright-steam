const { BasePage } = require('./base/BasePage');
const { URLS } = require('../test-data/urls');

class StorePage extends BasePage {
  async open() {
    await this.goto(URLS.store);
  }
}

module.exports = { StorePage };
