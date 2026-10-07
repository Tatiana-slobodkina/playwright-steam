/**
 * Steam global header (top menu + account actions).
 */
class HeaderComponent {
  /** @param {import('@playwright/test').Page} page */
  constructor(page) {
    this.page = page;

    this.root = page.locator('xpath=//div[@id="global_header"]');
    this.steamLogo = page.locator('xpath=//*[@id="logo_holder"]//img');

    this.storeTab = page.locator(
      'xpath=//div[contains(@class,"supernav_container")]//a[contains(@class,"menuitem") and @data-tooltip-content=".submenu_Store"]'
    );
    this.communityTab = page.locator(
      'xpath=//div[contains(@class,"supernav_container")]//a[contains(@class,"menuitem") and @data-tooltip-content=".submenu_Community"]'
    );
    this.aboutTab = page.locator(
      'xpath=//div[contains(@class,"supernav_container")]//a[contains(@class,"menuitem") and contains(@href,"/about/")]'
    );
    this.activeStoreTab = page.locator(
      'xpath=//div[contains(@class,"supernav_container")]//a[contains(@class,"supernav_active") and @data-tooltip-content=".submenu_Store"]'
    );
    this.activeCommunityTab = page.locator(
      'xpath=//div[contains(@class,"supernav_container")]//a[contains(@class,"supernav_active") and @data-tooltip-content=".submenu_Community"]'
    );

    this.signInLink = page.locator(
      'xpath=//div[@id="global_action_menu"]//a[contains(@class,"global_action_link") and contains(@href,"/login")]'
    );
  }

  async openCommunityTab() {
    await this.communityTab.click();
  }

  async openAboutTab() {
    await this.aboutTab.click();
  }

  async clickSignIn() {
    await this.signInLink.click();
  }
}

module.exports = { HeaderComponent };
