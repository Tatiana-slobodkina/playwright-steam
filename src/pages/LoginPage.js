const { BasePage } = require('./base/BasePage');

/**
 * The sign-in form is rendered by React with generated class names,
 * so locators rely on input types, labels and button text instead.
 */
class LoginPage extends BasePage {
  /** @param {import('@playwright/test').Page} page */
  constructor(page) {
    super(page);
    this.signInForm = page.locator('xpath=//form[.//input[@type="password"]]');
    this.accountNameLabel = this.signInForm.locator('xpath=.//label[normalize-space()="Sign in with account name"]');
    this.accountNameInput = this.signInForm.locator('xpath=.//input[@type="text"]');
    this.passwordInput = this.signInForm.locator('xpath=.//input[@type="password"]');
    this.signInButton = this.signInForm.locator('xpath=.//button[@type="submit" and normalize-space()="Sign in"]');
  }
}

module.exports = { LoginPage };
