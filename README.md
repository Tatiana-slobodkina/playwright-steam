# Steam UI autotests (Playwright + JavaScript)

End-to-end tests for [store.steampowered.com](https://store.steampowered.com/) built with
[Playwright](https://playwright.dev/) using the **Page Object** pattern and **XPath** locators.

## Test scenario

1. Open Steam → check that the Store page is opened
2. Go to the **Community** tab → check that Community is opened
3. Click **Sign in** → check that the sign-in form is displayed
4. Go to the **About** tab → check that About is opened
5. Check the **online** and **playing now** numbers (format, > 0, playing now ≤ online)

## Project structure

```
src/
  pages/
    base/BasePage.js               # parent page, holds the shared header
    components/HeaderComponent.js  # global Steam header: tabs, logo, sign-in link
    StorePage.js  CommunityPage.js  LoginPage.js  AboutPage.js
    index.js
  fixtures/pages.fixture.js        # injects page objects into tests
  test-data/                       # URLs, URL patterns, page titles
  utils/                           # helpers (number parsing)
tests/
  e2e/steam-navigation.spec.js
```

## Run

```bash
npm install
npx playwright install chromium

npm test              # headless
npm run test:headed   # with a visible browser
npm run report        # open the HTML report
```
