const { BasePage } = require('./base/BasePage');

class AboutPage extends BasePage {
  /** @param {import('@playwright/test').Page} page */
  constructor(page) {
    super(page);
    this.aboutGreeting = page.locator('xpath=//div[@id="about_greeting"]');
    this.onlineStats = page.locator('xpath=//div[@class="online_stats"]');
    this.onlineStat = page.locator(
      'xpath=//div[@class="online_stat"][div[contains(@class,"gamers_online")]]'
    );
    this.playingNowStat = page.locator(
      'xpath=//div[@class="online_stat"][div[contains(@class,"gamers_in_game")]]'
    );
  }

  async getOnlineText() {
    return this.#getStatText(this.onlineStat);
  }

  async getPlayingNowText() {
    return this.#getStatText(this.playingNowStat);
  }

  /**
   * Returns the stat's number without its label, e.g. "34,999,092".
   * @param {import('@playwright/test').Locator} stat
   */
  async #getStatText(stat) {
    // The number is the stat block's own text node, next to the label <div>.
    return stat.evaluate((el) =>
      Array.from(el.childNodes)
        .filter((n) => n.nodeType === Node.TEXT_NODE)
        .map((n) => n.textContent)
        .join('')
        .trim()
    );
  }
}

module.exports = { AboutPage };
