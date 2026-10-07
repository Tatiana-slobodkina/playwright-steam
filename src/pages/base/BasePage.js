const { HeaderComponent } = require('../components/HeaderComponent');

/**
 * Parent of every Steam page: holds the Playwright page and
 * the global header shared by Store, Community and About.
 */
class BasePage {
  /** @param {import('@playwright/test').Page} page */
  constructor(page) {
    this.page = page;
    this.header = new HeaderComponent(page);
  }

  /** @param {string} path */
  async goto(path) {
    await this.page.goto(path);
  }
}

module.exports = { BasePage };
