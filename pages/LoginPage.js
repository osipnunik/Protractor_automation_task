var LoginPage = function() {
const logInput = element(by.xpath("//div[@class='email-box']//input[@name='email']"));
const password = element(by.xpath("//div[@class='email-box']//input[@name='password']"));
const passIcon = element(by.xpath("//span[@class='icon icon-eye']"));
const submitBtn = element(by.xpath("//div[@class='email-box']//div[@class='btn-box']/button[text()='Login']"));
const notyText = element(by.xpath("//span[@class='noty_text']"));

this.login = function(loginStr, passStr) {
  logInput.sendKeys(loginStr);
  password.sendKeys(passStr);
  submitBtn.click();
};

this.inputEmail = function(inputStr) {
  logInput.sendKeys(inputStr);
};

this.clearEmail = function() {
  logInput.clear();
};

this.inputPassword = function(inputStr){
  password.sendKeys(inputStr);
};

this.submit = function(){
  submitBtn.click();
};

this.clickOnPassEyeIcon = function(){
  passIcon.click();
};

this.isPasswordVisible = function(){
  return password.isDisplayed();
};

this.getNotyTextText = function(){
  var EC = protractor.ExpectedConditions;
  browser.wait(EC.textToBePresentInElement(notyText, 'Uh oh! Email or password is incorrect') , 5000);
  return notyText.getText();
};

};
module.exports = new LoginPage();
