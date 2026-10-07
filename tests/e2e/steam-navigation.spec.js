// @ts-check
const { test, expect } = require('../../src/fixtures/pages.fixture');
const { URL_PATTERNS } = require('../../src/test-data/urls');
const { TITLES } = require('../../src/test-data/titles');
const { STAT_FORMAT, parseStatNumber } = require('../../src/utils/number');

test.describe('Steam navigation', () => {
  test('Store -> Community -> Sign in -> About with online stats', async ({
    page,
    storePage,
    communityPage,
    loginPage,
    aboutPage,
  }) => {
    await test.step('Open Steam and check that Steam was opened', async () => {
      await storePage.open();
      await expect(page).toHaveURL(URL_PATTERNS.store);
      await expect(page).toHaveTitle(TITLES.store);
      await expect(storePage.header.root).toBeVisible();
      await expect(storePage.header.steamLogo).toBeVisible();
      await expect(storePage.header.activeStoreTab).toBeVisible();
    });

    await test.step('Go to Community tab and check that Community was opened', async () => {
      await storePage.header.openCommunityTab();
      await expect(page).toHaveURL(URL_PATTERNS.community);
      await expect(page).toHaveTitle(TITLES.community);
      await expect(communityPage.header.activeCommunityTab).toBeVisible();
    });

    await test.step('Click Sign in and check that Sign in form is displayed', async () => {
      await communityPage.header.clickSignIn();
      await expect(page).toHaveURL(URL_PATTERNS.login);
      await expect(loginPage.signInForm).toBeVisible();
      await expect(loginPage.accountNameLabel).toBeVisible();
      await expect(loginPage.accountNameInput).toBeVisible();
      await expect(loginPage.passwordInput).toBeVisible();
      await expect(loginPage.signInButton).toBeVisible();
    });

    await test.step('Go to About tab and check that About was opened', async () => {
      await loginPage.header.openAboutTab();
      await expect(page).toHaveURL(URL_PATTERNS.about);
      await expect(aboutPage.aboutGreeting).toBeVisible();
      await expect(aboutPage.onlineStats).toBeVisible();
    });

    await test.step('Check "playing now" and "online" digits', async () => {
      await expect(aboutPage.onlineStat).toBeVisible();
      await expect(aboutPage.playingNowStat).toBeVisible();

      const onlineText = await aboutPage.getOnlineText();
      const playingNowText = await aboutPage.getPlayingNowText();

      expect(onlineText, 'online value format').toMatch(STAT_FORMAT);
      expect(playingNowText, 'playing now value format').toMatch(STAT_FORMAT);

      const online = parseStatNumber(onlineText);
      const playingNow = parseStatNumber(playingNowText);

      expect(online).toBeGreaterThan(0);
      expect(playingNow).toBeGreaterThan(0);
      // Everyone playing right now is also online.
      expect(playingNow).toBeLessThanOrEqual(online);
    });
  });
});
