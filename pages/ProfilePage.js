var ProfilePage = function() {
const title = element(by.xpath("//h1[@class='page-title']"));
const name = element(by.xpath("(//form[@name='form']//span[text()='Name']/../..//span)[2]"));
const email = element(by.xpath("(//form[@name='form']//span[text()='Email']/../..//span)[2]"));
const password = element(by.xpath("(//form[@name='form']//span[text()='Password']/../..//span)[2]"));
const phone = element(by.xpath("(//form[@name='form']//span[text()='Phone']/../..//span)[2]"));
const address = element(by.xpath("(//form[@name='form']//span[text()='Address']/../..//span)[2]"));
const supportPin = element(by.xpath("(//form[@name='form']//span[text()='Support pin']/../..//span)[2]"));
const newsletter = element(by.xpath("(//form[@name='form']//span[text()='Newsletter']/../..//span)[4]"));

this.isTitleIsProfile = () => title.isDisplayed();
this.getNameText = () => name.getText();
this.getEmailText = () => email.getText();
this.getPasswordText = () => password.getText();
this.getPhoneText = () => phone.getText();
this.getAddressText = () => address.getText();
this.getSupportPinText = () => supportPin.getText();
this.getNewsletterText = () => newsletter.getText();

};
module.exports = new ProfilePage();
