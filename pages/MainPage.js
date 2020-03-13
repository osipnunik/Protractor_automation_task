var MainPage = function() {
const loginText = element(by.xpath("//div[@class='log-box']/a[text()='Log in']"));
const userEmailButton = element(by.xpath("//div[contains(@class, 'profile-box')]/a"));
const dropboxItem = element.all(by.xpath("//div[contains(@class, 'profile-box')]/ul/li"));
const logOutLiBtn = element(by.xpath("//ul/li/button[text()='Log out']"));
const viewProfileLiBtn = element(by.xpath("//ul/li/a[text()='View profile']"));
const dropboxButton = element(by.xpath("//div[contains(@class, 'profile-box')]/ul/../button"));

this.clickOnLoginText = function() {
  loginText.click();
};

this.getUserEmailText = function() {
  return userEmailButton.getText();
};

this.clickOnCheckbox = function(){
  dropboxButton.click();
};

this.dropboxListItemsDisplayed = function(){
  return dropboxItem.isPresent();
};

this.logOut = function(){
  if(!dropboxButton.isSelected){
    dropboxButton.click();
    console.log('not selected');
  }
  logOutLiBtn.click();
};

this.clickOnLogOut = function(){
  logOutLiBtn.click();
};

this.openViewPrifile = function(){
  dropboxButton.click();
  viewProfileLiBtn.click();
};

};

module.exports = new MainPage();
