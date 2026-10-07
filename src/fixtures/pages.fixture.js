const base = require('@playwright/test');
const { StorePage, CommunityPage, LoginPage, AboutPage } = require('../pages');

/**
 * @typedef {{
 *   storePage: InstanceType<typeof import('../pages/StorePage')['StorePage']>,
 *   communityPage: InstanceType<typeof import('../pages/CommunityPage')['CommunityPage']>,
 *   loginPage: InstanceType<typeof import('../pages/LoginPage')['LoginPage']>,
 *   aboutPage: InstanceType<typeof import('../pages/AboutPage')['AboutPage']>,
 * }} PageFixtures
 */

/**
 * Extends Playwright's `test` so specs receive ready-made page objects.
 * @type {import('@playwright/test').TestType<
 *   import('@playwright/test').PlaywrightTestArgs &
 *   import('@playwright/test').PlaywrightTestOptions &
 *   PageFixtures,
 *   import('@playwright/test').PlaywrightWorkerArgs &
 *   import('@playwright/test').PlaywrightWorkerOptions
 * >}
 */
const test = base.test.extend({
  storePage: async ({ page }, use) => use(new StorePage(page)),
  communityPage: async ({ page }, use) => use(new CommunityPage(page)),
  loginPage: async ({ page }, use) => use(new LoginPage(page)),
  aboutPage: async ({ page }, use) => use(new AboutPage(page)),
});

module.exports = { test, expect: base.expect };
