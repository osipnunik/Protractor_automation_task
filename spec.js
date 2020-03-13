var loginPage = require('./pages/LoginPage');
var mainPage = require('./pages/MainPage');
var profilePage = require('./pages/ProfilePage');

const baseUrl = 'https://www.sbzend.ssls.com/';
const authoriseUrl = 'https://www.sbzend.ssls.com/authorize';
const profileUrl = 'https://www.sbzend.ssls.com/user/profile';
const emailInvalid = 'thereIsNoSuchEmail@gmail.com';
const emailValid = 'ssls.automation+666@gmail.com';
const password = '123456';

describe('Protractor Demo App', function() {
  it('Authorization page. Not registered user', async function() {
    browser.get(baseUrl);
    expect(browser.getCurrentUrl()).toEqual(baseUrl);
    mainPage.clickOnLoginText();
    expect(browser.getCurrentUrl()).toEqual(authoriseUrl);
    loginPage.inputEmail(emailInvalid);
    loginPage.inputPassword(password);
    loginPage.submit();
    expect(await loginPage.getNotyTextText()).toEqual('Uh oh! Email or password is incorrect');
    loginPage.clickOnPassEyeIcon();
    expect(loginPage.isPasswordVisible()).toEqual(true);
    expect(browser.getCurrentUrl()).toEqual(authoriseUrl);
  });

  it('Authorization page (Welcome back!)', function() {
    browser.get(baseUrl);
    expect(browser.getCurrentUrl()).toEqual(baseUrl);
    mainPage.clickOnLoginText();
    expect(browser.getCurrentUrl()).toEqual(authoriseUrl);
    loginPage.inputEmail(emailValid);
    loginPage.inputPassword(password);
    loginPage.clickOnPassEyeIcon();
    expect(loginPage.isPasswordVisible()).toEqual(true);
    loginPage.submit();
    expect(mainPage.getUserEmailText()).toEqual(emailValid);
    mainPage.clickOnCheckbox();
    expect(mainPage.dropboxListItemsDisplayed()).toEqual(true);
    mainPage.clickOnLogOut();
    expect(browser.getCurrentUrl()).toEqual(authoriseUrl);
  });

  it('My profile page. Client area',  function() {
    browser.get(baseUrl);
    expect(browser.getCurrentUrl()).toEqual(baseUrl);
    mainPage.clickOnLoginText();
    expect(browser.getCurrentUrl()).toEqual(authoriseUrl);
    loginPage.inputEmail(emailValid);
    loginPage.inputPassword(password);
    loginPage.submit();
    expect(mainPage.getUserEmailText()).toEqual(emailValid);
    mainPage.openViewPrifile();
    expect(profilePage.isTitleIsProfile()).toBe(true);
    expect(profilePage.getNameText()).toEqual('Vasya Pupkin');
    expect(profilePage.getEmailText()).toEqual('ssls.automation+666@gmail.com');
    expect(profilePage.getPasswordText()).toEqual('*****');
    expect(profilePage.getPhoneText()).toEqual('+380 12345678');
    expect(profilePage.getAddressText()).toEqual('Diagon alley 21, Misto, Uryupinsk 612120, Ukraine');
    expect(profilePage.getSupportPinText()).toEqual('fchx');
    expect(profilePage.getNewsletterText()).toEqual('Include in mailing list');
  });

});
